import { HiOutlineArrowPath, HiOutlineClock } from 'react-icons/hi2';
import { LiaShippingFastSolid } from 'react-icons/lia';

export default function ShippingInfoCard() {
  return (
    <div className="font-base h-[350px]  flex-grow  space-y-2 rounded-md bg-green-100 p-4 text-sm sm:w-[375px]">
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
  );
}
