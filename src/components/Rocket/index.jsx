import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';

import PageHeader from '../PageHeader';
import RocketCard from './RocketCard';

import styles from './index.module.css';

function Rocket() {
  const { rocketList } = useSelector((state) => state.rockets);

  return (
    <Container className={`${styles.missionPage} py-4 px-3`}>
      <PageHeader
        heading="Featured Rockets"
        description="Explore our exciting rockets and discover the universe with us! Join us in our journey to explore the universe."
      />

      <ul className={`${styles.rocketList} d-flex flex-column gap-3`}>
        {rocketList.map((rocketDataObj) => (
          <RocketCard key={rocketDataObj.id} rocket={rocketDataObj} />
        ))}
      </ul>
    </Container>
  );
}

export default Rocket;
