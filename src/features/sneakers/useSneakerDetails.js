import { useQuery } from '@tanstack/react-query';
import { getSneakerDetails } from '../../services/apiSneakers';
export function useSneakerDetails(sneakerId) {
  const {
    isLoading,
    data: sneakerDetails,
    error,
  } = useQuery({
    queryKey: ['sneaker', { id: sneakerId }],
    queryFn: getSneakerDetails,
  });

  return { isLoading, sneakerDetails, error };
}
