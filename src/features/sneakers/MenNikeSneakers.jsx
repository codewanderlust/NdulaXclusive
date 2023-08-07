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
      <ul className="sm:flex sm:gap-6">
        {menNikeSneaker.map((sneaker, i) => (
          <li
            key={i}
            className="relative max-w-[200px] border-[0.8px] border-stone-200 p-4"
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
              <p className="capitalize">{sneaker.name}</p>
              <p>
                {sneaker.numColors}{' '}
                <span>{sneaker.numColors > 1 ? 'Colors' : 'Color'}</span>
              </p>
              <p className="mt-3">{formatCurrency(sneaker.price)}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
