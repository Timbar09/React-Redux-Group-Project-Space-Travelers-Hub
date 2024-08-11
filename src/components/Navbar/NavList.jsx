import { NavLink } from 'react-router-dom';

import { FaCircleUser as UserIcon } from 'react-icons/fa6';

import ThemeToggleButton from './ThemeToggleButton';

import links from './links';

import styles from './index.module.css';

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
      <ul className={`${styles.navList} d-none d-md-flex align-items-center gap-4 p-2 fs-6`}>
        <ThemeToggleButton />

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
