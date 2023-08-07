// import { useMutation, useQueryClient } from '@tanstack/react-query';
// import { useForm } from 'react-hook-form';

// function CreateOrder() {
//   const { register, handleSubmit, reset, getValues, formState } = useForm();
//   const { errors } = formState;
//   const query = useQueryClient();

//   const { mutate, isLoading: isCreating } = useMutation({});
//   return (
//     <div className="px-4 py-6">
//       <h2 className="mb-5 text-xl font-semibold">
//         Ready to order? Let&apos;s go
//       </h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
//           <label className="sm:basis-40">First Name</label>
//         </div>

//         <input
//           type="text"
//           name="customer "
//           placeholder="Name"
//           {...register('name', { required: true })}
//           className=" grow rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
//         />
//         <input
//           type="text"
//           name="email"
//           placeholder="Email"
//           {...register('email', { required: true })}
//           className="rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
//         />
//         <input
//           type="text"
//           name="address"
//           placeholder="Address"
//           {...register('address', { required: true })}
//           className="rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
//         />
//         <input
//           type="text"
//           name="phone"
//           placeholder="Phone"
//           {...register('phone', { required: true })}
//           className="rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
//         />
//         <button
//           type="submit"
//           className="rounded-md bg-gray-800 px-4 py-2 text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }

// export default CreateOrder;

function CreateOrder() {
  return <div>Order</div>;
}

export default CreateOrder;
