import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import styles from './Navbar.module.css';

const links = [
  { path: '/', text: 'Missions' },
  { path: 'myprofile', text: 'My Profile' },
];

function Navbar() {
  return (
    <header>
      <Container className={styles.nav}>
        <span>
          <NavLink
            to={links[0].path}
            className={styles.logo}
            style={{ border: 0, color: '#1b1b1b' }}
          >
            Space Traveler&apos;s Hub
          </NavLink>
        </span>
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
