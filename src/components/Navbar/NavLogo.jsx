import { NavLink } from 'react-router-dom';

import logo from '../../assets/images/logo.png';

import styles from './Navbar.module.css';

function NavLogo() {
  return (
    <NavLink to="/" className={styles.logo}>
      <img src={logo} alt="logo" />
      <span className={styles.logoName}>
        <span>Space</span>
        <span>Traveler&apos;s Hub</span>
      </span>
    </NavLink>
  );
}

export default NavLogo;
