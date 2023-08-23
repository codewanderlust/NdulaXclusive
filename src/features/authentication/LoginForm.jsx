import { useState } from 'react';
import Button from '../../ui/Button';

import { useLogin } from './useLogin';

import LinkButton from '../../ui/LinkButton';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, isLoading } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();

    if (!email || !password) return;
    login(
      { email, password },
      {
        // clearing the field if the login isn't successful
        onSettled: () => {
          setEmail('');
          setPassword('');
        },
      },
    );
  }

  return (
    <div>
      <form
        data-set="login-form"
        onSubmit={handleSubmit}
        className="overflow-hidden px-0 py-2 text-lg"
      >
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="text-sm font-medium sm:basis-40 sm:text-base">
            Email Address
          </label>
          <input
            className=" grow rounded-md border border-stone-200 px-4 py-2 text-sm transition-all duration-200 placeholder:text-stone-400 focus:outline-none focus:ring  focus:ring-stone-200 md:px-6 md:py-3"
            type="email"
            name="email"
            required
            // This makes this form better for password managers
            autoComplete="username"
            value={email}
            disabled={isLoading}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="text-sm font-medium sm:basis-40 sm:text-base ">
            Password
          </label>
          <input
            className=" grow rounded-md border border-stone-200 px-4 py-2 text-sm transition-all duration-200 placeholder:text-stone-400 focus:outline-none focus:ring  focus:ring-stone-200 md:px-6 md:py-3"
            type="password"
            name="password"
            autoComplete="current-password"
            value={password}
            disabled={isLoading}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className=" flex justify-center gap-3 px-0 py-5 sm:justify-end">
          <Button dataTest="login-btn" type="small">
            {isLoading ? 'Loggin in...' : 'Log in'}
          </Button>
        </div>
      </form>
      <div className="flex flex-col gap-2">
        <p>New to NdulaXclusive ?</p>
        <LinkButton to="/users">Create Account</LinkButton>
      </div>
    </div>
  );
}

export default LoginForm;
