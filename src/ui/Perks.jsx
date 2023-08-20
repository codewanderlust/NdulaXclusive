import { HiGift, HiTruck, HiMiniShoppingBag } from 'react-icons/hi2';

function Perks() {
  return (
    <div className=" m-2 flex flex-col justify-around  gap-2  sm:flex-row">
      <div className="flex items-center gap-3 rounded-md bg-white px-8 py-6">
        <div className="rounded-full bg-stone-300 p-2">
          <HiGift size={32} />
        </div>
        <div>
          <p className="text-base font-bold sm:text-xl">Upto 20% off</p>
          <span className="text-sm sm:text-base">on selected products</span>
        </div>
      </div>
      <div className="flex items-center gap-3 rounded-md bg-white px-8 py-6">
        <div className="rounded-full bg-stone-300 p-2">
          <HiTruck size={32} />
        </div>
        <div>
          <p className="text-base font-bold sm:text-xl">Same Day Delivery </p>
          <span className="text-sm sm:text-base">within Nairobi</span>
        </div>
      </div>
      <div className="flex items-center gap-3 rounded-md bg-white px-8 py-6">
        <div className="rounded-full bg-stone-300 p-2">
          <HiMiniShoppingBag size={32} />
        </div>
        <div>
          <p className="text-base font-bold sm:text-xl">Free return </p>
          <span className="text-sm sm:text-base">on any products</span>
        </div>
      </div>
    </div>
  );
}

export default Perks;
