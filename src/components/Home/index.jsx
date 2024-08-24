import Container from 'react-bootstrap/Container';

import { IoMdRocket as BookRocketIcon } from 'react-icons/io';
import { GiSpaceSuit as JoinMissionIcon } from 'react-icons/gi';

import Button from '../Button';

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

        <div className="position-relative d-flex flex-column align-items-center gap-1 flex-sm-row gap-sm-3">
          <Button
            type="primary"
            title="Join a Mission"
            handleClick={() => console.log('Clicked the "Join Now" button')}
            icon={<JoinMissionIcon />}
          />
          <span> or </span>
          <Button
            type="secondary"
            title="Book a Rocket"
            handleClick={() => console.log('Clicked the "Book Rocket" button')}
            icon={<BookRocketIcon />}
          />
        </div>
      </Container>
    </div>
  );
}

export default Home;
