import PropTypes from 'prop-types';

import { HiOutlineHeart } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { formatCurrency } from '../utils/helpers';
function EditorsPickItem({ sneaker }) {
  const { id, image, name, price } = sneaker;
  function handleClick(e) {
    e.preventDefault();
  }
  return (
    <li className="relative mx-auto max-w-[200px] rounded border border-gray-50 bg-gray-100 p-1.5 ">
      <img src={image} alt={name} className="w-36 sm:w-full" />
      <Link to={`/sneakers/${id}?name=${name}`}>
        <HiOutlineHeart
          size={24}
          className="absolute right-2 top-8 text-stone-500"
          onClick={handleClick}
        />
        <div className="px-1 pt-2">
          <div className="cursor-pointer text-[15px] font-semibold hover:underline">
            {name}
          </div>
          <div className="font-extrabold">{formatCurrency(price / 1.2)}</div>

          <div className="relative flex items-center text-[12px] text-gray-500">
            <div className="line-through">{formatCurrency(price * 1.2)}</div>
            <div className="px-2">-</div>
            <div className="line-through">20%</div>
          </div>
        </div>
      </Link>
    </li>
  );
}

export default EditorsPickItem;

EditorsPickItem.propTypes = {
  sneaker: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    age_sex: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    id: PropTypes.number,
  }).isRequired,
};
