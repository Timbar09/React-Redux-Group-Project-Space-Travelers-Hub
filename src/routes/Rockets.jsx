import { useSelector } from 'react-redux';
import {
  Container, ListGroup,
} from 'react-bootstrap';
import Rocket from '../components/rockets/Rocket';
import styles from './Missions.module.css';

function Rockets() {
  const { rocketList, isLoading } = useSelector((store) => store.Rockets);

  if (isLoading) {
    return (
      <div className={`${styles.loading} container padding`}>
        <div className={styles.spinner}>
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
    );
  }

  return (
    <Container className="rocket-container">
      <ListGroup variant="flush">
        {
          rocketList.map((rocket) => (
            <Rocket key={rocket.id} myrockets={rocket} />
          ))
        }
      </ListGroup>
    </Container>
  );
}

export default Rockets;
