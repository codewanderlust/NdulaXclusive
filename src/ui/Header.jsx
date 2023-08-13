import ConstructionBanner from './ConstructionBanner';
import SubMenu from './SubMenu';
import TopMenu from './TopMenu';
import MainHeader from './MainHeader';

function Header() {
  return (
    <div className="bg-white">
      <ConstructionBanner />
      <header>
        <TopMenu />
        <MainHeader />
        <SubMenu />
      </header>
    </div>
  );
}

export default Header;
