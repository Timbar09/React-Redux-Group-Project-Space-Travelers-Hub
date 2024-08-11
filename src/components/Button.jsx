import PropTypes from 'prop-types';

import { BsEmojiSmileUpsideDownFill as Icon } from 'react-icons/bs';

import styles from './Button.module.css';

/**
 * Renders a button component
 * @param {string} type - The type of button to render e.g. primary, secondary, tertiary
 * @param {string} title - The text to display on the button element
 * @param {function} handleClick - The function to run when the button is clicked
 * @param {element} icon - The icon to display on the button element
 *
 * @returns {JSX.Element} - Rendered Button component
 */

function Button({ type, title, handleClick, icon }) {
  const processedType = type.toLowerCase();

  const types = {
    primary: styles.primary,
    secondary: styles.secondary,
    tertiary: styles.tertiary,
  };

  return (
    <button
      type="button"
      className={`d-inline-flex align-items-center gap-2 px-3 rounded-1 ${styles.button} ${types[processedType]}`}
      onClick={handleClick}
    >
      <span>{icon}</span>
      <span>{title}</span>
    </button>
  );
}

Button.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  handleClick: PropTypes.func,
  icon: PropTypes.element,
};

Button.defaultProps = {
  title: 'Primary Button',
  type: 'primary',
  handleClick: () => {},
  icon: <Icon />,
};

export default Button;
