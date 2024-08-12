import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import ThemeToggleButton from './ThemeToggleButton';

import links from './links';

import styles from './index.module.css';

function NavMobileMenu({ handleMenu }) {
  return (
    <ul className={`${styles.mobileNav} d-md-none py-4 position-absolute w-100 text-center`}>
      <Container>
        <li className="mb-2 d-flex justify-content-end">
          <ThemeToggleButton />
        </li>

        {/* TODO: Close the mobile menu when a link is clicked */}
        {links.map((link) => (
          <li key={link.text}>
            <NavLink
              to={link.path}
              className={`${({ isActive }) => (isActive ? 'active' : undefined)} ${
                styles.option
              } p-2 mb-2 rounded fs-3 w-100`}
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
