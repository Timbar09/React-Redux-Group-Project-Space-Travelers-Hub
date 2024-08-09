import LoaderBoxOfStar from './LoaderBoxOfStar';

import styles from './Loader.module.css';

const boxClasses = [styles.boxOfStar1, styles.boxOfStar2, styles.boxOfStar3, styles.boxOfStar4];

console.log(styles);

function Loader() {
  return (
    <div className={styles.loaderContainer}>
      {boxClasses.map((boxClass) => (
        <LoaderBoxOfStar key={boxClass} boxClass={boxClass} />
      ))}

      <div className={styles.astronaut} data-js="astro">
        <div className={styles.head} />
        <div className={`${styles.arm} ${styles.armLeft}`} />
        <div className={`${styles.arm} ${styles.armRight}`} />
        <div className={styles.body}>
          <div className={styles.panel} />
        </div>

        <div className={`${styles.leg} ${styles.legLeft}`} />
        <div className={`${styles.leg} ${styles.legRight}`} />
        <div className={styles.schoolbag} />
      </div>
    </div>
  );
}

export default Loader;
