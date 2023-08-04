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
      (sneaker) => sneaker.age_sex === 'women' && sneaker.brand === 'Adidas',
    )
    .slice(0, 5);
  function handleClick(e) {
    e.preventDefault();
  }

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold">Women&apos;s Adidas Sneakers</h2>
      <ul className="flex">
        {womenAdidasSneakers?.map((sneaker, i) => (
          <li key={i} className="relative ">
            <Link to={`/sneakers/${sneaker.id}?name=${sneaker.name}`}>
              <HiOutlineHeart
                size={24}
                className="absolute right-0 top-4 text-stone-500"
                onClick={handleClick}
              />
              <img src={sneaker.image} alt={sneaker.name} />
              <p>{sneaker.name}</p>
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
