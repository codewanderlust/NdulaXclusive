/* eslint react/prop-types: 0 */
import { Link } from 'react-router-dom';
import { formatCurrency } from '../utils/helpers';

export default function Product({ product }) {
  return (
    <>
      <Link
        to={`/sneakers/${product.id}?name=${product.name}`}
        className="mx-auto max-w-[200px] rounded border border-gray-50 bg-gray-100 p-1.5 hover:border-gray-200 hover:shadow-xl"
      >
        {product?.image ? (
          <img className="cursor-pointer rounded" src={product.image} />
        ) : null}

        <div className="px-1 pt-2">
          <div className="cursor-pointer text-[15px] font-semibold hover:underline">
            {product?.name}
          </div>
          <div className="font-extrabold">{formatCurrency(product?.price)}</div>

          <div className="relative flex items-center text-[12px] text-gray-500">
            <div className="line-through">
              {formatCurrency(product?.price * 1.2)}
            </div>
            <div className="px-2">-</div>
            <div className="line-through">20%</div>
          </div>
        </div>
      </Link>
    </>
  );
}
