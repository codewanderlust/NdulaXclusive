import { Link } from 'react-router-dom';

function Logo() {
  return (
    <Link to="/men">
      <div className="flex items-center text-lg font-bold sm:mb-4">
        <p className="font-satisfy ">ndula</p>
        <span>Xclusive</span>
      </div>
    </Link>
  );
}

export default Logo;
