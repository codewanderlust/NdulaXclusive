import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { getTotalCartPrice } from '../cart/cartSlice';
import { formatCurrency } from '../../utils/helpers';
const CARD_OPTIONS = {
  iconStyle: 'solid',
  style: {
    base: {
      iconColor: '#c4f0ff',
      color: '#292524',
      fontWeight: 500,
      fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
      fontSize: '16px',
      fontSmoothing: 'antialiased',
      ':-webkit-autofill': { color: '#fce883' },
      '::placeholder': { color: '#2563eb' },
    },
    invalid: {
      iconColor: '#db2777',
      color: '#db2777',
    },
  },
};

export default function PaymentForm() {
  const total = useSelector(getTotalCartPrice);
  const [success, setSucess] = useState(false);

  const stripe = useStripe();
  const elements = useElements();

  async function handleSubmit(e) {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (!error) {
      try {
        const { id } = paymentMethod;
        const response = await axios.post('http://localhost:3000/checkout ', {
          amount: 1000,
          id,
        });

        if (response.data.success) {
          console.log('Successful payment');
          setSucess(true);
        }
      } catch {
        console.log('Error', error);
      }
    } else {
      console.log(error.message);
    }
  }

  return (
    <>
      {!success ? (
        <form onSubmit={handleSubmit}>
          <fieldset className="FormGroup">
            <div className="FormRow">
              <CardElement options={CARD_OPTIONS} />
            </div>
          </fieldset>
          <button className="mt-4 w-full rounded-full bg-blue-600 p-3 text-lg font-semibold text-white">
            Confirm and Pay {total > 0 ? formatCurrency(total) : ''}
          </button>
        </form>
      ) : (
        <div>
          <h2>You just bought sweet spatula</h2>
        </div>
      )}
    </>
  );
}
