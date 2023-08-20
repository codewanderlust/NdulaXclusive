import { getFavorites } from '../../services/apiFavorites';

import { formatCurrency } from '../../utils/helpers';

import { useQuery } from '@tanstack/react-query';
import { useDeleteFavorite } from './useDeleteFavorite';
import Loader from '../../ui/Loader';

function Favorites() {
  const {
    isLoading,
    data: favorites,
    // error,
  } = useQuery({
    queryKey: ['favorites'],
    queryFn: getFavorites,
  });

  const { isDeleting, deleteFavorite } = useDeleteFavorite();

  if (isLoading || isDeleting) return <Loader />;
  if (!favorites.length)
    return (
      <div className="flex items-center justify-center">
        You have not added any favorites.
      </div>
    );
  return (
    <ul>
      <h2 className="m-2 text-center text-xl font-bold">Favorites</h2>
      {favorites?.map((item, i) => (
        <li
          key={i}
          className="my-2 flex w-full flex-col justify-start border p-6 sm:relative sm:flex-row"
        >
          <img
            src={item.image}
            alt={item.name}
            className="h-[150px] w-[150px] rounded-md"
          />

          <div className="w-full overflow-hidden pl-2">
            <div className="flex w-full flex-col items-center justify-between sm:flex-row">
              <p className="flex items-center justify-between text-[16px] font-semibold underline sm:w-[400px]">
                {item.name}
              </p>
              <div className="text-lg font-bold">
                <p>{formatCurrency(item.price)}</p>
              </div>
            </div>
            <p className="mt-2 font-semibold">NEW</p>
            <div className="mt-2 text-sm">
              {item?.shoeInfo.substring(0, 150)}...
            </div>

            <div className="mt-2 text-sm sm:absolute sm:bottom-0 sm:right-0 sm:p-4">
              <button
                className="border-none bg-none text-sm text-blue-500 hover:text-blue-600 hover:underline"
                onClick={() => deleteFavorite(item.favoriteId)}
              >
                Remove Item
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Favorites;
