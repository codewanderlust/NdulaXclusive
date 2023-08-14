import PropTypes from 'prop-types';
import { formatCurrency } from '../utils/helpers';
function FavouriteItem({ item }) {
  const { image, name, price } = item;
  console.log(item);
  return (
    <div className="flex gap-2 border-b py-1">
      <div className="pt-2 font-bold">
        <img src={image} alt={name} />
      </div>
      <div className="pt-2 font-bold">
        <p>{name}</p>
      </div>
      <div className="pt-2 text-sm font-semibold">
        <p>{formatCurrency(price)}</p>
      </div>
    </div>
  );
}

export default FavouriteItem;

FavouriteItem.propTypes = {
  item: PropTypes.object.isRequired,
};
