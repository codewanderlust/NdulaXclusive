import Gender from './Gender';
import Logo from './Logo';
import Icons from './Icons';
import ConstructionBanner from './ConstructionBanner';

function Header() {
  return (
    <>
      <ConstructionBanner />
      <header className="flex h-20 items-center justify-between bg-stone-200 px-20 py-4">
        <Logo />
        <Gender />

        <Icons />
      </header>
    </>
  );
}

export default Header;
