import styles from './Loader/Loader.module.css';

function Loader() {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.boxOfStar1}>
        <div className={`${styles.star} ${styles.starPosition1}`} />
        <div className={`${styles.star} ${styles.starPosition2}`} />
        <div className={`${styles.star} ${styles.starPosition3}`} />
        <div className={`${styles.star} ${styles.starPosition4}`} />
        <div className={`${styles.star} ${styles.starPosition5}`} />
        <div className={`${styles.star} ${styles.starPosition6}`} />
        <div className={`${styles.star} ${styles.starPosition7}`} />
      </div>
      <div className={styles.boxOfStar2}>
        <div className={`${styles.star} ${styles.starPosition1}`} />
        <div className={`${styles.star} ${styles.starPosition2}`} />
        <div className={`${styles.star} ${styles.starPosition3}`} />
        <div className={`${styles.star} ${styles.starPosition4}`} />
        <div className={`${styles.star} ${styles.starPosition5}`} />
        <div className={`${styles.star} ${styles.starPosition6}`} />
        <div className={`${styles.star} ${styles.starPosition7}`} />
      </div>
      <div className={styles.boxOfStar3}>
        <div className={`${styles.star} ${styles.starPosition1}`} />
        <div className={`${styles.star} ${styles.starPosition2}`} />
        <div className="star star-position3" />
        <div className="star star-position4" />
        <div className="star star-position5" />
        <div className="star star-position6" />
        <div className="star star-position7" />
      </div>
      <div className={styles.boxOfStar4}>
        <div className="star star-position1" />
        <div className="star star-position2" />
        <div className="star star-position3" />
        <div className="star star-position4" />
        <div className="star star-position5" />
        <div className="star star-position6" />
        <div className="star star-position7" />
      </div>
      <div data-js="astro" className={styles.astro}>
        <div className="head" />
        <div className="arm arm-left" />
        <div className="arm arm-right">
          <div className="body">
            <div className="panel" />
          </div>

          <div className="leg leg-left" />
          <div className="leg leg-right" />
          <div className="schoolbag" />
        </div>
      </div>
    </div>
  );
}

export default Loader;
