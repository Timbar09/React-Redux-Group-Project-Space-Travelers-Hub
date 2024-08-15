import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Layout from './components/Layout';
import Missions from './routes/Missions';
import MyProfile from './routes/MyProfile';
import NotMatch from './routes/NotMatch';

import { fetchMissions } from './redux/missions/missionsSlice';
import { getRockets } from './redux/Rockets/rocketSlice';
import Rockets from './routes/Rockets';

function App() {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions.missions);

  useEffect(() => {
    if (missions.length === 0) {
      dispatch(fetchMissions());
    }
  }, [dispatch, missions]);

  useEffect(() => {
    dispatch(getRockets());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="my-profile" element={<MyProfile />} />
        <Route path="*" element={<NotMatch />} />
      </Route>
    </Routes>
  );
}

export default App;
