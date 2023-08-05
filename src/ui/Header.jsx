import Gender from './Gender';
import Logo from './Logo';
import Icons from './Icons';

function Header() {
  return (
    <header className="flex justify-between bg-stone-200 px-20 py-4">
      <Gender />
      <Logo />
      <Icons />
    </header>
  );
}

export default Header;
