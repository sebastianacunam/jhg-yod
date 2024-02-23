import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import CheckoutForm from "./CheckoutForm.jsx"

/**
 * CAMBIAR LA PUBLIC KEY A LA DEL PROYECTO 
 * REAL UNA VEZ TERMINADO TODO EL PROYECTO
 */
const stripePublicKey = 'pk_test_51OjXaXKdPYG0tiaRNelkZUnP1o9TnKbHjhfWWy93pYNs3RDXvVXMHmK2A0ajKKi8DWQKeFvuF2TxYU9VdF3bKDWG00kcXflPVd'

const stripePromise = loadStripe(stripePublicKey)

export default function Checkout() {
  return (
    <Elements stripe={stripePromise}>
    <div>
      <CheckoutForm />
    </div>
  </Elements>
  )
}
