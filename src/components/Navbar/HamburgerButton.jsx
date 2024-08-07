import PropTypes from 'prop-types';

import styles from './Navbar.module.css';

function HamburgerButton({ menu, handleMenu }) {
  return (
    <button
      className={`${styles.hamburger} ${menu ? styles.open : styles.close} d-md-none`}
      type="button"
      onClick={handleMenu}
      aria-label="Menu"
    >
      <span className={`${styles.stroke} ${styles.stroke1}`} />
      <span className={`${styles.stroke} ${styles.stroke2}`} />
      <span className={`${styles.stroke} ${styles.stroke3}`} />
    </button>
  );
}

HamburgerButton.propTypes = {
  menu: PropTypes.bool.isRequired,
  handleMenu: PropTypes.func.isRequired,
};

export default HamburgerButton;
