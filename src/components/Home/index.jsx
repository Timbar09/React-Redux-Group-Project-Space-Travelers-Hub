import Container from 'react-bootstrap/Container';

import styles from './index.module.css';

function Home() {
  return (
    <Container className={`${styles.homePage} py-4 px-3`}>
      <h1>Home</h1>
    </Container>
  );
}

export default Home;
