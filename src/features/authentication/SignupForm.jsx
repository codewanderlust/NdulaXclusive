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
      className="overflow-hidden rounded-sm  bg-slate-50 p-12 text-lg shadow-sm"
    >
      <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
        <label className="font-medium sm:basis-40">Full Name</label>
        <input
          {...register('fullName', { required: 'This field is required' })}
          className=" grow rounded-md border border-stone-200 px-4 py-2 text-sm transition-all duration-200 placeholder:text-stone-400 focus:outline-none focus:ring  focus:ring-stone-200 md:px-6 md:py-3"
          type="text"
          id="fullName"
          disabled={isLoading}
        />
        {errors.fullName && <p>{errors.fullName?.message}</p>}
      </div>
      <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
        <label className="font-medium sm:basis-40">Email Address</label>
        <input
          className="grow rounded-md border border-stone-200 px-4 py-2 text-sm transition-all duration-200 placeholder:text-stone-400 focus:outline-none focus:ring  focus:ring-stone-200 md:px-6 md:py-3"
          {...register('email', {
            required: 'This field is required',
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'Please enter a valid email address',
            },
          })}
          type="email"
          id="email"
          disabled={isLoading}
        />
        {errors.email && <p>{errors.email?.message}</p>}
      </div>
      <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
        <label className="font-medium sm:basis-40">
          Password (min 8 characters)
        </label>
        <input
          {...register('password', {
            required: 'This field is required',
            minLength: {
              value: 8,
              message: 'Password needs a minimum of 8 characters',
            },
          })}
          className=" grow rounded-md border border-stone-200 px-4 py-2 text-sm transition-all duration-200 placeholder:text-stone-400 focus:outline-none focus:ring  focus:ring-stone-200 md:px-6 md:py-3"
          type="password"
          id="password"
          disabled={isLoading}
        />
        {errors.password && <p>{errors.password?.message}</p>}
      </div>

      <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
        <label className="font-medium sm:basis-40">Repeat password</label>
        <input
          {...register('passwordConfirm', {
            required: 'This field is required',
            validate: (value) =>
              value === getValues().password || 'Passwords need to match',
          })}
          className=" grow rounded-md border border-stone-200 px-4 py-2 text-sm transition-all duration-200 placeholder:text-stone-400 focus:outline-none focus:ring  focus:ring-stone-200 md:px-6 md:py-3"
          type="password"
          id="passwordConfirm"
          disabled={isLoading}
        />
        {errors.passwordConfirm && <p>{errors.passwordConfirm?.message}</p>}
      </div>

      <div className="flex justify-end gap-4">
        {/* type is an HTML attribute! */}
        <Button variation="secondary" disabled={isLoading}>
          Cancel
        </Button>
        <Button>{isLoading ? 'Signing up...' : 'Sign up'}</Button>
      </div>
    </form>
  );
}

export default SignupForm;
