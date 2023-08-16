// import { useEffect } from 'react';

import { getFavorites } from '../../services/apiFavorites';
// import { useState } from 'react';
// import { toast } from 'react-toastify';
import { formatCurrency } from '../../utils/helpers';
// import LinkButton from '../../ui/LinkButton';
import { useQuery } from '@tanstack/react-query';
import { useDeleteFavorite } from './useDeleteFavorite';
import Loader from '../../ui/Loader';

function Favorites() {
  // const [favorites, setFavorites] = useState([]);

  // useEffect(() => {
  //   async function fetchFavorites() {
  //     try {
  //       const data = await getFavorites();
  //       setFavorites(data); // Assuming data is an array of favorite items
  //     } catch (error) {
  //       toast.error('Error fetching favorites:', { autoClose: 3000 });
  //     }
  //   }
  //   fetchFavorites();
  // }, []);

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
        You have no order history
      </div>
    );
  return (
    <ul>
      <h2 className="m-2 text-center text-xl font-bold">Favorites</h2>
      {favorites?.map((item, i) => (
        <li
          key={i}
          className="relative my-2 flex w-full justify-start border p-6"
        >
          <img
            src={item.image}
            alt={item.name}
            className="h-[150px] w-[150px] rounded-md"
          />

          <div className="w-full overflow-hidden pl-2">
            <div className="flex w-full items-center justify-between">
              <p className="flex w-[400px] items-center justify-between text-[16px] font-semibold underline">
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

            <div className="absolute bottom-0 right-0 p-4 text-sm">
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
