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
    login({ email, password });
  }

  return (
    <form onSubmit={handleSubmit} className="overflow-hidden px-0 py-8 text-lg">
      <div className="flex flex-col gap-3 px-0 py-2">
        <label className="font-medium"> Email Address </label>
        <input
          className="rounded-sm border border-gray-300 bg-inherit px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          type="email"
          id="email"
          // This makes this form better for password managers
          autoComplete="username"
          value={email}
          disabled={isLoading}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-3 px-0 py-5">
        <label>Password</label>
        <input
          className="rounded-sm border border-gray-300 bg-inherit px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          disabled={isLoading}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-3 px-0 py-5">
        <Button disabled={isLoading} size="small">
          Login
        </Button>
      </div>
    </form>
  );
}

export default LoginForm;
