import { useSelector } from 'react-redux';
import { getCart } from './cartSlice';
import EmptyCart from './EmptyCart';
import LinkButton from '../../ui/LinkButton';

import CartItem from './CartItem';

import OrderSummary from '../order/OrderSummary';

function Cart() {
  const cart = useSelector(getCart);

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
        <OrderSummary />
      </div>
    </div>
  );
}

export default Cart;
