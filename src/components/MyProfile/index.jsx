import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button';

// import { joinLeaveMissionToggle } from '../../redux/missions/missionSlice';
// import { AddRemoveReservationToggle } from '../../redux/rockets/rocketSlice';

import MyProfileHeader from './MyProfileHeader';

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

  const [list, setList] = useState(joinedMissions);
  const [activeTab, setActiveTab] = useState('missions');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    if (tab === 'missions') {
      setList(joinedMissions);
      setActiveTab('missions');
    } else {
      setList(reservedRockets);
      setActiveTab('rockets');
    }
  };

  const metrics = [
    { id: 'profileCount1', name: 'Missions', value: joinedMissions.length },
    { id: 'profileCount2', name: 'Rockets', value: reservedRockets.length },
  ];

  return (
    <Container className={`${styles.myProfilePage} py-4 px-3`}>
      <MyProfileHeader metrics={metrics} />

      <section className={`${styles.myProfileContent} rounded-2`}>
        <div className={`${styles.myProfileTabs} d-flex align-items-center`}>
          <button
            type="button"
            className={`${styles.myProfileTab} ${
              activeTab === 'missions' ? styles.activeTab : ''
            } flex-grow-1 p-2`}
            onClick={() => handleTabChange('missions')}
          >
            Missions
          </button>

          <button
            type="button"
            className={`${styles.myProfileTab} ${
              activeTab === 'rockets' ? styles.activeTab : ''
            } flex-grow-1 p-2`}
            onClick={() => handleTabChange('rockets')}
          >
            Rockets
          </button>
        </div>

        <ul className={`${styles.myMissionsList} d-flex flex-column gap-3`}>
          {list.map((item) => (
            <li
              key={`myMission-${item.id}`}
              className={`${styles.myItem} d-flex gap-3 p-3 rounded-2`}
            >
              <h3>{item.name}</h3>
            </li>
          ))}
        </ul>
      </section>
    </Container>
  );
}

export default MyProfile;
