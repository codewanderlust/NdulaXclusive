import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '../../ui/Button';
import { deleteItems } from './cartSlice';
function DeleteItem({ sneakerId }) {
  const dispatch = useDispatch();
  return (
    //this is a faster way of dispatching an action from the store without having the need to create a handler fxn
    <Button type="small" onClick={() => dispatch(deleteItems(sneakerId))}>
      Delete
    </Button>
  );
}

export default DeleteItem;

DeleteItem.propTypes = {
  sneakerId: PropTypes.number.isRequired,
};
