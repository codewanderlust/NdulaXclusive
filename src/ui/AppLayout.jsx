import { Outlet } from 'react-router';

import Footer from './Footer';
import NavBar from './NavBar';

function AppLayout() {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      <NavBar />
      <main className="mx-auto min-w-[1050px] max-w-[1300px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
