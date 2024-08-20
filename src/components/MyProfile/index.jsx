import { useSelector, useDispatch } from 'react-redux';

import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button';

// import { joinLeaveMissionToggle } from '../../redux/missions/missionSlice';
// import { AddRemoveReservationToggle } from '../../redux/rockets/rocketSlice';

import MyProfileMetrics from './MyProfileMetrics';

import styles from './index.module.css';

function MyProfile() {
  const { missionList } = useSelector((state) => state.missions);
  const { rocketList } = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  const joinedMissions = missionList.filter(
    (mission) => mission.isReserved === true,
  );
  const reservedRockets = rocketList.filter(
    (rocket) => rocket.isReserved === true,
  );

  const metrics = [
    { id: 'profileCount1', name: 'Missions', value: joinedMissions.length },
    { id: 'profileCount2', name: 'Rockets', value: reservedRockets.length },
  ];

  return (
    <Container className={`${styles.myProfilePage} py-4 px-3`}>
      <header
        className={`${styles.myProfileHeader} d-md-flex gap-3 p-3 rounded-2`}
      >
        <div
          className={`${styles.myProfileBio} d-flex gap-3 rounded-2 p-2 mb-2 mb-md-0 flex-md-column`}
        >
          <div className={styles.myProfileBioImage}>
            <img src="https://via.placeholder.com/150" alt="profile" />
          </div>

          <div className="d-md-none">
            <h1>John Doe</h1>
            <MyProfileMetrics metrics={metrics} />
          </div>
        </div>

        <div
          className={`${styles.myProfileDescription} d-flex flex-column gap-3 p-2 rounded-2`}
        >
          <div className="d-none d-md-flex justify-content-between align-items-center gap-1">
            <h1 className={`${styles.myProfileTitle}`}>John Doe</h1>

            <div className="d-none d-md-block">
              <MyProfileMetrics metrics={metrics} />
            </div>
          </div>

          <p>
            Welcome to your profile page! Here you can view the missions you
            have joined and the rockets you have reserved. You can also cancel
            your reservations and leave missions from here.
          </p>
        </div>
      </header>
      {/* <Row>
        <Col sm={12} lg={6} className="mb-4">
          <h2 className="mb-4">My Missions</h2>

          <ul className="border rounded">
            {joinedMissions.length > 0 ? (
              joinedMissions.map((mission) => (
                <li className={`${styles.missionItem} p-4`} key={mission.id}>
                  <Row>
                    <Col>
                      <p>{mission.name}</p>
                      <a
                        href={mission.wikipedia}
                        target="_blank"
                        className={styles.readMore}
                        rel="noreferrer"
                      >
                        Read more
                      </a>
                    </Col>
                    <Col className={styles.cancelBtn}>
                      <Button
                        variant="outline-danger"
                        onClick={() =>
                          dispatch(joinLeaveMissionToggle(mission.id))
                        }
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
                      <a
                        href={rocket.wikipedia}
                        target="_blank"
                        className={styles.readMore}
                        rel="noreferrer"
                      >
                        Read more
                      </a>
                    </Col>
                    <Col className={styles.cancelBtn}>
                      <Button
                        variant="outline-danger"
                        onClick={() =>
                          dispatch(AddRemoveReservationToggle(rocket.id))
                        }
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
      </Row> */}
    </Container>
  );
}

export default MyProfile;
