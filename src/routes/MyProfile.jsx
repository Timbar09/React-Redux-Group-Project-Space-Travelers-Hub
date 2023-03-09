import { useSelector } from 'react-redux';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import styles from './MyProfile.module.css';

function MyProfile() {
  const { missions } = useSelector((state) => state.missions);
  const { rocketList } = useSelector((store) => store.Rockets);

  return (
    <Container>
      <Row>
        <Col sm={12} lg={6} className="mb-4">
          <h2 className="mb-4">My Missions</h2>
          <ul className="border rounded">
            {missions
              .filter((mission) => mission.reserved === true)
              .map((mission) => (
                <li className={`${styles.missionItem} p-4`} key={mission.id}>
                  {mission.name}
                </li>
              ))}
          </ul>
        </Col>
        <Col sm={12} lg={6}>
          <h2 className="mb-4">My Rockets</h2>
          <ul className="border rounded">
            {rocketList
              .filter((rocket) => rocket.isReserved === true)
              .map((rocket) => (
                <li className={`${styles.missionItem} p-4`} key={rocket.id}>
                  {rocket.name}
                </li>
              ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default MyProfile;
