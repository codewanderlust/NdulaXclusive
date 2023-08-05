import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '../../ui/Button';
import { decreaseItemQuantity, increaseItemQuantity } from './cartSlice';

function UpdateItemQuantity({ sneakerId, currentQuantity }) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-1 md:gap-3">
      <Button
        type="round"
        onClick={() => dispatch(decreaseItemQuantity(sneakerId))}
      >
        -
      </Button>
      <span className="text-sm font-medium">{currentQuantity}</span>
      <Button
        type="round"
        onClick={() => dispatch(increaseItemQuantity(sneakerId))}
      >
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;

UpdateItemQuantity.propTypes = {
  sneakerId: PropTypes.number.isRequired,
  currentQuantity: PropTypes.number,
};
