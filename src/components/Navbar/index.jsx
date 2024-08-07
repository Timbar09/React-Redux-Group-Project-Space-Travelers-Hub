import PropTypes from 'prop-types';

import Container from 'react-bootstrap/Container';

import NavLogo from './NavLogo';
import NavList from './NavList';
import NavMobileMenu from './NavMobileMenu';
import HamburgerButton from './HamburgerButton';

import styles from './Navbar.module.css';

function Navbar({ menu, handleMenu }) {
  return (
    <header className={`${styles.header} border-bottom`}>
      <Container className={styles.nav}>
        <NavLogo />

        <NavList />

        {menu && <NavMobileMenu handleMenu={handleMenu} />}

        <HamburgerButton menu={menu} handleMenu={handleMenu} />
      </Container>
    </header>
  );
}

Navbar.propTypes = {
  menu: PropTypes.bool.isRequired,
  handleMenu: PropTypes.func.isRequired,
};

export default Navbar;
