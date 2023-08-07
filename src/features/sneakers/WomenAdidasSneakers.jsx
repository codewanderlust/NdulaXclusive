import { useWomenSneakers } from './useWomenSneakers';
import Loader from '../../ui/Loader';
import { formatCurrency } from '../../utils/helpers';
import { Link } from 'react-router-dom';
import { HiOutlineHeart } from 'react-icons/hi';

export default function WomenAdidasSneakers() {
  const { isLoading, sneakers } = useWomenSneakers();
  if (isLoading) return <Loader />;

  const womenAdidasSneakers = sneakers
    ?.filter(
      (sneaker) => sneaker.age_sex === 'female' && sneaker.brand === 'Adidas',
    )
    .slice(0, 5);
  function handleClick(e) {
    e.preventDefault();
  }

  return (
    <div className="mt-6">
      <h2 className="text-base font-bold sm:mb-4 sm:text-xl">
        Women&apos;s Adidas Sneakers
      </h2>
      <ul className=" sm:flex sm:gap-6">
        {womenAdidasSneakers?.map((sneaker, i) => (
          <li
            key={i}
            className="relative  max-w-[200px] border-[0.8px] border-stone-200 p-4 "
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
