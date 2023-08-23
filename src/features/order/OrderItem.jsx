/* eslint react/prop-types: 0 */
import { Link } from 'react-router-dom';
import { formatCurrency } from '../../utils/helpers';
import moment from 'moment/moment';

export default function OrderItem({ order }) {
  const deliveryIn = moment(order?.estimatedDelivery)
    .add(2, 'hours')
    .diff(moment(), 'minutes'); // Calculate the difference in minutes

  const hoursRemaining = Math.floor(deliveryIn / 60); // Calculate hours remaining
  const minutesRemaining = deliveryIn % 60; //

  return (
    <div className=" text-sm">
      <div className="flex flex-wrap items-center justify-between gap-2 bg-stone-200 px-6 py-5">
        <p className="font-medium ">
          {deliveryIn >= 0
            ? `Only ${hoursRemaining} hr(s) and ${minutesRemaining} minutes left 😃`
            : 'Order should have arrived'}
        </p>
        <p className="text-xs text-stone-500">
          (Estimated delivery:{' '}
          {moment(order?.estimatedDelivery).add(3, 'hours').calendar()})
        </p>
      </div>
      <div className="border-b py-1">
        <div className="pt-2">
          <span className="mr-2 font-bold">Name:</span>
          {order?.name}
        </div>

        <div className="pt-2">
          <span className="mr-2 font-bold">Delivery Address:</span>
          {order?.address}
        </div>

        <div className="flex flex-col items-center gap-4 sm:flex-row">
          {JSON.parse(order?.cart).map((item, i) => (
            <div
              key={i}
              className="mt-4 flex flex-col items-center gap-4 sm:mt-0 sm:flex-row"
            >
              <Link
                className="py-1 font-bold text-blue-500 hover:underline"
                to={`/sneakers/${item.id}`}
              >
                <img className="rounded" width="120" src={item.image} />
              </Link>
              <div className="flex flex-col ">
                <p className="font-bold">{item.name}</p>
                <p>{item.quantity} pair(s)</p>

                <span className="mt-auto">
                  {formatCurrency(item.totalPrice)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
