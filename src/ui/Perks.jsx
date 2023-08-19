import { HiGift, HiTruck, HiMiniShoppingBag } from 'react-icons/hi2';

function Perks() {
  return (
    <div className=" m-2 flex justify-around ">
      <div className="flex items-center gap-3 rounded-md bg-white px-8 py-6">
        <div className="rounded-full bg-stone-300 p-2">
          <HiGift size={32} />
        </div>
        <div>
          <p className="text-xl font-bold">Upto 20% off</p>
          <span>on selected products</span>
        </div>
      </div>
      <div className="flex items-center gap-3 rounded-md bg-white px-8 py-6">
        <div className="rounded-full bg-stone-300 p-2">
          <HiTruck size={32} />
        </div>
        <div>
          <p className="text-xl font-bold">Same Day Delivery </p>
          <span>within Nairobi</span>
        </div>
      </div>
      <div className="flex items-center gap-3 rounded-md bg-white px-8 py-6">
        <div className="rounded-full bg-stone-300 p-2">
          <HiMiniShoppingBag size={32} />
        </div>
        <div>
          <p className="text-xl font-bold">Free return </p>
          <span>on any products</span>
        </div>
      </div>
    </div>
  );
}

export default Perks;
