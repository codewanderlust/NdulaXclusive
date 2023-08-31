import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useNavigate } from 'react-router';
import { useUser } from '../features/authentication/useUser';
import { BsChevronDown } from 'react-icons/bs';
import { useLogout } from '../features/authentication/useLogout';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { getTotalCartQuantity } from '../features/cart/cartSlice';
import { Link } from 'react-router-dom';

function TopMenu() {
  const navigate = useNavigate();
  const totalCartItems = useSelector(getTotalCartQuantity);
  const [isMenu, setIsMenu] = useState(false);
  const { user } = useUser();
  const fullName = user?.user_metadata?.fullName;
  const avatar = user?.user_metadata?.avatar || './logo/default-user.jpg';

  const isLoggedIn = () => {
    if (user && user?.id) {
      return (
        <button
          onClick={() => (!isMenu ? setIsMenu(true) : setIsMenu(false))}
          className="flex cursor-pointer items-center gap-2 hover:underline"
        >
          <div>Hi, {fullName}</div>
          <BsChevronDown />
        </button>
      );
    }
  };
  const { logout } = useLogout();

  function handleLogout() {
    logout();
    setIsMenu(false);
  }

  return (
    <div id="TopMenu" className="border-b">
      <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between">
        <ul
          id="TopMenuLeft"
          className="flex h-8 items-center px-2 text-[11px] text-[#333333]"
        >
          <li className="relative px-3">
            {isLoggedIn()}

            {/* in the dropdown menu below we hide and display the menu when the user is logged in and hidden when its not  */}
            <div
              id="AuthDropdown"
              className={`
                            absolute left-0 top-[20px] z-40 w-[200px] border bg-white text-[#333333] shadow-lg
                            ${isMenu ? 'visible' : 'hidden'}
                        `}
            >
              <div>
                <div className="flex items-center justify-start gap-1 p-3">
                  <img
                    width={50}
                    src={avatar || './logo/default-user.jpg'}
                    alt={`Avatar of ${fullName}`}
                  />
                  <div className="text-[13px] font-bold">{fullName}</div>
                </div>
              </div>

              <div className="border-b" />

              <ul className="bg-white">
                <li className="w-full cursor-pointer px-4 py-2 text-[11px] text-blue-500 hover:text-blue-600 hover:underline">
                  <Link to="/orders">My orders</Link>
                </li>
                <li
                  onClick={() => handleLogout()}
                  className="w-full cursor-pointer px-4 py-2 text-[11px] text-blue-500 hover:text-blue-600 hover:underline"
                >
                  Sign out
                </li>
              </ul>
            </div>
          </li>
          <li className="cursor-pointer px-3 hover:underline">Daily Deals</li>
          <li className="cursor-pointer px-3 hover:underline">
            Help & Contact
          </li>
        </ul>

        <ul
          id="TopMenuRight"
          className="flex h-8 items-center px-2 text-[11px] text-[#333333]"
        >
          <li
            onClick={() => navigate('/address')}
            className="flex cursor-pointer items-center gap-2 px-3 hover:underline"
          >
            Sell
          </li>
          <li
            onClick={() => navigate('/address')}
            className="flex cursor-pointer items-center gap-2 px-3 hover:underline"
          >
            Watchlist
          </li>
          <li
            onClick={() => navigate('/address')}
            className="flex cursor-pointer items-center gap-2 px-3 hover:underline"
          >
            Ship to
          </li>

          <li
            className="cursor-pointer px-3 hover:underline"
            data-set="cart-icon"
          >
            <div onClick={() => navigate('/cart')} className="relative">
              <AiOutlineShoppingCart size={22} />
              {totalCartItems > 0 ? (
                <div className="absolute -right-[5px] -top-[2px] h-[14px] w-[14px] rounded-full bg-red-500 text-[10px] text-white">
                  <div className=" -mt-[1px] flex items-center justify-center">
                    {totalCartItems}
                  </div>
                </div>
              ) : (
                <div></div>
              )}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TopMenu;
