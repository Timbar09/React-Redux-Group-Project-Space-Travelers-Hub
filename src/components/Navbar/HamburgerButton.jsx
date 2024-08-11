import PropTypes from 'prop-types';

import styles from './index.module.css';

function HamburgerButton({ isMenuOpen, handleMenuToggle }) {
  return (
    <button
      className={`${styles.hamburger} ${isMenuOpen ? styles.open : styles.close} d-md-none`}
      type="button"
      onClick={handleMenuToggle}
      aria-label="Menu"
    >
      <span className={`${styles.stroke} ${styles.stroke1}`} />
      <span className={`${styles.stroke} ${styles.stroke2}`} />
      <span className={`${styles.stroke} ${styles.stroke3}`} />
    </button>
  );
}

HamburgerButton.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  handleMenuToggle: PropTypes.func.isRequired,
};

export default HamburgerButton;
