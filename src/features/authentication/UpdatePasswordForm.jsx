import { useForm } from 'react-hook-form';
import Button from '../../ui/Button';

import { useUpdateUser } from './useUpdateUser';

function UpdatePasswordForm() {
  const { register, handleSubmit, formState, getValues, reset } = useForm();
  const { errors } = formState;

  const { updateUser, isUpdating } = useUpdateUser();

  function onSubmit({ password }) {
    updateUser({ password }, { onSuccess: reset });
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="overflow-hidden px-0 py-9 text-lg"
    >
      <div className=" grid grid-cols-24rem-1fr-1.2fr items-center gap-10 px-0 py-5 pt-0">
        <label className="font-medium">Password (min 8 characters)</label>
        {/* error={errors?.password?.message} */}
        <input
          className="rounded-sm border border-gray-300 bg-inherit px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          type="password"
          id="password"
          autoComplete="current-password"
          disabled={isUpdating}
          {...register('password', {
            required: 'This field is required',
            minLength: {
              value: 8,
              message: 'Password needs a minimum of 8 characters',
            },
          })}
        />
        {errors.password && <p className="error">{errors.password.message}</p>}
      </div>

      <div className=" grid grid-cols-24rem-1fr-1.2fr items-center gap-10 border-b border-b-gray-100 px-0 py-5">
        <label className="font-medium">Confirm Password</label>
        {/* error={errors?.passwordConfirm?.message} */}

        <input
          className="rounded-sm border border-gray-300 bg-inherit px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          type="password"
          autoComplete="new-password"
          id="passwordConfirm"
          disabled={isUpdating}
          {...register('passwordConfirm', {
            required: 'This field is required',
            validate: (value) =>
              getValues().password === value || 'Passwords need to match',
          })}
        />
        {errors.passwordConfirm && (
          <p className="error">{errors.passwordConfirm.message}</p>
        )}
      </div>
      <div className=" flex justify-end gap-5">
        <Button onClick={reset} type="reset" variation="secondary">
          Cancel
        </Button>
        <Button disabled={isUpdating}>Update password</Button>
      </div>
    </form>
  );
}

export default UpdatePasswordForm;
