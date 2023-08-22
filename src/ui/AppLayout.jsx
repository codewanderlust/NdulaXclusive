import { Outlet } from 'react-router';

import Footer from './Footer';
import NavBar from './NavBar';

function AppLayout() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] ">
      <NavBar />
      <main className="mx-auto max-w-6xl p-6 ">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
