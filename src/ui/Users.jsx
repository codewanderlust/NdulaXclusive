import SignupForm from '../features/authentication/SignupForm';

function Users() {
  return (
    <div className="mx-auto my-12 max-w-3xl">
      <h1 className="mb-2 mt-2 text-center text-2xl sm:mb-6">Sign up</h1>
      <SignupForm />
    </div>
  );
}

export default Users;
