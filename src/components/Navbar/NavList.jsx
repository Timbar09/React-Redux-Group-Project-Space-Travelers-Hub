import { NavLink } from 'react-router-dom';

import { FaCircleUser as UserIcon } from 'react-icons/fa6';

import links from './links';
import styles from './Navbar.module.css';
import ThemeToggleButton from './ThemeToggleButton';

function MyProfile() {
  return (
    <span className="myProfile" title="My Profile" aria-label="My Profile">
      <UserIcon />
      <span className="myProfileText">My Profile</span>
    </span>
  );
}

function NavList() {
  return (
    <>
      <ThemeToggleButton />
      <ul className={`${styles.navList} d-none d-md-flex align-items-center gap-4 p-2 fs-6`}>
        {links.map((link) => (
          <li key={link.text}>
            <NavLink to={link.path} className={`${styles.link} position-relative px-2`}>
              {link.path === '/my-profile' ? <MyProfile /> : link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
}

export default NavList;
