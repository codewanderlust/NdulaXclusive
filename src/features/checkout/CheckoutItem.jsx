/* eslint-disable react/prop-types */
import { formatCurrency } from '../../utils/helpers';

function CheckoutItem({ product }) {
  return (
    <>
      <div className="mb-2 flex justify-start rounded-lg border p-4">
        <img
          className="h-[150px] rounded-md sm:w-[150px]"
          src={product.image}
        />

        <div className="overflow-hidden pl-2">
          <div className="font-semibold">{product.name}</div>

          <div className="text-lg font-semibold ">
            <span className="font-bold">{formatCurrency(product.price)}</span>
          </div>

          <div className="relative flex items-center text-[14px] text-gray-500">
            <div className="line-through">
              {formatCurrency(product.price * 1.2)}
            </div>
            <div className="px-2">-</div>
            <div className="line-through">20%</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckoutItem;
