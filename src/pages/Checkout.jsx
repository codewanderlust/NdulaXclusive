import { useSelector } from 'react-redux';
import {
  getCart,
  getTotalCartPrice,
  getTotalCartQuantity,
} from '../features/cart/cartSlice';
import CheckoutItem from '../features/checkout/CheckoutItem';
import { formatCurrency } from '../utils/helpers';

function Checkout() {
  const cart = useSelector(getCart);

  const totalCartItems = useSelector(getTotalCartQuantity);
  const totalPrice = useSelector(getTotalCartPrice);

  return (
    <>
      <div id="CheckoutPage" className=" mt-4 ">
        <div className="mb-4 mt-4 text-2xl font-bold">Checkout</div>

        <div className="relative mx-auto flex w-full flex-col items-baseline justify-between gap-4 sm:flex-row">
          <div className="w-[65%]">
            <div className="rounded-lg border bg-white p-4">
              <h2 className="mb-2 text-xl font-semibold">Shipping Address</h2>
              <div>
                <ul className="mt-2 text-sm">
                  <li>Name: test</li>
                  <li>Address: test</li>
                  <li>Zipcode: test</li>
                  <li>City: test</li>
                  <li>Country: test</li>
                </ul>
              </div>
            </div>

            <div id="Items" className="mt-4 rounded-lg bg-white">
              {cart.map((product) => (
                <CheckoutItem key={product.id} product={product} />
              ))}
            </div>
          </div>

          <div
            id="PlaceOrder"
            className="relative -top-[6px] w-[35%] rounded-lg border"
          >
            <div className="p-4">
              <div className="mb-1 flex items-baseline justify-between text-sm">
                <div>Items ({totalCartItems})</div>
                <div>{formatCurrency(totalPrice)}</div>
              </div>
              <div className="mb-4 flex items-center justify-between text-sm">
                <div>Shipping:</div>
                <div>Free</div>
              </div>

              <div className="border-t" />

              <div className="my-4 flex items-center justify-between">
                <div className="font-semibold">Order total</div>
                <div className="text-2xl font-semibold">
                  {formatCurrency(totalPrice)}
                </div>
              </div>

              <form>
                <div
                  className="rounded-sm border border-gray-500 p-2"
                  id="card-element"
                />

                <p
                  id="card-error"
                  role="alert"
                  className="relative top-2 text-center font-semibold text-red-700"
                />

                <button
                  type="submit"
                  className="mt-4 w-full rounded-full bg-blue-600 p-3 text-lg font-semibold text-white"
                >
                  <div>Confirm and pay</div>
                </button>
              </form>
            </div>

            <div className="flex items-center justify-center gap-2 border-t p-4">
              <img
                width={50}
                src="https://fgfppclstifnqgadpqux.supabase.co/storage/v1/object/public/logo/ndulaxclusive-logo.png?t=2023-08-12T08%3A14%3A06.423Z"
              />
              <div className=" mb-2 mt-2 font-light">MONEY BACK GUARANTEE</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
