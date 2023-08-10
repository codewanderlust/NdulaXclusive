import Gender from './Gender';
import Logo from './Logo';
import Icons from './Icons';
import Logout from '../features/authentication/Logout';

function Header() {
  return (
    <header className="flex justify-between bg-stone-200 px-20 py-4">
      <Gender />
      <Logo />
      <Logout />
      <Icons />
    </header>
  );
}

export default Header;
