import { Outlet } from 'react-router';
import Header from './Header';
import Footer from './Footer';

function AppLayout() {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      <Header />
      <main className="container mx-auto flex flex-col justify-center px-24 ">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
