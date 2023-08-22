import { useDispatch, useSelector } from 'react-redux';
import Button from '../../ui/Button';
import EmptyCart from '../cart/EmptyCart';
import { getCart } from '../cart/cartSlice';

import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { createOrder } from '../../services/apiOrder';
import { toast } from 'react-hot-toast';
import { fetchAddress } from './addressSlice';
import { useNavigate } from 'react-router';

const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );
function CreateOrderForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const cart = useSelector(getCart);

  const navigate = useNavigate();
  const {
    status: addressStatus,
    position,
    address,
    error: errorAddress,
  } = useSelector((state) => state.address);

  const isLoadingAddressPosition = addressStatus === 'loading';
  //we are going to use the react query mutation because we are going to change the order data

  const {
    mutate,
    isLoading: isCreating,
    reset,
  } = useMutation({
    mutationFn: createOrder,
    onSuccess: () => {
      toast.success('Order created successfully');
      // we are going to clear the cart and reset the form after the order was created successfully

      reset();
    },
    onError: (err) => toast.error(err.message),
  });

  function onSubmit(data) {
    //we are go to call mutate and pass in the data
    console.log(data, 'TEST');
    mutate(data);
    navigate('/checkout');
  }

  if (!cart.length) return <EmptyCart />;
  return (
    <div className=" px-4 py-6 sm:w-[800px]">
      <h2 data-set="create-order-header" className="mb-8 text-xl font-semibold">
        Ready to order? Lets go!
      </h2>
      <form data-set="create-order-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center ">
          {/* we used basis to ensure that the labels don't pile on top of each other, important style to keep in mind */}
          <label className="sm:basis-40">First Name</label>
          <input
            type="text"
            id="name"
            {...register('name', { required: true })}
            // the grow tailwind class was used to ensure that the labels were of the same size
            className="input grow"
            // defaultValue={username}

            //import value we used to ensure that the application auto-filled the name of the logged in user
          />
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Phone number</label>
          <div className="grow">
            <input
              type="tel"
              id="phone"
              {...register('phone', {
                required: 'Phone number is required',
                validate: (value) =>
                  isValidPhone(value) ||
                  'Please give us your correct phone number. We might need to contact you',
              })}
              className="input w-full"
            />
            {errors.phone && (
              <p className="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700">
                {errors.phone.message}
              </p>
            )}
          </div>
        </div>
        <div className="relative mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Address</label>
          <div className="grow">
            <input
              type="text"
              name="address"
              required
              className="input w-full"
              disabled={isLoadingAddressPosition}
              defaultValue={address}
              {...register('address', { required: true })}
            />
            {/* here we are displaying the error message if the status is rejected/error */}
            {addressStatus === 'error' && (
              <p className="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700">
                {errorAddress}
              </p>
            )}
          </div>
          {/* we conditionally render the button so that if the location was already fetched then we dont need to see the button */}
          {!position.latitude && !position.longitude && (
            // /* in the code below we dispatching actions from createAsyncThunk and using the action create fetchAddress, we were able to connect the two*/
            //   /* since the button is inside the form we used e.preventDefault to stop the form from submitting when the button is clicked */
            <span className="absolute right-[3px] top-[3px] z-50 md:right-[5px] md:top-[5px]">
              <Button
                type="small"
                disabled={isLoadingAddressPosition}
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(fetchAddress());
                }}
              >
                Get Position
              </Button>
            </span>
          )}
        </div>

        <div>
          {/* we used this hack to get the data into the action without it being a form field, we wanted to add the data about the cart in this case */}
          <input
            type="hidden"
            id="cart"
            value={JSON.stringify(cart)}
            //remember to add the register function so that we can add this to the form data when we submit the form
            {...register('cart', { required: true })}
          />
          {/* since we want to submit the form with the actual position data, same an the cart, we are going to add another input for the gps location */}

          <Button
            dataTest="create-order-btn"
            disabled={isCreating}
            type="small"
          >
            {isCreating ? 'Creating order...' : 'Create order '}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default CreateOrderForm;
