import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { NavLink } from 'react-router-dom';

import { IoMdRocket as ReserveRocketIcon } from 'react-icons/io';
import { GiSpaceSuit as JoinMissionIcon } from 'react-icons/gi';

import Button from '../Button';

import styles from './index.module.css';

function Home() {
  useEffect(() => {
    document.title = "Space Traveler's Hub";
  }, []);

  return (
    <div className={`${styles.homePage} py-4`}>
      <Container
        className={`${styles.container} h-100 d-flex flex-column gap-4 align-items-center justify-content-center position-relative`}
      >
        <h1 className={`${styles.title} text-center position-relative`}>
          <span>SPACE</span>
          <span> TRAVELER&apos;S HUB </span>
        </h1>

        <p className={`${styles.description} text-center position-relative`}>
          A place where space enthusiasts explore the universe together.
        </p>

        <div className="position-relative d-flex flex-column align-items-center gap-1 flex-sm-row gap-sm-3">
          <NavLink to="/missions">
            <Button
              type="primary"
              title="Join a Mission"
              icon={<JoinMissionIcon />}
            />
          </NavLink>

          <span> or </span>

          <NavLink to="/rockets">
            <Button
              type="secondary"
              title="Reserve a Rocket"
              icon={<ReserveRocketIcon />}
            />
          </NavLink>
        </div>
      </Container>
    </div>
  );
}

export default Home;
