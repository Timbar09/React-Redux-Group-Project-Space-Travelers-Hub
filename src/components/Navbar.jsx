import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import logo from '../Images/planet.png';

import styles from './Navbar.module.css';

const links = [
  { path: '/', text: 'Rockets' },
  { path: '/missions', text: 'Missions' },
  { path: 'myprofile', text: 'My Profile' },
];

function Navbar({ menu, handleMenu }) {
  return (
    <header className={`${styles.header} border-bottom`}>
      <Container className={styles.nav}>
        <NavLink to={links[0].path} className={styles.logo} style={{ border: 0, color: '#1b1b1b' }}>
          <img src={logo} alt="logo" />
          <span className={styles.logoName}>Space Traveler&apos;s Hub</span>
        </NavLink>
        <ul className={`${styles.links} d-none d-md-flex`}>
          {links.map((link) => (
            <li key={link.text}>
              <NavLink
                to={link.path}
                className={({ isActive }) => (isActive ? 'active' : undefined)}
              >
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
        {menu && (
          <ul className={`${styles.mobileNav} d-md-none py-4`}>
            <Container>
              {links.map((link) => (
                <li key={link.text}>
                  <NavLink
                    to={link.path}
                    className={`${({ isActive }) => (isActive ? 'active' : undefined)} ${
                      styles.option
                    } border p-2 mb-2 rounded`}
                    onClick={handleMenu}
                  >
                    {link.text}
                  </NavLink>
                </li>
              ))}
            </Container>
          </ul>
        )}
        <button
          className={`${styles.hamburger} ${menu ? styles.open : styles.close} d-md-none`}
          type="button"
          onClick={handleMenu}
        >
          <span className={`${styles.stroke} ${styles.stroke1}`} />
          <span className={`${styles.stroke} ${styles.stroke2}`} />
          <span className={`${styles.stroke} ${styles.stroke3}`} />
        </button>
      </Container>
    </header>
  );
}

Navbar.propTypes = {
  menu: PropTypes.bool.isRequired,
  handleMenu: PropTypes.func.isRequired,
};

export default Navbar;
