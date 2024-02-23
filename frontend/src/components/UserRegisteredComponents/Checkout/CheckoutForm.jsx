import { React, useEffect, useState } from 'react'
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js"
import { useParams } from 'react-router'
import { buyProducto } from '../../../redux/actions/actionCurso'
import { getProductoById } from '../../../redux/actions/actionCurso'
import { comprarProducto } from '../../../redux/actions/actionUser'

export default function CheckoutForm() {

  const stripe = useStripe()
  const elements = useElements()
  const idProducto = useParams()

  const [producto, setProducto] = useState({});
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    const fetchData = async () => {
      let data = await getProductoById(idProducto.id);
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
          const response = await comprarProducto(producto._id, producto.type);
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
    <div>
         <div className="payment-info">
        <h3 className="payment-heading">Informacion de Pago</h3>
        <form
          onSubmit={handleSubmit}
          className="form-box"
          // encType="text/plain"
          // method="get"
          // target="_blank"
        >
         <div >
           <div >
             <CardElement />
           </div>
         </div>  

          <button disabled={!stripe} type='submit' className="btn">
           {loading ? (
             <div className="spinner-border text-light" role="status">
               <span className="sr-only">Cargando...</span>
             </div>
           ) : (
             "Comprar"
           )}
         </button>
        
         
        </form>
        <p className="footer-text">
          <i className="fa-solid fa-lock"></i>
         la información de tu tarjeta de crédito esta encriptada
        </p>
      </div>
    </div>
  )
}