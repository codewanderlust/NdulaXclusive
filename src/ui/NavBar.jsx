import { Link, useNavigate } from 'react-router-dom';
import { BsChevronDown } from 'react-icons/bs';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useUser } from '../features/authentication/useUser';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { getTotalCartQuantity } from '../features/cart/cartSlice';
import { useLogout } from '../features/authentication/useLogout';
import { debounce } from 'debounce';
// import { HiMenu, HiOutlineChevronLeft, HiOutlineX } from 'react-icons/hi';

import { AiOutlineSearch } from 'react-icons/ai';
import { BiLoaderCircle } from 'react-icons/bi';
import { getSneakerByName } from '../services/apiSneakers';
import { formatCurrency } from '../utils/helpers';

export default function NavBar() {
  const [items, setItems] = useState([]);
  // const [toggleMenu, setToggleMenu] = useState(false);

  const [isSearching, setIsSearching] = useState(null);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isMenu, setIsMenu] = useState(false);
  const totalCartItems = useSelector(getTotalCartQuantity);
  const navigate = useNavigate();
  const { user } = useUser();
  console.log(user);
  const { logout } = useLogout();

  const handleSearchName = debounce(async (event) => {
    const searchTerm = event.target.value.trim(); // Trim leading/trailing spaces

    if (searchTerm === '') {
      setItems([]);
      setIsDropdownVisible(false);
      return;
    }

    setIsSearching(true);

    try {
      const response = await getSneakerByName(searchTerm);

      if (response) {
        setItems(response);
        setIsSearching(false);
        setIsDropdownVisible(true);
      } else {
        setItems([]);
        setIsSearching(false);
        setIsDropdownVisible(false);
      }
    } catch (error) {
      console.log(error);
      alert(error);
    }
  }, 500);

  function handleLogout() {
    logout();
    setIsMenu(false);
  }

  let Links = [
    { name: 'Home', link: '/men' },
    { name: 'Favorites', link: '/favorites' },
    { name: 'Men', link: '/men' },
    { name: 'Women', link: '/women' },
    { name: 'Kids', link: '/kids' },
    { name: 'Accessories' },
    { name: 'Sports' },
    { name: 'Health and Beauty' },
    { name: 'Industrial Equipment' },
    { name: 'Motors' },
    { name: 'Home & Garden' },
  ];

  //here we check if the user is logged in or not and display the appropriate menu, the user exists if we have a user id
  const isLoggedIn = () => {
    if (user && user?.id) {
      return (
        <button
          onClick={() => (!isMenu ? setIsMenu(true) : setIsMenu(false))}
          className="flex cursor-pointer items-center gap-2 hover:underline"
        >
          <div>Hi, {user.name}</div>
          <BsChevronDown />
        </button>
      );
    }

    return (
      <Link
        to="/login"
        className="flex cursor-pointer items-center gap-2 hover:underline"
      >
        <div>Login</div>
        <BsChevronDown />
      </Link>
    );
  };

  return (
    <nav className="bg-white">
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
                    <img width={50} src={user?.picture} />
                    <div className="text-[13px] font-bold">{user?.name}</div>
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

            <li className="cursor-pointer px-3 hover:underline">
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
      <div id="MainHeader" className="border-b">
        <nav className="mx-auto flex w-full max-w-[1200px] items-center justify-between">
          <div className="flex w-full items-center">
            <div className="mx-auto flex w-full max-w-[1150px] justify-between gap-10 px-3 py-5 lg:justify-start">
              <Link
                to="/men"
                className="flex items-center text-lg font-bold sm:mb-4"
              >
                <p className="font-satisfy ">ndula</p>
                <span>Xclusive</span>
              </Link>

              <div className="w-full">
                <div className="relative">
                  <div className="flex items-center">
                    <div className="relative flex w-full items-center border-2 border-gray-900 p-2">
                      <button className="flex items-center">
                        <AiOutlineSearch size={22} />
                      </button>

                      <input
                        className="
                                                    w-full
                                                    pl-3
                                                    text-sm
                                                    placeholder-gray-400
                                                    focus:outline-none
                                                "
                        onChange={handleSearchName}
                        placeholder="Search for anything"
                        type="text"
                      />

                      {isSearching ? (
                        <BiLoaderCircle
                          className="mr-2 animate-spin"
                          size={22}
                        />
                      ) : null}

                      {isDropdownVisible && items.length > 0 ? (
                        <div className="absolute left-0 top-12 z-20 h-auto w-full max-w-[910px] border bg-white p-1">
                          {items.map((item, i) => (
                            <div className="p-1" key={i}>
                              <Link
                                to={`/sneakers/${item.id}`}
                                onClick={() => setIsDropdownVisible(false)}
                                className="flex w-full cursor-pointer items-center justify-between p-1 px-2 hover:bg-gray-200"
                              >
                                <div className="flex items-center">
                                  <img
                                    className="rounded-md"
                                    width="40"
                                    src={item?.image}
                                  />
                                  <div className="ml-2 truncate">
                                    {item?.name}
                                  </div>
                                </div>
                                <div className="truncate">
                                  {formatCurrency(item?.price)}
                                </div>
                              </Link>
                            </div>
                          ))}
                        </div>
                      ) : null}
                    </div>

                    <button className="ml-2 flex items-center bg-blue-600 p-[11px] px-14 text-sm font-semibold text-white">
                      Search
                    </button>

                    <div className="cursor-pointer px-2 text-xs hover:text-blue-500">
                      Advanced
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div id="SubMenu" className="border-b">
        <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between">
          <ul
            id="TopMenuLeft"
            className="
                            flex 
                            h-8 
                            items-center 
                            px-2
                            text-[13px] 
                            text-[#333333]
                        "
          >
            {Links.map((link, i) => (
              <Link to={link?.link} key={i} className="cursor-pointer px-3">
                {link?.name}
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
