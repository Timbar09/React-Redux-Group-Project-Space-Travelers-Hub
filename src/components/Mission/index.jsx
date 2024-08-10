import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';

import PageHeader from '../PageHeader';
import MissionCard from './MissionCard';

import styles from './index.module.css';

function Mission() {
  const { missions } = useSelector((state) => state.missions);

  return (
    <Container classNames={`${styles.missionPage} py-4 px-3`}>
      <PageHeader
        heading="Featured Missions"
        description="Explore our exciting space missions and discover the universe with us! Join us in our journey to explore the universe."
      />

      <ul className="list-unstyled d-flex flex-column gap-3">
        {missions.map((mission) => (
          <MissionCard
            key={mission.id}
            id={mission.id}
            name={mission.name}
            description={mission.description}
            reserved={mission.reserved}
          />
        ))}
      </ul>
    </Container>
  );
}

export default Mission;
