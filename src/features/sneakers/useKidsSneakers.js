import { useQuery } from '@tanstack/react-query';
import { getSneakers } from '../../services/apiSneakers';

export function useKidsSneakers() {
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
