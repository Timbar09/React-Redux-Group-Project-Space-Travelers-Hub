import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';

import PageHeader from '../PageHeader';
import MissionCard from './MissionCard';
import Modal from '../Modal';
import ModalWaiverContent from './ModalWaiverContent';
import LeaveMissionModalContent from './LeaveMissionModalContent';

import styles from './index.module.css';

function Mission() {
  const { missionList } = useSelector((state) => state.missions);
  const [selectedMissionId, setSelectedMissionId] = useState(missionList[0].id);

  const handleModal = (id) => {
    setSelectedMissionId(id);
  };

  useEffect(() => {
    document.title = "Missions | Space Traveler's Hub";
  }, []);

  return (
    <Container className={`${styles.missionPage} py-4 px-3`}>
      <PageHeader
        heading="Featured Missions"
        description="Explore our exciting space missions and discover the universe with us! Join us in our journey to explore the universe."
        className={styles.pageHeader}
      />

      <ul className={`${styles.missionList} list-unstyled`}>
        {missionList.map((mission) => (
          <MissionCard
            key={mission.id}
            id={mission.id}
            name={mission.name}
            description={mission.description}
            isReserved={mission.isReserved}
            wikipedia={mission.wikipedia}
            twitter={mission.twitter}
            website={mission.website}
            handleModal={handleModal}
          />
        ))}
      </ul>

      <Modal
        modalId="waiverModal"
        title="Waiver of Liability"
        itemId={selectedMissionId}
        Content={ModalWaiverContent}
        size="modal-lg"
      />

      <Modal
        modalId="leaveModal"
        title="Are you sure you want to leave this mission?"
        itemId={selectedMissionId}
        Content={LeaveMissionModalContent}
        blank
      />
    </Container>
  );
}

export default Mission;
