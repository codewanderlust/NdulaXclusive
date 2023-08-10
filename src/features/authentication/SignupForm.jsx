import { useForm } from 'react-hook-form';
import Button from '../../ui/Button';

import { useSignUp } from './useSignUp';

// Email regex: /\S+@\S+\.\S+/

function SignupForm() {
  const { signUp, isLoading } = useSignUp();
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;

  function onSubmit({ fullName, email, password }) {
    signUp(
      { fullName, email, password },
      {
        onSettled: reset,
      },
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="overflow-hidden px-0 py-9 text-lg"
    >
      <div className=" grid grid-cols-24rem-1fr-1.2fr items-center gap-10 px-0 py-5 pt-0">
        <label className="font-medium">Full Name</label>
        <input
          {...register('fullName', { required: 'This field is required' })}
          className="rounded-sm border border-gray-300 bg-inherit px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          type="text"
          id="fullName"
          disabled={isLoading}
        />
        {errors.fullName && <p>{errors.fullName?.message}</p>}
      </div>
      <div className=" grid grid-cols-24rem-1fr-1.2fr items-center gap-10 border-b border-b-gray-100 px-0 py-5">
        <label className="font-medium">Email Address</label>
        <input
          {...register('email', {
            required: 'This field is required',
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'Please enter a valid email address',
            },
          })}
          className="rounded-sm border border-gray-300 bg-inherit px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          type="email"
          id="email"
          disabled={isLoading}
        />
        {errors.email && <p>{errors.email?.message}</p>}
      </div>

      <div className=" grid grid-cols-24rem-1fr-1.2fr items-center gap-10 border-b border-b-gray-100 px-0 py-5">
        <label className="font-medium">Password (min 8 characters)</label>
        <input
          {...register('password', {
            required: 'This field is required',
            minLength: {
              value: 8,
              message: 'Password needs a minimum of 8 characters',
            },
          })}
          className="rounded-sm border border-gray-300 bg-inherit px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          type="password"
          id="password"
          disabled={isLoading}
        />
        {errors.password && <p>{errors.password?.message}</p>}
      </div>

      <div className=" grid grid-cols-24rem-1fr-1.2fr items-center gap-10 border-b border-b-gray-100 px-0 py-5">
        <label className="font-medium">Repeat password</label>
        <input
          {...register('passwordConfirm', {
            required: 'This field is required',
            validate: (value) =>
              value === getValues().password || 'Passwords need to match',
          })}
          className="rounded-sm border border-gray-300 bg-inherit px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          type="password"
          id="passwordConfirm"
          disabled={isLoading}
        />
        {errors.passwordConfirm && <p>{errors.passwordConfirm?.message}</p>}
      </div>

      <div className=" grid grid-cols-24rem-1fr-1.2fr items-center gap-10 border-b border-b-gray-100 px-0 py-5">
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset" disabled={isLoading}>
          Cancel
        </Button>
        <Button>{isLoading ? 'Signing up...' : 'Sign up'}</Button>
      </div>
    </form>
  );
}

export default SignupForm;
