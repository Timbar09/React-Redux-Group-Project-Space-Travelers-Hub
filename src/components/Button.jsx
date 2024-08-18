import PropTypes from 'prop-types';

import { BsEmojiSmileUpsideDownFill as Icon } from 'react-icons/bs';

import styles from './Button.module.css';

/**
 * Renders a button component
 * @param {string} type - The type of button to render e.g. primary, secondary, tertiary
 * @param {string} title - The text to display on the button element. Default is an empty string
 * @param {function} handleClick - The function to run when the button is clicked
 * @param {element} icon - The icon to display on the button element. Default is a smiley face icon
 * @param {string} dataBsToggle - The data-bs-toggle is a Bootstrap toggling attribute value
 * @param {string} dataBsTarget - The data-bs-target is a Bootstrap target attribute value
 * @param {string} dataBsDismiss - The data-bs-dismiss is a Bootstrap dismiss attribute value
 * @param {boolean} danger - The danger attribute to show the button as a danger button
 * @param {boolean} isLink - The isLink attribute to show the button as a link
 * @param {string} to - The to attribute to redirect the user to a different page or section
 *
 * @returns {JSX.Element} - Rendered Button component
 */

function Button({
  type,
  title,
  handleClick,
  icon,
  dataBsToggle,
  danger,
  dataBsTarget,
  dataBsDismiss,
  isLink,
  to,
}) {
  const processedType = type.toLowerCase();
  const isTextLess = title.length === 0;
  const Tag = isLink ? 'a' : 'button';
  let elementTitle = '';
  let linkTarget = null;

  if (isLink) {
    linkTarget = to.startsWith('http') ? '_blank' : '_self';
  }

  if (isTextLess) {
    if (isLink && to.startsWith('http')) {
      const [site] = to
        .replace('https://', '')
        .replace('http://', '')
        .split('/');

      elementTitle = `Visit ${site}`;
    }
  }

  const types = {
    primary: {
      default: styles.primary,
      danger: styles.primaryDanger,
    },
    secondary: {
      default: styles.secondary,
      danger: styles.secondaryDanger,
    },
    tertiary: {
      default: styles.tertiary,
      danger: styles.tertiaryDanger,
    },
  };

  return (
    <Tag
      type="button"
      className={`${styles.button} ${danger ? types[processedType].danger : ''}
       ${types[processedType].default} ${
        isTextLess ? 'px-2' : 'px-3'
      } d-inline-flex align-items-center gap-2 rounded-1 `}
      onClick={handleClick}
      aria-label={title}
      title={elementTitle}
      data-bs-toggle={dataBsToggle}
      data-bs-target={dataBsTarget}
      data-bs-dismiss={dataBsDismiss}
      href={to}
      target={linkTarget}
      rel={linkTarget === '_blank' ? 'noreferrer' : ''}
    >
      <span>{icon}</span>
      {!isTextLess && <span>{title}</span>}
    </Tag>
  );
}

Button.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  handleClick: PropTypes.func,
  icon: PropTypes.element,
  dataBsToggle: PropTypes.string,
  dataBsTarget: PropTypes.string,
  dataBsDismiss: PropTypes.string,
  danger: PropTypes.bool,
  isLink: PropTypes.bool,
  to: PropTypes.string,
};

Button.defaultProps = {
  title: '',
  type: 'primary',
  handleClick: () => {},
  icon: <Icon />,
  dataBsToggle: '',
  dataBsTarget: '',
  dataBsDismiss: '',
  danger: false,
  isLink: false,
  to: '',
};

export default Button;
