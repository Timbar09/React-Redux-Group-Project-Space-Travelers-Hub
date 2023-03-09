import { configureStore } from '@reduxjs/toolkit';
import missionsReducers from './missions/missionsSlice';
import rocketReducer from './Rockets/rocketSlice';

const store = configureStore({
  reducer: {
    missions: missionsReducers,
    Rockets: rocketReducer,
  },
});

export default store;
