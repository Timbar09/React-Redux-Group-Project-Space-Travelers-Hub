import { configureStore } from '@reduxjs/toolkit';
import missionsReducers from './missions/missionsSlice';

const store = configureStore({
  reducer: {
    missions: missionsReducers,
  },
});

export default store;
