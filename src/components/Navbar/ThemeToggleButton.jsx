import styles from './ThemeToggleButton.module.css';

function ThemeToggleButton() {
  return (
    <button
      type="button"
      className={styles.themeToggle}
      title="Toggle Theme"
      aria-label="Toggle Theme"
    >
      <span className={styles.themeToggleContainer}>
        <span className={styles.themeToggleMoon}>
          <span className={styles.themeToggleCrater} />
          <span className={styles.themeToggleCrater} />
          <span className={styles.themeToggleCrater} />
        </span>
      </span>
    </button>
  );
}

export default ThemeToggleButton;
