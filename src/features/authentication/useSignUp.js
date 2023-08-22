import { useMutation } from '@tanstack/react-query';
import { signUp as signUpApi } from '../../services/apiAuth';
import { toast } from 'react-toastify';

export function useSignUp() {
  const { mutate: signUp, isLoading } = useMutation({
    mutationFn: signUpApi,
    onSuccess: (user) => {
      console.log(user),
        toast.success(
          "User created successfully! Please verify the account from the user's email address",
        );
    },
  });

  return { signUp, isLoading };
}
