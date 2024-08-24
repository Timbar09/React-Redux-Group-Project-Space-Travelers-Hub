import Container from 'react-bootstrap/Container';

import styles from './index.module.css';

function Home() {
  return (
    <div className={`${styles.homePage} py-4`}>
      <Container className="d-flex flex-column align-items-center justify-content-center">
        <h1>Home</h1>
      </Container>
    </div>
  );
}

export default Home;
