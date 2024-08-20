import PropTypes from 'prop-types';

import MyProfileMetrics from './MyProfileMetrics';

import styles from './index.module.css';

function MyProfileHeader({ metrics }) {
  return (
    <header className={`${styles.myProfileHeader} d-md-flex gap-3 rounded-2`}>
      <div
        className={`${styles.myProfileBio} d-flex gap-3 rounded-2 p-2 mb-2 mb-md-0 flex-md-column`}
      >
        <div className={styles.myProfileBioImage}>
          <img src="/src/assets/images/john-doe.jpg" alt="John Doe" />
        </div>

        <div className="d-md-none">
          <h1>John Doe</h1>
          <MyProfileMetrics metrics={metrics} />
        </div>
      </div>

      <div
        className={`${styles.myProfileDescription} d-flex flex-column gap-3 p-2 rounded-2`}
      >
        <div className="d-none d-md-flex justify-content-between align-items-center gap-1">
          <h1 className={`${styles.myProfileTitle}`}>John Doe</h1>

          <div className="d-none d-md-block">
            <MyProfileMetrics metrics={metrics} />
          </div>
        </div>

        <p>
          Welcome to your profile page! Here you can view the missions you have
          joined and the rockets you have reserved. You can also cancel your
          reservations and leave missions from here.
        </p>
      </div>
    </header>
  );
}

MyProfileHeader.propTypes = {
  metrics: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default MyProfileHeader;
