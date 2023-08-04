import { HiUser, HiHeart, HiShoppingCart } from "react-icons/hi2";

function Icons() {
  return (
    <ul className="flex justify-center items-center gap-2">
      <li className="flex items-center justify-center gap-2  ">
        <HiUser />
        <span>Sign in</span>
      </li>
      <li className="flex items-center justify-center gap-2 ">
        <HiHeart />
        <span>Favourites</span>
      </li>
      <li className="flex items-center justify-center gap-2 ">
        <HiShoppingCart />
        <span>Cart</span>
      </li>
    </ul>
  );
}

export default Icons;
