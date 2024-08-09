import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';

import Loader from '../components/Loader';
import MissionContent from '../components/Mission';

function Missions() {
  const { isLoading } = useSelector((state) => state.missions);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Container className="py-4">
      <MissionContent />
    </Container>
  );
}

export default Missions;
