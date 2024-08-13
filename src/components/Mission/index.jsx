import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';

import PageHeader from '../PageHeader';
import MissionCard from './MissionCard';

import styles from './index.module.css';

function Mission() {
  const { missions } = useSelector((state) => state.missions);

  return (
    <Container className={`${styles.missionPage} py-4 px-3`}>
      <PageHeader
        heading="Featured Missions"
        description="Explore our exciting space missions and discover the universe with us! Join us in our journey to explore the universe."
      />

      <ul className={`${styles.missionList} list-unstyled`}>
        {missions.map(({ id, name, description, reserved, wikipedia, x, website }) => (
          <MissionCard
            key={id}
            id={id}
            name={name}
            description={description}
            reserved={reserved}
            wikipedia={wikipedia}
            x={x}
            website={website}
          />
        ))}
      </ul>
    </Container>
  );
}

export default Mission;
