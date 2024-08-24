import Container from 'react-bootstrap/Container';

import styles from './index.module.css';

function Home() {
  return (
    <div className={`${styles.homePage} py-4`}>
      <Container
        className={`${styles.container} h-100 d-flex flex-column gap-4 align-items-center justify-content-center position-relative`}
      >
        <h1 className={`${styles.title} text-center position-relative`}>
          <span>SPACE</span>
          <span> TRAVELERS&apos; HUB </span>
        </h1>

        <p className={`${styles.description} text-center position-relative`}>
          A place where space enthusiasts explore the universe together.
        </p>
      </Container>
    </div>
  );
}

export default Home;
