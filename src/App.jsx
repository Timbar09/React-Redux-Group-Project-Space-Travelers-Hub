import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Layout from './components/Layout';
import Missions from './routes/Missions';
import MyProfile from './routes/MyProfile';
import NotMatch from './routes/NotMatch';

import { fetchMissions } from './redux/missions/missionsSlice';
import { getRockets } from './redux/Rockets/rocketSlice';
import Rockets from './routes/Rockets';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getRockets());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Missions />} />
        <Route path="/rockets" element={<Rockets />} />
        <Route path="myprofile" element={<MyProfile />} />
        <Route path="*" element={<NotMatch />} />
      </Route>
    </Routes>
  );
}

export default App;
