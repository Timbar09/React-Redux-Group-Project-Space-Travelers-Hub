import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

import Container from 'react-bootstrap/Container';

import { GiRun as LeaveIcon } from 'react-icons/gi';
import { TbRocketOff as CancelIcon } from 'react-icons/tb';
import { GiSpaceSuit as MissionIcon } from 'react-icons/gi';
import { BsFillRocketTakeoffFill as RocketIcon } from 'react-icons/bs';

import { joinLeaveMissionToggle } from '../../redux/missions/missionSlice';
import { AddRemoveReservationToggle } from '../../redux/rockets/rocketSlice';

import MyProfileHeader from './MyProfileHeader';
import Button from '../Button';

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

  const handleCancelation = (id) => {
    if (activeTab === 'missions') {
      dispatch(joinLeaveMissionToggle(id));
    } else {
      dispatch(AddRemoveReservationToggle(id));
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
            <li
              key={`myItem-${item.id}`}
              className={`${styles.myProfileTabItem} d-flex align-items-center justify-content-between gap-3 p-3 rounded-2`}
            >
              <div className="d-flex align-items-center gap-2">
                {activeTab === 'missions' ? (
                  <span
                    className={`${styles.myProfileTabItemIcon} p-2 rounded-1 d-flex align-items-center justify-content-center`}
                  >
                    <MissionIcon />
                  </span>
                ) : (
                  <span
                    className={`${styles.myProfileTabItemIcon} p-2 rounded-1 d-flex align-items-center justify-content-center`}
                  >
                    <RocketIcon />
                  </span>
                )}

                <h3>{item.name}</h3>
              </div>

              <div className="d-flex gap-2">
                <Button
                  type="tertiary"
                  icon={
                    activeTab === 'missions' ? (
                      <LeaveIcon style={{ transform: 'rotateY(180deg)' }} />
                    ) : (
                      <CancelIcon />
                    )
                  }
                  title={
                    activeTab === 'missions'
                      ? 'Leave Mission'
                      : 'Cancel Reservation'
                  }
                  handleClick={() => handleCancelation(item.id)}
                  danger
                />
              </div>
            </li>
          ))}
        </ul>
      </section>
    </Container>
  );
}

export default MyProfile;
