import { useState } from 'react';
import Button from '../../ui/Button';

import { useLogin } from './useLogin';

function LoginForm() {
  const [email, setEmail] = useState('roy@example.com');
  const [password, setPassword] = useState('1234');
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
    <form onSubmit={handleSubmit} className="overflow-hidden px-0 py-2 text-lg">
      <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
        <label className="font-medium sm:basis-40">Email Address</label>
        <input
          className=" grow rounded-md border border-stone-200 px-4 py-2 text-sm transition-all duration-200 placeholder:text-stone-400 focus:outline-none focus:ring  focus:ring-stone-200 md:px-6 md:py-3"
          type="email"
          id="email"
          // This makes this form better for password managers
          autoComplete="username"
          value={email}
          disabled={isLoading}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
        <label className="font-medium sm:basis-40">Password</label>
        <input
          className=" grow rounded-md border border-stone-200 px-4 py-2 text-sm transition-all duration-200 placeholder:text-stone-400 focus:outline-none focus:ring  focus:ring-stone-200 md:px-6 md:py-3"
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          disabled={isLoading}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-3 px-0 py-5">
        <Button type="primary">{isLoading ? 'Loggin in...' : 'Log in'}</Button>
      </div>
    </form>
  );
}

export default LoginForm;
