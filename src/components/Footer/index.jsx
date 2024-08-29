import { useLocation } from 'react-router-dom';
import dayjs from 'dayjs';
import Container from 'react-bootstrap/Container';

import styles from './index.module.css';

function Footer() {
  const location = useLocation();
  const currentYear = dayjs().format('YYYY');
  const copyrightContent = `${currentYear} - All Rights Reserved - `;

  return (
    <footer
      className={`${styles.footer} text-center ${
        location.pathname === '/' ? styles.homeFooter : ''
      }`}
    >
      <Container className="py-4 d-flex flex-wrap justify-content-center align-items-center gap-3 justify-content-md-between">
        <p className="m-0">
          &copy;
          {copyrightContent}
          <a href="#" className="" target="_blank" rel="noreferrer">
            Space Traveler&apos;s Hub
          </a>
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
