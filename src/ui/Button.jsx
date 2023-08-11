import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Button({ children, disabled, to, type, onClick }) {
  const base =
    ' inline-block text-sm  bg-stone-500 font-semibold uppercase tracking-wide text-slate-200 transition-colors duration-300 hover:bg-stone-400 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed';
  const styles = {
    primary: base + 'px-4 py-3 md:px-6 md:py-4 ',
    small: base + 'px-4 py-2 md:px-5 md:py-2.5 text-xs rounded-md ',
    round: base + 'px-2.5 py-1 md:px-3.5 md:py-2 text-sm rounded-full',
    secondary:
      'inline-block text-sm px-4 py-2.5  md:px-6 md:py-3.5 rounded-full hover:text-stone-800 border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 hover:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-200 focus:text-stone-800 focus:ring-offset-2 disabled:cursor-not-allowed',
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  if (onClick)
    return (
      <button disabled={disabled} onClick={onClick} className={styles[type]}>
        {children}
      </button>
    );
  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;

Button.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  to: PropTypes.string,
  type: PropTypes.oneOf(['primary', 'small', 'secondary', 'round']),
  onClick: PropTypes.func,
};
