import PropTypes from 'prop-types';

import { GoLinkExternal as ExternalLinkIcon } from 'react-icons/go';

import styles from './CustomLink.module.css';

/**
 * Renders a custom link component.
 * @param {string} to - The URL to navigate to.
 * @param {string} text - The text to display in the link.
 * @param {string} target - The target attribute for the link (default: '_self').
 * @param {function} handleClick - The function to call when the link is clicked.
 *
 * @returns {JSX.Element} Rendered CustomLink component.
 */

function CustomLink({ to, text, target, handleClick }) {
  return (
    <a
      href={to}
      className={`${styles.link} d-inline-flex gap-1 align-items-center`}
      target={target}
      onClick={handleClick}
    >
      <span>{text}</span>
      {!to.startsWith('#') && <ExternalLinkIcon />}
    </a>
  );
}

CustomLink.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
  target: PropTypes.string,
};

CustomLink.defaultProps = {
  handleClick: null,
  target: '_self',
};

export default CustomLink;
