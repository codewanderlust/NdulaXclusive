import { useSelector } from 'react-redux';
import { getCart, getTotalCartPrice, getTotalCartQuantity } from './cartSlice';
import EmptyCart from './EmptyCart';
import LinkButton from '../../ui/LinkButton';

import CartItem from './CartItem';
import { useNavigate } from 'react-router';

function Cart() {
  const cart = useSelector(getCart);
  const totalQuantity = useSelector(getTotalCartQuantity);
  const totalPrice = useSelector(getTotalCartPrice);
  const navigate = useNavigate();

  if (!cart.length) return <EmptyCart />;

  return (
    <div className=" px-4 py-3">
      <LinkButton to="/">&larr; Back to menu</LinkButton>
      <div className="gap-6 sm:flex sm:justify-between">
        <div>
          <ul className="mt-3 divide-y divide-stone-200 border-b">
            {cart?.map((item, i) => (
              <CartItem item={item} key={i} />
            ))}
          </ul>
        </div>
        <div className=" flex h-[300px] w-[350px] flex-col gap-4 rounded-md bg-stone-200 p-4">
          <div className="mb-6 flex justify-between  border-b border-stone-400 p-2 font-bold">
            <h2>Order Summary</h2>
            <p>{totalQuantity}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-xs">items Total</p>
            <span>${totalPrice}</span>
          </div>
          <div className="flex justify-center gap-2">
            <img
              className="h-7"
              src="https://fgfppclstifnqgadpqux.supabase.co/storage/v1/object/public/logo/mpesa-logo.webp?t=2023-08-11T07%3A18%3A12.926Z"
              alt=" mpesa logo"
            />
            <img
              className="h-7"
              src="https://fgfppclstifnqgadpqux.supabase.co/storage/v1/object/public/logo/airtel-logo.png?t=2023-08-11T07%3A18%3A38.948Z"
              alt="airtel logo"
            />
            <img
              className="h-7"
              src="https://fgfppclstifnqgadpqux.supabase.co/storage/v1/object/public/logo/visa-logo.jpg?t=2023-08-11T07%3A18%3A59.656Z"
              alt="visa logo"
            />
            <img
              className="h-7"
              src="https://fgfppclstifnqgadpqux.supabase.co/storage/v1/object/public/logo/mastercard-logo.png?t=2023-08-11T07%3A19%3A16.965Z"
              alt="mastercard logo"
            />
          </div>
          <div className=" flex justify-between border-t-2 border-dotted border-stone-400 p-2 font-bold">
            <p>Total</p>
            <span>${totalPrice}</span>
          </div>
          <button
            onClick={() => navigate('/login')}
            className="inline-block rounded-md  bg-green-500 px-4 py-3 text-sm font-semibold capitalize tracking-wide text-slate-50 transition-colors duration-300 hover:bg-green-400 focus:outline-none focus:ring focus:ring-green-200 focus:ring-offset-2 disabled:cursor-not-allowed md:px-6 md:py-4"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
