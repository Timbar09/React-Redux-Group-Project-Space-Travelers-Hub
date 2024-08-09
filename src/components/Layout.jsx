import { Outlet } from 'react-router-dom';
import { useState } from 'react';

import Navbar from './Navbar';

function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) {
      document.body.style.overflow = 'scroll';
    } else {
      document.body.style.overflow = 'hidden';
    }
  };

  return (
    <>
      <header className="position-fixed top-0 w-100" style={{ zIndex: 100 }}>
        <Navbar isMenuOpen={isMenuOpen} handleMenuToggle={toggleMenu} />
      </header>

      <div className={isMenuOpen ? 'overlay d-md-none' : ''} />

      <main className="main">
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
