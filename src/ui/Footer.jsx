import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
export default function Footer() {
  return (
    <>
      <div id="Footer" className="mt-20 border-t px-2">
        <div className="mx-auto flex w-full max-w-[1200px] items-baseline justify-between py-10">
          <ul>
            <li className="flex items-center text-lg font-bold sm:mb-4">
              <p className="font-satisfy ">ndula</p>
              <span>Xclusive</span>
            </li>
            <li className="flex items-center gap-4">
              <a href="">
                <FaTwitter size={24} />
              </a>
              <a href="">
                <FaInstagram size={24} />
              </a>
              <a href="">
                <FaLinkedin size={24} />
              </a>
            </li>
          </ul>
          <ul className="text-gray-700">
            <li className="text-lg font-bold">Buy</li>
            <li className="mt-2 cursor-pointer py-1 text-xs hover:underline">
              Registration
            </li>
            <li className="cursor-pointer py-1 text-xs hover:underline">
              ndulaExclusive Money Back Guarantee
            </li>
            <li className="cursor-pointer py-1 text-xs hover:underline">
              Bidding & buying help
            </li>
            <li className="cursor-pointer py-1 text-xs hover:underline">
              Stores
            </li>
          </ul>

          <ul className="text-gray-700">
            <li className="text-lg font-bold">Sell</li>
            <li className="mt-2 cursor-pointer py-1 text-xs hover:underline">
              Start selling
            </li>
            <li className="cursor-pointer py-1 text-xs hover:underline">
              Learn to sell
            </li>
            <li className="cursor-pointer py-1 text-xs hover:underline">
              Affiliates
            </li>
          </ul>

          <ul className="text-gray-700">
            <li className="text-lg font-bold">About ndulaXclusive</li>
            <li className="mt-2 cursor-pointer py-1 text-xs hover:underline">
              Company info
            </li>
            <li className="cursor-pointer py-1 text-xs hover:underline">
              News
            </li>
            <li className="cursor-pointer py-1 text-xs hover:underline">
              Investors
            </li>
            <li className="cursor-pointer py-1 text-xs hover:underline">
              Carears
            </li>
            <li className="cursor-pointer py-1 text-xs hover:underline">
              Government relations
            </li>
            <li className="cursor-pointer py-1 text-xs hover:underline">
              Policies
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
