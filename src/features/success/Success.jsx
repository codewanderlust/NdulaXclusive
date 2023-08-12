import { AiOutlineCheckCircle } from 'react-icons/ai';

import { Link } from 'react-router-dom';

export default function Success() {
  return (
    <>
      <div
        id="SuccessPage"
        className="mx-auto mt-12 min-h-[50vh] max-w-[1200px] px-2"
      >
        <div className="flex min-h-[150px] w-full items-center justify-center bg-white p-6">
          <div>
            <div className="flex items-center text-xl">
              <AiOutlineCheckCircle className="text-green-500" size={35} />
              <span className="pl-4">Payment Successful</span>
            </div>
            <p className="text-sm">
              Thank you! We&apos;ve received your payment.
            </p>

            <Link to="/men" className="w-full">
              <div className="mt-4 w-full bg-blue-600 p-[11px] text-center text-sm font-semibold text-white">
                Back to shop
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
