import { CiDeliveryTruck } from 'react-icons/ci';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { getOrder } from '../services/apiOrder';

import OrderItem from '../features/order/OrderItem';

export default function TopMenu() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const data = await getOrder();
        setOrders(data);
      } catch (error) {
        toast.error('Something went wrong?', { autoClose: 3000 });
      }
    };
    fetchOrders();
  }, []);

  return (
    <>
      <div id="OrdersPage" className="mx-auto mt-4 max-w-6xl px-2 sm:w-[800px]">
        <div className="mb-2 flex items-center text-base sm:mb-4 sm:text-xl">
          <CiDeliveryTruck className="text-green-500" size={35} />
          <span className="pl-4">Order Summary</span>
        </div>
        {orders.length < 1 ? (
          <div className="flex items-center justify-center">
            You have no order history
          </div>
        ) : null}

        {orders.map((order, i) => (
          <OrderItem key={i} order={order} />
        ))}
      </div>
    </>
  );
}
