import PropTypes from 'prop-types';

import styles from './Navbar/Navbar.module.css';

/**
 * Renders a button component
 * @param {string} type - The type of button to render e.g. primary, secondary, tertiary
 * @param {string} title - The text to display on the button element
 * @param {function} handleClick - The function to run when the button is clicked
 *
 * @returns {JSX.Element} - Rendered Button component
 */

function Button({ type = 'primary', title = 'Primary Button', handleClick = () => {} }) {
  const capitalizedType = type.charAt(0).toUpperCase() + type.slice(1);

  const types = {
    primary: styles.primary,
    secondary: styles.secondary,
    tertiary: styles.tertiary,
  };

  return (
    <button
      type="button"
      className={`${styles.button} ${types[capitalizedType]}`}
      onClick={handleClick}
    >
      {title}
    </button>
  );
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
