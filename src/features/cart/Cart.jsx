import { useDispatch, useSelector } from 'react-redux';
import {
  clearCart,
  getCart,
  getTotalCartPrice,
  getTotalCartQuantity,
} from './cartSlice';
import EmptyCart from './EmptyCart';
import LinkButton from '../../ui/LinkButton';
import Button from '../../ui/Button';
import CartItem from './CartItem';

function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector(getCart);
  const totalQuantity = useSelector(getTotalCartQuantity);
  const totalPrice = useSelector(getTotalCartPrice);
  if (!cart.length) return <EmptyCart />;

  function handleClearCart() {
    dispatch(clearCart());
  }
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

          <div className="mt-6 space-x-2">
            <Button to="/order/new" type="primary">
              Order Sneakers
            </Button>
            <Button type="secondary" onClick={handleClearCart}>
              Clear Cart
            </Button>
          </div>
        </div>
        <div className="flex h-[200px] w-[350px] flex-col rounded-md bg-stone-200 p-4">
          <div className="mb-6 flex justify-between  border-b border-stone-400 p-2 font-bold">
            <h2>Order Summary</h2>
            <p>{totalQuantity}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-xs">items Total</p>
            <span>${totalPrice}</span>
          </div>
          <div className="mt-auto flex justify-between border-t-2 border-dotted border-stone-400 p-2 font-bold">
            <p>Total</p>
            <span>${totalPrice}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
