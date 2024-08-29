import { useLocation } from 'react-router-dom';
import dayjs from 'dayjs';
import Container from 'react-bootstrap/Container';

import CustomLink from '../CustomLink';

import styles from './index.module.css';

function Footer() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const currentYear = dayjs().format('YYYY');
  const copyrightContent = `${currentYear} - All Rights Reserved - `;

  return (
    <footer
      className={`${styles.footer} text-center ${
        isHome ? styles.homeFooter : ''
      }`}
    >
      <Container className="py-4 d-flex flex-wrap justify-content-center align-items-center gap-3 justify-content-md-between">
        <p className="m-0">
          &copy;
          {copyrightContent}
          <CustomLink to="#" text="Space Traveler's Hub" target="_blank" />
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
