import PropTypes from 'prop-types';
import { formatCurrency } from '../../utils/helpers';

import DeleteItem from './DeleteItem';
import UpdateItemQuantity from './UpdateItemQuantity';
import { getCurrentQuantityById } from './cartSlice';
import { useSelector } from 'react-redux';

function CartItem({ item }) {
  const { id, name, quantity, totalPrice } = item;
  console.log(id, 'item ID');
  const currentQuantity = useSelector(getCurrentQuantityById(id));

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between sm:gap-12 ">
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

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    totalPrice: PropTypes.number.isRequired,
  }).isRequired,
};
