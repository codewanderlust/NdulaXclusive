import LoginForm from '../features/authentication/LoginForm';

function Login() {
  return (
    <div className="grid items-center justify-center gap-4 bg-gray-50">
      {/* <h1 className="text-4xl font-semibold ">Log in to your account</h1> */}
      <LoginForm />
    </div>
  );
}

export default Login;
