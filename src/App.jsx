import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Layout from './components/Layout';
import Home from './routes/Home';
import Rockets from './routes/Rockets';
import Missions from './routes/Missions';
import MyProfile from './routes/MyProfile';
import NotMatch from './routes/NotMatch';

import { fetchMissions } from './redux/missions/missionSlice';
import { getRockets } from './redux/rockets-temp/rocketSlice';

function App() {
  const dispatch = useDispatch();
  const { missionList } = useSelector((state) => state.missions);
  const { rocketList } = useSelector((state) => state.rockets);

  useEffect(() => {
    if (missionList.length === 0) {
      dispatch(fetchMissions());
    }

    if (rocketList.length === 0) {
      dispatch(getRockets());
    }
  }, [dispatch, missionList.length, rocketList.length]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/rockets" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="*" element={<NotMatch />} />
      </Route>
    </Routes>
  );
}

export default App;
