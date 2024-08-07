import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import links from './links';
import styles from './Navbar.module.css';

function NavMobileMenu({ handleMenu }) {
  return (
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
  );
}

NavMobileMenu.propTypes = {
  handleMenu: PropTypes.func.isRequired,
};

export default NavMobileMenu;
