import { Link } from 'react-router-dom';
import { CiDeliveryTruck } from 'react-icons/ci';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { getOrder } from '../services/apiOrder';
import { formatCurrency } from '../utils/helpers';

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

  console.log(orders);

  return (
    <>
      <div
        id="OrdersPage"
        className="mx-auto mt-4 min-h-[50vh] max-w-[1200px] px-2"
      >
        <div className="min-h-[150px] w-full bg-white p-6">
          <div className="flex items-center text-xl">
            <CiDeliveryTruck className="text-green-500" size={35} />
            <span className="pl-4">Orders</span>
          </div>
          {orders.length < 1 ? (
            <div className="flex items-center justify-center">
              You have no order history
            </div>
          ) : null}

          {orders.map((order) => (
            <div key={order?.orderId} className="pl-[50px] text-sm">
              <div className="border-b py-1">
                <div className="pt-2">
                  <span className="mr-2 font-bold">Name:</span>
                  {order?.name}
                </div>

                <div className="pt-2">
                  <span className="mr-2 font-bold">Delivery Address:</span>
                  {order?.address}
                </div>

                {/* <div className="pt-2">
                  <span className="mr-2 font-bold">Order Created:</span>
                  {moment(order?.created_at).calendar()}
                </div>

                <div className="py-2">
                  <span className="mr-2 font-bold">Delivery Time:</span>
                  {moment(order?.created_at).add(3, 'days').calendar()}
                </div> */}

                <div className="flex items-center gap-4">
                  {JSON.parse(order?.cart).map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
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
          ))}
        </div>
      </div>
    </>
  );
}
