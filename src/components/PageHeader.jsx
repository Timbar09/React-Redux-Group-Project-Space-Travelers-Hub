import PropTypes from 'prop-types';

import styles from './PageHeader.module.css';

/**
 * Renders a page header component
 * @param {string} heading - The heading to display on the page header
 * @param {string} description - The description to display on the page header
 * @param {string} className - Additional classes to apply to the page header
 *
 * @returns {JSX.Element} - Rendered PageHeader component
 */

function PageHeader({ heading, description, className }) {
  return (
    <header className={`${styles.pageHeader} ${className} flex-column gap-1`}>
      <h1
        className={`${styles.pageHeaderHeading} py-5 text-center position-relative`}
      >
        {heading}
      </h1>

      <p className={`${styles.pageHeaderDescription} mx-auto text-center`}>
        {description}
      </p>
    </header>
  );
}

PageHeader.propTypes = {
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default PageHeader;
