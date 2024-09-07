import PropTypes from 'prop-types';

import styles from './index.module.css';

/**
 * Renders a hamburger button component.
 * @param {boolean} isMenuOpen - The status of the menu.
 * @param {function} handleMenuToggle - The function to toggle the menu.
 *
 * @returns {JSX.Element} Rendered HamburgerButton component
 */

function HamburgerButton({ isMenuOpen, handleMenuToggle }) {
  return (
    <button
      className={`${styles.hamburger} ${
        isMenuOpen ? styles.open : styles.close
      } d-md-none`}
      type="button"
      onClick={handleMenuToggle}
      aria-label="Menu Toggle"
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
