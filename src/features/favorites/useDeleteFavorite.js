import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteFavorite as deleteFavoriteApi } from '../../services/apiFavorites';
import { toast } from 'react-toastify';

export function useDeleteFavorite() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteFavorite } = useMutation({
    mutationFn: deleteFavoriteApi,

    onSuccess: () => {
      toast.info('Favorite successfully deleted');
      queryClient.invalidateQueries({
        queryKey: ['favorites'],
      });
    },
    onError: () => {
      toast.error('Error deleting favorite');
    },
  });

  return { isDeleting, deleteFavorite };
}
