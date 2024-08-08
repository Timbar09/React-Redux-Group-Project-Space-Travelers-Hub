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
      <ul className={`${styles.navList} d-none d-md-flex py-2`}>
        {links.map((link) => (
          <li key={link.text}>
            <NavLink to={link.path} className={styles.link}>
              {link.path === '/my-profile' ? <MyProfile /> : link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
}

export default NavList;
