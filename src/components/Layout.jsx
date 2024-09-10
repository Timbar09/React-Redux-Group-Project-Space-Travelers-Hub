import { Outlet } from 'react-router-dom';

import Navbar from './Navbar';
import Footer from './Footer';

function Layout() {
  return (
    <>
      <header className="position-fixed top-0 w-100" style={{ zIndex: 100 }}>
        <Navbar />
      </header>

      <main className="main">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default Layout;
