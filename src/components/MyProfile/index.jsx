import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';

import MyProfileHeader from './MyProfileHeader';
import MyProfileItem from './MyProfileItem';

import styles from './index.module.css';

function MyProfile() {
  const { missionList } = useSelector((state) => state.missions);
  const { rocketList } = useSelector((state) => state.rockets);

  const joinedMissions = missionList.filter(
    (mission) => mission.isReserved === true,
  );
  const reservedRockets = rocketList.filter(
    (rocket) => rocket.isReserved === true,
  );

  const [list, setList] = useState(joinedMissions);
  const [activeTab, setActiveTab] = useState('missions');

  useEffect(() => {
    if (activeTab === 'missions') {
      setList(joinedMissions);
    } else {
      setList(reservedRockets);
    }
  }, [missionList, rocketList, activeTab]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const metrics = [
    { id: 'profileCount1', name: 'Missions', value: joinedMissions.length },
    { id: 'profileCount2', name: 'Rockets', value: reservedRockets.length },
  ];

  return (
    <Container className={`${styles.myProfilePage} py-4 px-3`}>
      <MyProfileHeader metrics={metrics} />

      <section className={`${styles.myProfileContent} rounded-2`}>
        <div
          className={`${styles.myProfileTabHeader} d-flex align-items-center`}
        >
          <button
            type="button"
            className={`${styles.myProfileTabButton} ${
              activeTab === 'missions' ? styles.activeTab : ''
            } flex-grow-1 p-2`}
            onClick={() => handleTabChange('missions')}
          >
            Joined Missions
          </button>

          <button
            type="button"
            className={`${styles.myProfileTabButton} ${
              activeTab === 'rockets' ? styles.activeTab : ''
            } flex-grow-1 p-2`}
            onClick={() => handleTabChange('rockets')}
          >
            Booked Rockets
          </button>
        </div>

        <ul
          className={`${styles.myProfileTabList} d-flex flex-column gap-2 px-3`}
        >
          {list.map((item) => (
            <MyProfileItem key={item.id} item={item} activeTab={activeTab} />
          ))}
        </ul>
      </section>
    </Container>
  );
}

export default MyProfile;
