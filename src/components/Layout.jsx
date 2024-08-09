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
      <Navbar isMenuOpen={isMenuOpen} handleMenuToggle={toggleMenu} />
      <div className={isMenuOpen ? 'overlay d-md-none' : ''} />
      <main className="main">
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
