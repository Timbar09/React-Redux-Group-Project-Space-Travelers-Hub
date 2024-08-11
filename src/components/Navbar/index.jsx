import PropTypes from 'prop-types';

import Container from 'react-bootstrap/Container';

import NavLogo from './NavLogo';
import NavList from './NavList';
import NavMobileMenu from './NavMobileMenu';
import HamburgerButton from './HamburgerButton';

import styles from './index.module.css';

function Navbar({ isMenuOpen, handleMenuToggle }) {
  return (
    <nav className={styles.nav}>
      <Container className="d-flex justify-content-between align-items-center">
        <NavLogo />

        <NavList />

        {isMenuOpen && <NavMobileMenu handleMenuToggle={handleMenuToggle} />}

        <HamburgerButton isMenuOpen={isMenuOpen} handleMenuToggle={handleMenuToggle} />
      </Container>
    </nav>
  );
}

Navbar.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  handleMenuToggle: PropTypes.func.isRequired,
};

export default Navbar;
