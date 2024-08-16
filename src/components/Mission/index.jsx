import { useState } from 'react';
import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';

import PageHeader from '../PageHeader';
import MissionCard from './MissionCard';
import Modal from '../Modal';
import ModalWaiverContent from './ModalWaiverContent';
import LeaveMissionModalContent from './LeaveMissionModalContent';

import styles from './index.module.css';

function Mission() {
  const { missions } = useSelector((state) => state.missions);
  const [selectedMissionId, setSelectedMissionId] = useState(null);

  const handleModal = (id) => {
    setSelectedMissionId(id);
  };

  return (
    <Container className={`${styles.missionPage} py-4 px-3`}>
      <PageHeader
        heading="Featured Missions"
        description="Explore our exciting space missions and discover the universe with us! Join us in our journey to explore the universe."
      />

      <ul className={`${styles.missionList} list-unstyled`}>
        {missions.map(({ id, name, description, reserved, wikipedia, twitter, website }) => (
          <MissionCard
            key={id}
            id={id}
            name={name}
            description={description}
            reserved={reserved}
            wikipedia={wikipedia}
            twitter={twitter}
            website={website}
            handleModal={handleModal} // This is not from the mission object
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
