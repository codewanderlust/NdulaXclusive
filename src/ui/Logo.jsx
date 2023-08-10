import { Link } from 'react-router-dom';

function Logo() {
  return (
    <Link to="/men">
      <img
        className="h-24 w-24 cursor-pointer"
        src="https://fgfppclstifnqgadpqux.supabase.co/storage/v1/object/public/logo/ndulaxclusive-logo.png?t=2023-08-10T15%3A59%3A45.598Z"
        alt=""
      />
    </Link>
  );
}

export default Logo;
