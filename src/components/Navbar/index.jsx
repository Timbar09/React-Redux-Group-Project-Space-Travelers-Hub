import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import Container from 'react-bootstrap/Container';

import NavLogo from './NavLogo';
import NavList from './NavList';
import NavMobileMenu from './NavMobileMenu';
import HamburgerButton from './HamburgerButton';

import styles from './index.module.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) {
      document.body.style.overflow = 'scroll';
    } else {
      document.body.style.overflow = 'hidden';
    }
  };

  return (
    <nav className={`${styles.nav} ${isHomePage ? styles.homePageNav : ''}`}>
      <div
        className="overlay"
        style={{ display: isMenuOpen ? 'block' : 'none' }}
        onClick={toggleMenu}
        role="button"
        tabIndex={0}
        onKeyDown={toggleMenu}
        aria-label="overlay"
      />

      <Container className="d-flex justify-content-between align-items-center">
        <NavLogo />

        <NavList />

        {isMenuOpen && <NavMobileMenu handleMenuToggle={toggleMenu} />}

        <HamburgerButton
          isMenuOpen={isMenuOpen}
          handleMenuToggle={toggleMenu}
        />
      </Container>
    </nav>
  );
}

export default Navbar;
