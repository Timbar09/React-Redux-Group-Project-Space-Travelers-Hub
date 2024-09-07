import PropTypes from 'prop-types';
import { NavLink, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import ThemeToggleButton from './ThemeToggleButton';

import links from './links';

import styles from './index.module.css';

/**
 * NavMobileMenu component
 * @param {function} handleMenu - Function to handle the mobile menu
 *
 * @returns {JSX.Element} - Rendered NavMobileMenu component
 */

function NavMobileMenu({ handleMenuToggle }) {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <ul
      className={`${styles.mobileNav} ${
        isHomePage ? styles.mobileHomeNav : ''
      } d-md-none py-4 position-absolute w-100 text-center`}
      role="menu"
    >
      <Container>
        <li className="mb-2 d-flex justify-content-end px-1">
          <ThemeToggleButton />
        </li>

        {links.map((link) => (
          <li key={link.text}>
            <NavLink
              to={link.path}
              className={`${({ isActive }) =>
                isActive ? 'active' : undefined} ${
                styles.option
              } p-2 mb-2 rounded fs-3 w-100`}
              onClick={handleMenuToggle}
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
  handleMenuToggle: PropTypes.func.isRequired,
};

export default NavMobileMenu;
