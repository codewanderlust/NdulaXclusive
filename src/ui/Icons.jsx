import { HiUser, HiHeart, HiShoppingCart } from 'react-icons/hi2';
import { useSelector } from 'react-redux';
import { getTotalCartQuantity } from '../features/cart/cartSlice';
import { Link } from 'react-router-dom';

function Icons() {
  const totalQuantity = useSelector(getTotalCartQuantity);

  // if (!totalQuantity) return null;
  return (
    <ul className="flex items-center justify-center gap-2 text-sm ">
      <li className="flex items-center justify-center gap-2  ">
        <HiUser />
        <span>Login</span>
      </li>
      <li className="flex items-center justify-center gap-2 ">
        <HiHeart />
        <span>Favourites</span>
      </li>
      <Link to="/cart">
        <li className="relative  flex items-center justify-center gap-2">
          <HiShoppingCart size={16} />
          <span>Cart</span>

          <span className=" absolute bottom-2 right-[-22px] h-6 w-6 rounded-full bg-green-400 p-1 text-center text-xs font-extrabold text-slate-100">
            {totalQuantity}
          </span>
        </li>
      </Link>
    </ul>
  );
}

export default Icons;
