import { useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import styles from './index.module.css';

function Footer() {
  const location = useLocation();

  return (
    <footer
      className={`${styles.footer} text-center ${
        location.pathname === '/' ? styles.homeFooter : ''
      }`}
    >
      <Container className="py-4">Footer</Container>
    </footer>
  );
}

export default Footer;
