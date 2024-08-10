import { useSelector } from 'react-redux';

import Loader from '../components/Loader';
import MissionContent from '../components/Mission';

function Missions() {
  const { isLoading } = useSelector((state) => state.missions);

  if (isLoading) {
    return <Loader />;
  }

  return <MissionContent />;
}

export default Missions;
