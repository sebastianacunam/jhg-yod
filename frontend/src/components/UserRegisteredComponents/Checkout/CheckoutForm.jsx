import { React, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js"
import { useParams } from 'react-router'
import { buyCurso } from '../../../redux/actions/actionCurso'


export default function CheckoutForm() {

  const stripe = useStripe()
  const elements = useElements()
  const dispatch = useDispatch()
  const idProducto = useParams()

  const [loading, setLoading] = useState(false)

  console.log('id del producto a comprar: ',idProducto.id)

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
          [{
            pm,
            qty: 1,
            id: idProducto.id
          }]
        ))
        console.log('a veeeerrr',buy)

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
