import { useQuery } from '@tanstack/react-query';
import { getSneakers } from '../../services/apiSneakers';

export function useWomenSneakers() {
  const {
    isLoading,
    data: sneakers,
    error,
  } = useQuery({
    queryKey: ['sneakers'],
    queryFn: getSneakers,
  });

  return { isLoading, sneakers, error };
}
