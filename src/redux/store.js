import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from './missions/missionSlice';
import rocketReducer from './rockets-temp/rocketSlice';

const store = configureStore({
  reducer: {
    missions: missionsReducer,
    rockets: rocketReducer,
  },
});

export default store;
