/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';

import Button from '../../ui/Button';
import { deleteItems } from './cartSlice';
import { toast } from 'react-toastify';
function DeleteItem({ sneakerId }) {
  function handleDeleteItem() {
    dispatch(deleteItems(sneakerId));
    toast.info('Item deleted from cart', { autoClose: 2000 });
  }
  const dispatch = useDispatch();
  return (
    //this is a faster way of dispatching an action from the store without having the need to create a handler fxn
    <Button type="small" onClick={handleDeleteItem}>
      Delete
    </Button>
  );
}

export default DeleteItem;
