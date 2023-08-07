import { useParams } from 'react-router';
import { LiaShippingFastSolid } from 'react-icons/lia';
import { HiOutlineClock } from 'react-icons/hi';
import { HiOutlineArrowPath } from 'react-icons/hi2';
import { getSneakerDetails } from '../services/apiSneakers';
import Button from '../ui/Button';
import { formatCurrency } from '../utils/helpers';
import TextExpander from '../utils/textExpander';
import { useDispatch, useSelector } from 'react-redux';
import { addItems, getCurrentQuantityById } from '../features/cart/cartSlice';
import UpdateItemQuantity from '../features/cart/UpdateItemQuantity';
import DeleteItem from '../features/cart/DeleteItem';
import { useQuery } from '@tanstack/react-query';

function SneakerDetails() {
  // useparams, we use this to read the parameter from the URl
  const { id } = useParams();

  const currentQuantity = useSelector(getCurrentQuantityById(id));
  const dispatch = useDispatch();
  // useQuery, we use this to fetch the data from the server
  const {
    data: sneakerDetails,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['sneakerDetails', id],
    queryFn: () => getSneakerDetails(id),
  });
  if (isLoading) return <p>Loading…</p>; // show a loading message

  if (error) return <p>Error:{error.message}</p>; // show an error message if no sneaker

  const isInCart = currentQuantity > 0;

  const { name, image, shoeInfo, price, colorShown } = sneakerDetails;

  function handleAddToCart() {
    const newItem = {
      id,
      name,
      quantity: 1,
      price,
      totalPrice: price * 1,
    };
    dispatch(addItems(newItem));
  }

  return (
    <div className="mx-auto my-8 grid grid-cols-[1fr-auto] gap-4 md:grid-cols-[auto_1fr_auto] md:gap-4">
      <img src={image} alt={name} className="w-48 md:w-96" />
      <div className="h-[350px] space-y-4 ">
        <h2 className="text-2xl font-bold">{sneakerDetails.name}</h2>
        <TextExpander
          collapsedNumWords={30}
          expandButtonText="Show more"
          collapseButtonText="Show less"
          text={shoeInfo}
        ></TextExpander>
        <p>{colorShown}</p>
        <div className="mt-auto flex items-center justify-between">
          <p>{formatCurrency(price)}</p>

          {isInCart && (
            <div className="flex items-center gap-3 sm:gap-8">
              <UpdateItemQuantity
                sneakerId={id}
                currentQuantity={currentQuantity}
              />
              <DeleteItem sneakerId={id} />{' '}
            </div>
          )}
          {!isInCart && (
            <Button type="small" onClick={handleAddToCart}>
              Add to Cart
            </Button>
          )}
        </div>
      </div>
      <div className="font-base h-[350px]  w-[375px]  flex-grow space-y-2 rounded-md bg-green-100 p-4 text-sm">
        <div className=" flex items-center justify-center gap-6 ">
          <LiaShippingFastSolid size={36} />
          <h2 className=" font-bold ">Delivery</h2>
        </div>
        <p>Delivery within Nairobi CBD from as low as Ksh. 100</p>
        <p>Delivery fee depending on area.</p>
        <ul>
          <li>
            • Nairobi<span> - Ksh. 275</span>
          </li>
          <li>
            • Nakuru, Naivasha, Eldoret, Kisumu & Mombasa
            <span> - Ksh. 400</span>
          </li>
        </ul>
        <p className="flex items-center gap-2">
          <HiOutlineClock size={20} />{' '}
          <span>Delivery in Nairobi: 1 business Day</span>
        </p>
        <p className="flex items-center gap-2 ">
          <HiOutlineClock size={20} />{' '}
          <span>Delivery outside Nairobi: 2 business Days</span>
        </p>
        <p className="flex items-center gap-2">
          <HiOutlineArrowPath size={20} />{' '}
          <span>Returns: Accepted within 48hrs of order Days</span>
        </p>
      </div>
    </div>
  );
}

export default SneakerDetails;
