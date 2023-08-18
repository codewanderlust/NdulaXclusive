import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import PaymentForm from './PaymentForm';

const PUBLIC_KEY =
  'pk_test_51Ng6cQLr1GAJv6ylZlkiMnLddjrJk9eOF5rZOMjD6kSLhpL1kXlwG8pgLjN6MnHBC3KCenxOrwQW2QB8kilYLUlL00Vqt7MgOl';
const stripeTestPromise = loadStripe(PUBLIC_KEY);

export default function StripeContainer() {
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm />
    </Elements>
  );
}
