import { useSelector } from 'react-redux';

import Loader from '../components/Loader';
import RocketContent from '../components/Rocket';

function Rockets() {
  const { isLoading } = useSelector((state) => state.rockets);

  if (isLoading) {
    return <Loader />;
  }

  return <RocketContent />;
}

export default Rockets;
