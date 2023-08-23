import { useForm } from 'react-hook-form';
import Button from '../../ui/Button';

import { useSignUp } from './useSignUp';

// const isValidEmail = (str) => /\S+@\S+\.\S+/.test(str);

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
      data-set="signup-form"
      onSubmit={handleSubmit(onSubmit)}
      className="overflow-hidden rounded-sm  bg-slate-50 p-12 text-lg shadow-sm"
    >
      <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
        <label className="text-sm font-medium sm:basis-40 sm:text-base">
          Full Name
        </label>
        <input
          {...register('fullName')}
          className=" grow rounded-md border border-stone-200 px-4 py-2 text-sm transition-all duration-200 placeholder:text-stone-400 focus:outline-none focus:ring  focus:ring-stone-200 md:px-6 md:py-3"
          type="text"
          name="fullName"
          disabled={isLoading}
          required
        />
        {errors.fullName && <p>{errors.fullName?.message}</p>}
      </div>
      <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
        <label className="text-sm font-medium sm:basis-40 sm:text-base">
          Email Address
        </label>
        <input
          className="grow rounded-md border border-stone-200 px-4 py-2 text-sm transition-all duration-200 placeholder:text-stone-400 focus:outline-none focus:ring  focus:ring-stone-200 md:px-6 md:py-3"
          {...register('email', {
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'Please enter a valid email address',
            },
          })}
          type="email"
          name="email"
          disabled={isLoading}
          required
        />
        {errors.email && <p>{errors.email?.message}</p>}
      </div>
      <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
        <label className="text-sm font-medium sm:basis-40 sm:text-base">
          Password (min 8 characters)
        </label>
        <input
          {...register('password', {
            minLength: {
              value: 8,
              message: 'Password needs a minimum of 8 characters',
            },
          })}
          className=" grow rounded-md border border-stone-200 px-4 py-2 text-sm transition-all duration-200 placeholder:text-stone-400 focus:outline-none focus:ring  focus:ring-stone-200 md:px-6 md:py-3"
          type="password"
          name="password"
          disabled={isLoading}
          required
        />
        {errors.password && <p>{errors.password?.message}</p>}
      </div>

      <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
        <label className="text-sm font-medium sm:basis-40 sm:text-base">
          Repeat password
        </label>
        <input
          {...register('passwordConfirm', {
            validate: (value) =>
              value === getValues().password || 'Passwords need to match',
          })}
          className=" grow rounded-md border border-stone-200 px-4 py-2 text-sm transition-all duration-200 placeholder:text-stone-400 focus:outline-none focus:ring  focus:ring-stone-200 md:px-6 md:py-3"
          type="password"
          name="passwordConfirm"
          disabled={isLoading}
          required
        />
        {errors.passwordConfirm && <p>{errors.passwordConfirm?.message}</p>}
      </div>

      <div className="flex justify-end gap-4">
        {/* type is an HTML attribute! */}
        <Button variation="secondary" disabled={isLoading}>
          Cancel
        </Button>
        <Button dataTest="signup-btn" type="small">
          {isLoading ? 'Signing up...' : 'Sign up'}
        </Button>
      </div>
    </form>
  );
}

export default SignupForm;
