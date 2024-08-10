import PropTypes from 'prop-types';

import styles from './PageHeader.module.css';

function PageHeader({ heading, description }) {
  return (
    <header className={`${styles.pageHeader} py-5 flex-column gap-1`}>
      <h1 className={`${styles.pageHeaderHeading} py-5 text-center position-relative`}>
        {heading}
      </h1>

      <p className={`${styles.pageHeaderDescription} mx-auto text-center`}>{description}</p>
    </header>
  );
}

PageHeader.propTypes = {
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default PageHeader;
