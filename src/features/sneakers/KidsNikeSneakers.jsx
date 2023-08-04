import { useKidsSneakers } from './useKidsSneakers';
import Loader from '../../ui/Loader';
import { formatCurrency } from '../../utils/helpers';
import { Link } from 'react-router-dom';
import { HiOutlineHeart } from 'react-icons/hi';

export default function KidsNikeSneakers() {
  const { isLoading, sneakers } = useKidsSneakers();
  if (isLoading) return <Loader />;

  const kidsNikeSneaker = sneakers
    ?.filter(
      (sneaker) => sneaker.age_sex === 'kids' && sneaker.brand === 'Nike',
    )
    .slice(0, 5);
  function handleClick(e) {
    e.preventDefault();
  }
  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold">Kid&apos;s Nike Sneakers</h2>
      <ul className="flex">
        {kidsNikeSneaker.map((sneaker, i) => (
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
