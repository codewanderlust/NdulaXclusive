import { useMenSneakers } from './useMenSneakers';
import Loader from '../../ui/Loader';
import { formatCurrency } from '../../utils/helpers';
import { HiOutlineHeart } from 'react-icons/hi';
import { Link } from 'react-router-dom';
export default function MenNikeSneakers() {
  const { isLoading, sneakers } = useMenSneakers();
  if (isLoading) return <Loader />;

  const menNikeSneaker = sneakers?.filter(
    (sneaker) => sneaker.age_sex === 'male' && sneaker.brand === 'Nike',
  );

  function handleClick(e) {
    e.preventDefault();
  }

  return (
    <div className="mt-6">
      <h2 className="text-base font-bold sm:mb-4 sm:text-xl">
        Men&apos;s Nike Sneakers
      </h2>
      <ul className="grid  grid-cols-5 gap-5">
        {menNikeSneaker.map((sneaker, i) => (
          <li
            key={i}
            className="relative mx-auto max-w-[200px] rounded border border-gray-50 bg-gray-100 p-1.5 "
          >
            <Link to={`/sneakers/${sneaker.id}?name=${sneaker.name}`}>
              <HiOutlineHeart
                size={24}
                className="absolute right-2 top-8 text-stone-500"
                onClick={handleClick}
              />
              <img
                className="w-36 sm:w-full"
                src={sneaker.image}
                alt={sneaker.name}
              />

              <div className="px-1 pt-2">
                <div className="cursor-pointer text-[15px] font-semibold hover:underline">
                  {sneaker.name}
                </div>
                <div className="text-sm">
                  <p>
                    {sneaker.numColors}{' '}
                    <span className="text-sm">
                      {sneaker.numColors > 1 ? 'Colors' : 'Color'}
                    </span>
                  </p>
                </div>
                <div className="font-extrabold">
                  {formatCurrency(sneaker.price)}
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
