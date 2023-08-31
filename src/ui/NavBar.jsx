import { Link, useNavigate } from 'react-router-dom';
import { BsChevronDown } from 'react-icons/bs';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useUser } from '../features/authentication/useUser';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { getTotalCartQuantity } from '../features/cart/cartSlice';
import { useLogout } from '../features/authentication/useLogout';
import { HiMenu, HiOutlineUser, HiOutlineX } from 'react-icons/hi';
import SearchBar from '../ui/SearchBar';
import TopMenu from '../ui/TopMenu';

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [isMenu, setIsMenu] = useState(false);
  const totalCartItems = useSelector(getTotalCartQuantity);
  const navigate = useNavigate();
  const { user } = useUser();
  const fullName = user?.user_metadata?.fullName;

  const { logout } = useLogout();

  function handleLogout() {
    logout();
    setIsMenu(false);
  }
  const isLoggedInMobile = user && user.id;
  const Links = [
    { name: 'Home', link: '/men', dataTest: 'nav-home' },
    { name: 'Favorites', link: '/favorites', dataTest: 'nav-favorites' },
    { name: 'Men', link: '/men', dataTest: 'nav-men' },
    { name: 'Women', link: '/women', dataTest: 'nav-women' },
    { name: 'Kids', link: '/kids', dataTest: 'nav-kids' },
    { name: 'Accessories' },
    { name: 'Sports' },
    { name: 'Health and Beauty' },
    { name: 'Industrial Equipment' },
    { name: 'Motors' },
    { name: 'Home & Garden' },
  ];

  const itemsToExcludeFromMobile = [
    'Accessories',
    'Sports',
    'Health and Beauty',
    'Industrial Equipment',
    'Motors',
    'Home & Garden',
  ];

  //here we check if the user is logged in or not and display the appropriate menu, the user exists if we have a user id
  const mobileLinks = Links.filter(
    (link) => !itemsToExcludeFromMobile.includes(link.name),
  ).concat([
    {
      name: isLoggedInMobile ? 'Logout' : 'Login',
      link: isLoggedInMobile ? '/men' : '/login',
    },
    { name: 'My Orders', link: '/orders' },
  ]);
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
    <>
      <nav className="hidden bg-white sm:block">
        <TopMenu />
        <SearchBar />
        <div id="SubMenu" className="border-b">
          <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between">
            <ul
              id="TopMenuLeft"
              className=" flex h-8 items-center bg-white px-2 text-[13px] text-[#333333] md:flex-row"
            >
              {Links.map((link, i) => (
                <Link
                  to={link?.link}
                  key={i}
                  className="cursor-pointer px-3"
                  data-test={link.dataTest}
                >
                  {link?.name}
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* mobile navigation */}
      <nav className="sm:hidden">
        <div className="flex justify-between bg-white p-3">
          <div>
            <Link
              to="/men"
              className="flex items-center text-lg font-bold sm:mb-4"
            >
              <p className="font-satisfy">ndula</p>
              <span>Xclusive</span>
            </Link>
          </div>

          <div className="flex gap-2">
            <HiOutlineUser size={24} />
            <div onClick={() => navigate('/cart')} className="relative">
              <AiOutlineShoppingCart size={22} />
              {totalCartItems > 0 && (
                <div className="absolute -right-[5px] -top-[2px] h-[14px] w-[14px] rounded-full bg-red-500 text-[10px] text-white">
                  <div className="-mt-[1px] flex items-center justify-center">
                    {totalCartItems}
                  </div>
                </div>
              )}
            </div>
            {/* Menu icon */}
            <div onClick={() => setOpen(!open)} className="cursor-pointer">
              {open ? <HiOutlineX size={24} /> : <HiMenu size={24} />}
            </div>
          </div>
        </div>

        <ul
          className={`fixed left-0 right-0 top-12 z-[999] flex flex-col items-center gap-2 bg-white pb-2 transition-all duration-500 ease-in ${
            open ? 'opacity-100' : 'pointer-events-none opacity-0'
          }`}
        >
          {mobileLinks.map((link, i) => (
            <Link
              to={link?.link}
              key={i}
              className={`cursor-pointer px-3 ${
                link?.name === 'Login' || link?.name === 'Logout'
                  ? ' font-extrabold text-blue-500'
                  : ''
              }`}
              onClick={() => {
                setOpen(false);
                if (link?.name === 'Logout' && isLoggedIn) {
                  handleLogout();
                }
              }}
              style={{ opacity: open ? 1 : 0 }}
            >
              {link?.name}
            </Link>
          ))}
        </ul>
        <SearchBar />
      </nav>
    </>
  );
}
