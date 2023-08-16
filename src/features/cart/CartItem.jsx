/* eslint-disable react/prop-types */
import { formatCurrency } from '../../utils/helpers';

import DeleteItem from './DeleteItem';
import UpdateItemQuantity from './UpdateItemQuantity';
import { getCurrentQuantityById } from './cartSlice';
import { useSelector } from 'react-redux';

function CartItem({ item }) {
  const { id, image, name, quantity, totalPrice } = item;
  const currentQuantity = useSelector(getCurrentQuantityById(id));

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between sm:gap-12 ">
      <div>
        <img className="w-10" src={image} alt="name" />
      </div>
      <p className="mb-1  sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between text-sm font-bold sm:gap-6">
        <p>{formatCurrency(totalPrice)}</p>
        <UpdateItemQuantity sneakerId={id} currentQuantity={currentQuantity} />
        <DeleteItem sneakerId={id} />
      </div>
    </li>
  );
}

export default CartItem;
