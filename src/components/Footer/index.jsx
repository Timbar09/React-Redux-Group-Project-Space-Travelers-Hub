import { useLocation } from 'react-router-dom';
import dayjs from 'dayjs';
import Container from 'react-bootstrap/Container';

import CustomLink from '../CustomLink';

import links from '../Navbar/links';

import styles from './index.module.css';

function Footer() {
  const location = useLocation();
  const paths = links.map((link) => link.path);

  const isHome = location.pathname === '/';
  const isNoMatch = !paths.includes(location.pathname);
  const isHomeOrNoMatch = isHome || isNoMatch;

  const currentYear = dayjs().format('YYYY');
  const copyrightContent = `${currentYear} - All Rights Reserved - `;

  return (
    <footer
      className={`${styles.footer} text-center ${
        isHomeOrNoMatch ? styles.homeFooter : ''
      }`}
    >
      <Container className="d-flex flex-wrap justify-content-center align-items-center gap-3 justify-content-md-between">
        <p className="m-0">
          &copy;
          {copyrightContent}
          <CustomLink
            to="https://github.com/Timbar09/React-Redux-Group-Project-Space-Travelers-Hub"
            text="Space Traveler's Hub"
            target="_blank"
          />
          <span>.</span>
        </p>

        <p className="m-0">
          <small>
            <span>Developed by </span>
            <CustomLink
              to="https://github.com/Timbar09"
              text="Miles Mosweu"
              target="_blank"
            />
            <span> and </span>
            <CustomLink
              to="https://github.com/Shakir-Hussain12"
              text="Shakir Hussain"
              target="_blank"
            />
            <span>.</span>
          </small>
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
