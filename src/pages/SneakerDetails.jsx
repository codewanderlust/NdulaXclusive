import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { LiaShippingFastSolid } from 'react-icons/lia';
import { HiOutlineClock } from 'react-icons/hi';
import { HiOutlineArrowPath } from 'react-icons/hi2';

import { getSneakerDetails } from '../services/apiSneakers';
import Loader from '../ui/Loader';
import Button from '../ui/Button';
import { formatCurrency } from '../utils/helpers';
import TextExpander from '../utils/textExpander';
const BASE_URL = 'http://localhost:8000/';
function SneakerDetails() {
  // useparams, we use this to read the parameter from the URl
  const { id } = useParams();
  const [sneakerDetails, setSneakerDetails] = useState(null);

  useEffect(() => {
    getSneakerDetails(id).then((data) => {
      setSneakerDetails(data);
    });
  }, [id]);

  if (!sneakerDetails) {
    return <Loader />;
  }

  const { name, image, shoeInfo, price, colorShown } = sneakerDetails;
  const imageURL = BASE_URL + image;

  return (
    <div className="mx-auto my-8 grid grid-cols-[1fr-auto] gap-4 md:grid-cols-[auto_1fr_auto] md:gap-4">
      <img src={imageURL} alt={name} className="w-48 md:w-96" />
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
          <Button type="small">Add to cart</Button>
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
