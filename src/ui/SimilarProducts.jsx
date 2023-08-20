import { useQuery } from '@tanstack/react-query';
import { BiLoader } from 'react-icons/bi';
import { getSneakers } from '../services/apiSneakers';
import Product from './Product';

import { useRandomItems } from '../hooks/useRandomItems';
function SimilarProducts() {
  const { isLoading, data: products } = useQuery({
    queryKey: ['sneakers'],
    queryFn: getSneakers,
  });

  //custom hook to get 5 random products from the list of products
  const randomProducts = useRandomItems(products, 5);

  if (isLoading)
    return (
      <div className="flex items-center justify-center">
        <div className="flex items-center justify-center gap-4 font-semibold">
          <BiLoader size={30} className="animate-spin text-blue-400" />
          Loading Products...
        </div>
      </div>
    );
  return (
    <>
      <div>
        <div className="mx-auto max-w-[1200px] border-b py-1" />

        <div className="mx-auto max-w-[1200px]">
          <div className="mt-4 py-2 text-base font-bold sm:text-2xl">
            Similar sponsored items
          </div>

          <div className="grid gap-4 sm:grid-cols-5">
            {randomProducts.map((product, i) => (
              <Product key={i} product={product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default SimilarProducts;
