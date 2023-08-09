import { useQuery } from '@tanstack/react-query';
// import { calcMinutesLeft, formatCurrency, formatDate } from '../utils/helpers';

import { getOrder } from '../services/apiOrder';
import OrderItem from '../features/order/OrderItem';
import Loader from '../ui/Loader';
import { useParams } from 'react-router';
import EmptyCart from '../features/cart/EmptyCart';

function Order() {
  const { orderId } = useParams(); // Get orderId from URL params

  // Use the useQuery hook to fetch order data
  const { isLoading, data: order } = useQuery(['order', orderId], () =>
    getOrder(orderId),
  );

  if (isLoading) return <Loader />;

  if (!order) {
    return <p>No order data available.</p>;
  }

  //we used JSON.parse to convert the cart string into an array
  const cartData = JSON.parse(order.cart);

  // if (!Array.isArray(cartData)) {
  //   return <p>Cart data is not in the expected format.</p>;
  // }

  if (cartData.length === 0) {
    return <EmptyCart />;
  }
  return (
    <ul className="divide-y divide-stone-200 border-b border-t">
      {cartData.map((item, j) => (
        <OrderItem item={item} key={j} />
      ))}
    </ul>
  );
}

export default Order;
