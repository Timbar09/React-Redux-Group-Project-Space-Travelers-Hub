import { useState, useEffect } from 'react';
import styles from './ThemeToggleButton.module.css';

function ThemeToggleButton() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return (
      savedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    );
  });

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <button
      type="button"
      className={`${styles.themeToggle} p-1`}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      onClick={toggleTheme}
      data-theme={theme}
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
