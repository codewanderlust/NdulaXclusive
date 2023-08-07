import PropTypes from 'prop-types';
import { formatCurrency } from '../utils/helpers';
import { HiOutlineHeart } from 'react-icons/hi';
import { Link } from 'react-router-dom';
function EditorsPickItem({ sneaker }) {
  const { id, image, name, brand, price, age_sex } = sneaker;
  function handleClick(e) {
    e.preventDefault();
  }
  return (
    <li className="relative max-w-[200px] border-[0.8px] border-stone-200 p-4 ">
      <img src={image} alt={name} className="w-36 sm:w-full" />
      <Link to={`/sneakers/${id}?name=${name}`}>
        <HiOutlineHeart
          size={24}
          className="absolute right-2 top-8 text-stone-500"
          onClick={handleClick}
        />

        <p>{name}</p>
        <p>{brand}</p>
        <p>{age_sex}</p>

        <p className="mt-3">{formatCurrency(price)}</p>
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
