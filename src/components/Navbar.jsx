import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import logo from '../Images/planet.png';

import styles from './Navbar.module.css';

const links = [
  { path: '/', text: 'Missions' },
  { path: 'myprofile', text: 'My Profile' },
  { path: '/rockets', text: 'Rockets' },
];

function Navbar() {
  return (
    <header className={`${styles.header} border-bottom`}>
      <Container className={styles.nav}>
        <NavLink to={links[0].path} className={styles.logo} style={{ border: 0, color: '#1b1b1b' }}>
          <img src={logo} alt="logo" />
          <span className={styles.logoName}>Space Traveler&apos;s Hub</span>
        </NavLink>
        <ul className={styles.links}>
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
      </Container>
    </header>
  );
}

export default Navbar;
