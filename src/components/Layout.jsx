import { Outlet } from 'react-router-dom';

import Navbar from './navbar/Navbar';

function Layout() {
  return (
    <>
      <Navbar />
      <main className="main">
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
