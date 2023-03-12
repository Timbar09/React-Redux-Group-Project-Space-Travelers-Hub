import { Outlet } from 'react-router-dom';
import { useState } from 'react';

import Navbar from './Navbar';

function Layout() {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
    if (menu) {
      document.body.style.overflow = 'scroll';
    } else {
      document.body.style.overflow = 'hidden';
    }
  };

  return (
    <>
      <Navbar menu={menu} handleMenu={toggleMenu} />
      <div className={menu && 'overlay d-md-none'} />
      <main className="main">
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
