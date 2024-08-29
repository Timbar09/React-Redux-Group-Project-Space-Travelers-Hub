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
      <Container className="py-4 d-flex flex-wrap justify-content-between align-items-center">
        <p className="m-0">
          &copy; 2021 - All Rights Reserved -{' '}
          <a href="#" className="" target="_blank" rel="noreferrer">
            Space Traveler&apos;s Hub
          </a>
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
