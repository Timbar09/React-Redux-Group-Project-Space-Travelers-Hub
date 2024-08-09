import PropTypes from 'prop-types';

import Container from 'react-bootstrap/Container';

import NavLogo from './NavLogo';
import NavList from './NavList';
import NavMobileMenu from './NavMobileMenu';
import HamburgerButton from './HamburgerButton';

import styles from './Navbar.module.css';

function Navbar({ isMenuOpen, handleMenuToggle }) {
  return (
    <header className={styles.header}>
      <Container className={styles.nav}>
        <NavLogo />

        <NavList />

        {isMenuOpen && <NavMobileMenu handleMenuToggle={handleMenuToggle} />}

        <HamburgerButton isMenuOpen={isMenuOpen} handleMenuToggle={handleMenuToggle} />
      </Container>
    </header>
  );
}

Navbar.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  handleMenuToggle: PropTypes.func.isRequired,
};

export default Navbar;
