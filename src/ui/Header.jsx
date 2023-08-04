import Gender from "./Gender";
import Logo from "./Logo";
import Icons from "./Icons";

function Header() {
  return (
    <header className="flex justify-between px-3 py-4 bg-stone-200">
      <Gender />
      <Logo />
      <Icons />
    </header>
  );
}

export default Header;
