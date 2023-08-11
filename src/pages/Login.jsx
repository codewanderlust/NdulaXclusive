import LoginForm from '../features/authentication/LoginForm';

function Login() {
  return (
    <>
      <div className="space-y-2 text-center sm:mt-12">
        <img
          className="mx-auto flex h-24 w-24"
          src="https://fgfppclstifnqgadpqux.supabase.co/storage/v1/object/public/logo/ndulaxclusive-logo.png?t=2023-08-10T15%3A59%3A45.598Z"
          alt=""
        />
        <p className=" font-medium tracking-wide">NdulaExclusive</p>
        <h1 className="  text-lg font-semibold md:text-2xl  ">
          Log in to your account
        </h1>
      </div>
      <div className="mx-auto grid max-w-3xl items-center justify-center gap-4 bg-gray-50 shadow-sm sm:my-8 sm:p-4">
        <LoginForm />
      </div>
    </>
  );
}

export default Login;
