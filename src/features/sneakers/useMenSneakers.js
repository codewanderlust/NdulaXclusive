import { useQuery } from '@tanstack/react-query';
import { getSneakers } from '../../services/apiSneakers';

export function useMenSneakers() {
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
