import Button from '../../ui/Button';

// Email regex: /\S+@\S+\.\S+/

function SignupForm() {
  return (
    <form className="overflow-hidden px-0 py-9 text-lg">
      <div className=" grid grid-cols-24rem-1fr-1.2fr items-center gap-10 px-0 py-5 pt-0">
        <label className="font-medium">Full Name</label>
        <input
          className="rounded-sm border border-gray-300 bg-inherit px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          type="text"
          id="fullName"
        />
      </div>
      <div className=" grid grid-cols-24rem-1fr-1.2fr items-center gap-10 border-b border-b-gray-100 px-0 py-5">
        <label className="font-medium">Email Address</label>
        <input
          className="rounded-sm border border-gray-300 bg-inherit px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          type="email"
          id="email"
        />
      </div>

      <div className=" grid grid-cols-24rem-1fr-1.2fr items-center gap-10 border-b border-b-gray-100 px-0 py-5">
        <input
          className="rounded-sm border border-gray-300 bg-inherit px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          type="password"
          id="password"
        />
      </div>

      <div className=" grid grid-cols-24rem-1fr-1.2fr items-center gap-10 border-b border-b-gray-100 px-0 py-5">
        <input
          className="rounded-sm border border-gray-300 bg-inherit px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          type="password"
          id="passwordConfirm"
        />
      </div>

      <div className=" flex justify-end gap-5">
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button>Create new user</Button>
      </div>
    </form>
  );
}

export default SignupForm;
