/* eslint react/prop-types: 0 */
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

function LinkButton({ children, to }) {
  const navigate = useNavigate();
  const className = 'text-sm text-blue-500 hover:text-blue-600 hover:underline';
  if (to === '-1')
    return (
      <Link to={to} className={className} onClick={() => navigate(-1)}>
        {children}
      </Link>
    );
  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}

export default LinkButton;
