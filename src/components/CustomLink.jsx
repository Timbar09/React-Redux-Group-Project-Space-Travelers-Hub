import PropTypes from 'prop-types';

import styles from './CustomLink.module.css';

function CustomLink({ to, text, target, handleClick }) {
  return (
    <a href={to} className={styles.link} target={target} onClick={handleClick}>
      {text}
    </a>
  );
}

CustomLink.propTypes = {
  to: PropTypes.string,
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
  target: PropTypes.string,
};

CustomLink.defaultProps = {
  to: '#this-is-a-dead-link',
  handleClick: null,
  target: '_self',
};

export default CustomLink;
