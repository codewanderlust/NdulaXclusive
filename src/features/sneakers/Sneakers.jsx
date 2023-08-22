import { useMutation, useQueryClient } from '@tanstack/react-query';
import { HiOutlineHeart } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { createFavorite } from '../../services/apiFavorites';
import Loader from '../../ui/Loader';
import { formatCurrency } from '../../utils/helpers';

//eslint-disable-next-line
function Sneakers({ title, age_sex, brand, useSneakersHook }) {
  const {
    isLoading,
    sneakers,
    // , error
  } = useSneakersHook();
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: createFavorite,
    onSuccess: () => {
      toast.success('Item added to favourites 😍', { autoClose: 2000 });
      queryClient.invalidateQueries('favorites');
    },
    onError: (err) => {
      console.log('Error object:', err); // Add this line
      if (err?.message === 'DuplicateKeyError') {
        toast.error('Item is already a favorite 😀', { autoClose: 2000 });
      } else {
        toast.error('Something went wrong 😥', { autoClose: 2000 });
      }
    },
  });
  if (isLoading) return <Loader />;

  const filteredSneakers = sneakers
    ?.filter(
      (sneaker) => sneaker.age_sex === age_sex && sneaker.brand === brand,
    )
    .slice(0, 5);

  function handleAddToFavourites(sneaker, e) {
    e.preventDefault();

    const favoriteItem = {
      favoriteId: sneaker.id,
      image: sneaker.image,
      name: sneaker.name,
      price: sneaker.price,
      shoeInfo: sneaker.shoeInfo,
    };

    mutate(favoriteItem);
  }

  return (
    <div className="mt-6">
      <h2 className="text-base font-bold sm:mb-4 sm:text-xl">{title}</h2>
      <ul className="grid gap-5 sm:grid-cols-5">
        {filteredSneakers.map((sneaker, i) => (
          <li
            data-test={`sneaker-${sneaker.id}`}
            key={i}
            className="relative mx-auto  rounded border border-gray-50 bg-gray-100 p-1.5"
          >
            <Link to={`/sneakers/${sneaker.id}?name=${sneaker.name}`}>
              <HiOutlineHeart
                size={24}
                className="absolute right-2 top-8 text-stone-500"
                onClick={(e) => handleAddToFavourites(sneaker, e)}
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
                <div className="hidden">
                  <p>{sneaker.shoeInfo}</p>
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

export default Sneakers;
