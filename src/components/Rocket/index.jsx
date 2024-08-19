import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';

import PageHeader from '../PageHeader';
import RocketCard from './RocketCard';
import Modal from '../Modal';
import CancelRocketModalContent from './CancelRocketModalContent';

import styles from './index.module.css';

function Rocket() {
  const { rocketList } = useSelector((state) => state.rockets);
  const [selectedRocketId, setSelectedRocketId] = useState(rocketList[0].id);

  const handleModal = (id) => {
    setSelectedRocketId(id);
  };

  return (
    <Container className={`${styles.missionPage} py-4 px-3`}>
      <PageHeader
        heading="Featured Rockets"
        description="Explore our exciting rockets and discover the universe with us! Join us in our journey to explore the universe."
      />

      <ul className={`${styles.rocketList} d-flex flex-column gap-3`}>
        {rocketList.map((rocketDataObj) => (
          <RocketCard
            key={rocketDataObj.id}
            rocket={rocketDataObj}
            handleModal={handleModal}
          />
        ))}
      </ul>

      <Modal
        modalId="cancelRocketModal"
        itemId={selectedRocketId}
        Content={CancelRocketModalContent}
        blank
      />
    </Container>
  );
}

CancelRocketModalContent.propTypes = {
  itemId: PropTypes.string.isRequired,
};

export default Rocket;
