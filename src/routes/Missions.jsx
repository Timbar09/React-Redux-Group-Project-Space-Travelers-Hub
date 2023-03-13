import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';

import MissionList from '../components/missions/MissionList';
import styles from './Missions.module.css';

function Missions() {
  const { isLoading } = useSelector((state) => state.missions);

  if (isLoading) {
    return (
      <div className={`${styles.loading} container padding`}>
        <div className={styles.spinner}>
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
    );
  }

  return (
    <Container className="py-4">
      <MissionList />
    </Container>
  );
}

export default Missions;
