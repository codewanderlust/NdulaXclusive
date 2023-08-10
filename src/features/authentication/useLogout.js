import { useMutation, useQueryClient } from '@tanstack/react-query';
import { logout as logoutApi } from '../../services/apiAuth';
import { useNavigate } from 'react-router';

export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: logout, isLoading } = useMutation({
    mutationFn: logoutApi,

    onSuccess: () => {
      //removing all queries from the cache
      queryClient.removeQueries();

      //allows us to manually set some data in to the react-query cache

      navigate('/login', { replace: true });
    },
  });
  return { logout, isLoading };
}

export default useLogout;
