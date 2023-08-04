import { HiGift, HiTruck, HiMiniShoppingBag } from "react-icons/hi2";

function Perks() {
  return (
    <div className="flex justify-around m-2 ">
      <div className="flex gap-3 items-center bg-white px-8 py-6 rounded-md">
        <div className="bg-stone-300 rounded-full p-2">
        <HiGift size={32} />

        </div>
        <div>
          <p className="font-bold text-xl">Upto 30% off</p>
          <span>on selected products</span>
        </div>
      </div>
      <div className="flex gap-3 items-center bg-white px-8 py-6 rounded-md">
      <div className="bg-stone-300 rounded-full p-2">
        <HiTruck size={32} />
        </div>
        <div>
          <p className="font-bold text-xl">Same Day Delivery </p>
          <span>within Nairobi</span>
        </div>
      </div>
      <div className="flex gap-3 items-center bg-white px-8 py-6 rounded-md">
      <div className="bg-stone-300 rounded-full p-2">
        <HiMiniShoppingBag size={32} />
        </div>
        <div>
          <p className="font-bold text-xl">Free return </p>
          <span>on any products</span>
        </div>
      </div>
    </div>
  );
}

export default Perks;
