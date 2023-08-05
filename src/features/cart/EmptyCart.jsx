import LinkButton from '../../ui/LinkButton';

function EmptyCart() {
  return (
    <div className=" px-4 py-3">
      <LinkButton to="/">&larr; Back to menu</LinkButton>
      <img
        className="w-96"
        src="https://fgfppclstifnqgadpqux.supabase.co/storage/v1/object/public/sneaker-images/empty_cart.png?t=2023-08-05T18%3A16%3A19.213Z"
        alt=""
      />
      <p className="mt-7 font-semibold">
        Your cart is empty. Start adding some sneakers :)
      </p>
    </div>
  );
}

export default EmptyCart;
