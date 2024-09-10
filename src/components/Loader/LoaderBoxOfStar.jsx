import PropTypes from 'prop-types';

import styles from './Loader.module.css';

function LoaderBoxOfStar({ boxClass }) {
  return (
    <div className={boxClass}>
      <div className={`${styles.star} ${styles.starPosition1}`} />
      <div className={`${styles.star} ${styles.starPosition2}`} />
      <div className={`${styles.star} ${styles.starPosition3}`} />
      <div className={`${styles.star} ${styles.starPosition4}`} />
      <div className={`${styles.star} ${styles.starPosition5}`} />
      <div className={`${styles.star} ${styles.starPosition6}`} />
      <div className={`${styles.star} ${styles.starPosition7}`} />
    </div>
  );
}

LoaderBoxOfStar.propTypes = {
  boxClass: PropTypes.string.isRequired,
};

export default LoaderBoxOfStar;
