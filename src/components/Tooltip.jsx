import PropTypes from 'prop-types';
import { useState } from 'react';

import styles from './Tooltip.module.css';

/**
 * Tooltip component to display a tooltip with a title and content
 *
 * @param {string|node} title - The title of the tooltip
 * @param {node} children - The content of the tooltip
 *
 * @returns {JSX.Element}
 */

function Tooltip({ title, children }) {
  const [isTitleHovered, setIsTitleHovered] = useState(false);

  const isString = typeof title === 'string';
  const isNode = title.type;

  const handleMouseEnter = () => {
    setIsTitleHovered((prev) => !prev);
  };

  if (!isString && !isNode) {
    throw new Error('Tooltip title must be a string or a node');
  }

  return (
    <div className={`${styles.tooltip} position-relative`}>
      <button
        type="button"
        className={`${styles.tooltipTitle} rounded-1 py-1 px-2`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseEnter}
      >
        {title}
      </button>

      <div
        className={`${styles.tooltipContent} p-3 rounded-2`}
        hidden={!isTitleHovered}
      >
        {children}
      </div>
    </div>
  );
}

Tooltip.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  children: PropTypes.node.isRequired,
};

export default Tooltip;
