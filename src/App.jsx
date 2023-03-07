import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchMissions } from './redux/missions/missionsSlice';
import Missions from './routes/Missions/Missions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  return (
    <div>
      <Missions />
    </div>
  );
}

export default App;
