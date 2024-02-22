import { React, useEffect, useState } from 'react'
import { React, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js"
import { useParams } from 'react-router'
import { buyCurso } from '../../../redux/actions/actionCurso'
import { getCursoById } from '../../../redux/actions/actionCurso'

export default function CheckoutForm() {

  const stripe = useStripe()
  const elements = useElements()
  const dispatch = useDispatch()
  const idProducto = useParams()

  const [producto, setProducto] = useState(false)
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    const fetchData = async () => {
      let data = await getCursoById(idProducto.id);
      setProducto(data);
    };
    fetchData();
  }, [idProducto]);

  async function handleSubmit (){
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement)
    })
    setLoading(true)

    if(!error){
      const pm = paymentMethod.id
      try {
        const buy = await dispatch(buyCurso(
          {
            type: producto.type,
            pm,
            qty: 1
          }, 
          producto._id
        ))
        console.log('😒 dispatch buycurso', buy)
        
        if (buy.payload.data.client_secret) {
          alert("Pago recibido!")
          // setTimeout(() => {
          //   navigate("/confirmation")
          // }, 1000)

        } else {
          alert("Pago rechazado!")

        }
        elements.getElement(CardElement).clear()
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <div>
         <div className="payment-info">
        <h3 className="payment-heading">Informacion de Pago</h3>
        <form
          onSubmit={(e)=>handleSubmit(e)}
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
         
    

          <button disabled={!stripe} className="btn">
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