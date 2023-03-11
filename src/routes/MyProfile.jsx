import { useSelector } from 'react-redux';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import styles from './MyProfile.module.css';

function MyProfile() {
  const { missions } = useSelector((state) => state.missions);
  const { rocketList } = useSelector((store) => store.Rockets);

  const joinedMissions = missions.filter((mission) => mission.reserved === true);
  const reservedRockets = rocketList.filter((rocket) => rocket.isReserved === true);

  return (
    <Container>
      <Row>
        <Col sm={12} lg={6} className="mb-4">
          <h2 className="mb-4">My Missions</h2>
          {/* {!joinedMissions && <div>No missions booked yet!</div>} */}

          <ul className="border rounded">
            {joinedMissions.length > 0 ? (
              joinedMissions.map((mission) => (
                <li className={`${styles.missionItem} p-4`} key={mission.id}>
                  {mission.name}
                </li>
              ))
            ) : (
              <div className={styles.emptyListMessage}>
                <p>No missions booked yet!</p>
              </div>
            )}
          </ul>
        </Col>
        <Col sm={12} lg={6}>
          <h2 className="mb-4">My Rockets</h2>
          <ul className="border rounded">
            {reservedRockets.length > 0 ? (
              reservedRockets.map((rocket) => (
                <li className={`${styles.missionItem} p-4`} key={rocket.id}>
                  {rocket.name}
                </li>
              ))
            ) : (
              <div className={styles.emptyListMessage}>
                <p>No rockets reserved yet!</p>
              </div>
            )}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default MyProfile;
