import { Link } from 'react-router-dom';

function Orders() {
  const orders = [
    {
      id: 1,
      stripe_id: '123',
      name: 'John Doe',

      total: 1230,
      orderItem: [
        {
          id: 1,
          name: 'Macbook Pro',
          price: 1230,
          quantity: 1,
          image: 'https://via.placeholder.com/150',
        },
      ],
    },
  ];

  return (
    <div
      id="OrdersPage"
      className="mx-auto mt-4 min-h-[50vh] max-w-[1200px] px-2 "
    >
      <div className="min-h-[150px] w-full bg-white p-6">
        <span className="pl-4">Orders </span>

        {orders.length < 1 ? (
          <div className="flex items-center justify-center">
            You have no order history
          </div>
        ) : null}

        {orders.map((order, i) => (
          <div key={i} className="pl-[50px] text-sm">
            <div className="border-b py-1">
              <div className="pt-2">
                <span className="mr-2 font-bold">Stripe ID:</span>
                {order?.stripe_id}
              </div>

              <div className="pt-2">
                <span className="mr-2 font-bold">Total:</span>
                {order?.total}
              </div>
              <div className="flex items-center gap-4"></div>
              {order?.orderItem.map((item, i) => (
                <div key={i} className="flex items-center">
                  <Link to={`/product/${item?.id}`}>
                    <img
                      src={item?.image}
                      alt={item?.name}
                      className="rounded"
                      width="120"
                    />
                    {item?.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Orders;
