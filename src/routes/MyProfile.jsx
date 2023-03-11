import { useSelector, useDispatch } from 'react-redux';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import { joinLeaveToggle } from '../redux/missions/missionsSlice';
import { remReservation } from '../redux/Rockets/rocketSlice';
import styles from './MyProfile.module.css';

function MyProfile() {
  const { missions } = useSelector((state) => state.missions);
  const { rocketList } = useSelector((store) => store.Rockets);
  const dispatch = useDispatch();

  const joinedMissions = missions.filter((mission) => mission.reserved === true);
  const reservedRockets = rocketList.filter((rocket) => rocket.isReserved === true);

  return (
    <Container>
      <Row>
        <Col sm={12} lg={6} className="mb-4">
          <h2 className="mb-4">My Missions</h2>

          <ul className="border rounded">
            {joinedMissions.length > 0 ? (
              joinedMissions.map((mission) => (
                <li className={`${styles.missionItem} p-4`} key={mission.id}>
                  <Row>
                    <Col>
                      <p>{mission.name}</p>
                      <a href={mission.wikipedia} target="_balnk" className={styles.readMore}>
                        Read more
                      </a>
                    </Col>
                    <Col className={styles.cancelBtn}>
                      <Button
                        variant="outline-danger"
                        onClick={() => dispatch(joinLeaveToggle(mission.id))}
                      >
                        Leave Mission
                      </Button>
                    </Col>
                  </Row>
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
                  <Row>
                    <Col>
                      <p>{rocket.name}</p>
                      <a href={rocket.wikipedia} target="_balnk" className={styles.readMore}>
                        Read more
                      </a>
                    </Col>
                    <Col className={styles.cancelBtn}>
                      <Button
                        variant="outline-danger"
                        onClick={() => dispatch(remReservation(rocket.id))}
                      >
                        Cancel Reservation
                      </Button>
                    </Col>
                  </Row>
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
