import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Layout from './components/Layout';
import Missions from './routes/Missions';
import MyProfile from './routes/MyProfile';
import NotMatch from './routes/NotMatch';

import { fetchMissions } from './redux/missions/missionSlice';
import { getRockets } from './redux/rockets/rocketSlice';
import Rockets from './routes/Rockets';

function App() {
  const dispatch = useDispatch();
  const { missionList } = useSelector((state) => state.missions);

  useEffect(() => {
    if (missionList.length === 0) {
      dispatch(fetchMissions());
    }
  }, [dispatch, missionList]);

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
