import { NavLink } from 'react-router-dom';

import logo from '../../assets/images/logo.png';

import styles from './Navbar.module.css';

function NavLogo() {
  return (
    <NavLink to="/" className={`${styles.logo} d-flex align-items-center`}>
      <img src={logo} alt="logo" />
      <span className={styles.logoName}>
        <span>Space</span>
        <span className="d-block">Traveler&apos;s Hub</span>
      </span>
    </NavLink>
  );
}

export default NavLogo;
