import { React, useEffect, useState } from 'react'
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js"
import { useParams } from 'react-router'
import { buyProducto } from '../../../redux/actions/actionCurso'
import { getCursoById } from '../../../redux/actions/actionCurso'
import { comprarCurso } from '../../../redux/actions/actionUser'
import '../../../assets/scss/layout/_checkoutForm.scss'
import '../../../assets/scss/base/_globales.scss'


export default function CheckoutForm() {

  const stripe = useStripe()
  const elements = useElements()
  const idProducto = useParams()

  const [producto, setProducto] = useState({});
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    const fetchData = async () => {
      let data = await getCursoById(idProducto.id);
      setProducto(data);
    };
    fetchData();
  }, [idProducto]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement)
    });
    setLoading(true);

    if (!error) {
      const pm = paymentMethod.id;
      try {
        const buy = await buyProducto(producto._id, { type: producto.type, pm, qty: 1 }); // dispatch(buyCurso({ type: producto.type, pm, qty: 1 }, producto._id))
        if (buy.client_secret) {
          const response = await comprarCurso(producto._id);
          if (response === false) {
            alert("Pago recibido!")
            window.location.href = "http://localhost:5173/compra-exitosa"
          } else {
            alert("Pago rechazado!")
          }
        } else {
          alert("Pago rechazado!")
        }
        elements.getElement(CardElement).clear()
        setLoading(false);
      } catch (error) {
        console.log(error)
      }
    } else {
      alert("COMPLETE LOS CAMPOS REQUERIDOS");
      setLoading(false);
    }
  };

  return (
    <div className='checkout-container'>
        <div className='container-top'>
          <h5 className='product-type'>El {producto.type} ya es casi tuyo</h5>
        </div>

        <div className='container-bot'>
          <div className='left-side'>
            <h3>{producto.name}</h3>
            <h3>Precio: 50 USD</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo similique quidem fugit adipisci nobis maxime architecto consectetur earum autem culpa. Quis iure explicabo similique minus, eveniet ullam voluptates debitis tempora!
            </p>
          </div>
         
          <div className='right-side'>

            <h3 className="payment-heading">Informacion de Pago</h3>
            <form onSubmit={handleSubmit} className="form-box">
            <div className='checkout-form-container'>
              <div className='inner-checkout-form'>
                <CardElement />
              </div>
            </div>  
            <div className='btn-cont'>
              <button disabled={!stripe} type='submit' className="checkout-btn">
              {loading ? (
                <div className="spinner-border text-light" role="status">
                  <span className="sr-only">Cargando...</span>
                </div>
              ) : (
                "Comprar"
              )}
              </button>
            </div>
            
            
            </form>
            <p className="footer-text">la información de tu tarjeta de crédito esta encriptada</p>

          </div>
        </div>         
    </div>
  )
}