import { HiArrowRightOnRectangle } from 'react-icons/hi2';
import useLogout from './useLogout';

function Logout() {
  const { logout, isLoading } = useLogout();
  return (
    <div>
      <button disabled={isLoading} onClick={logout}>
        <HiArrowRightOnRectangle size={20} />
      </button>
    </div>
  );
}

export default Logout;
