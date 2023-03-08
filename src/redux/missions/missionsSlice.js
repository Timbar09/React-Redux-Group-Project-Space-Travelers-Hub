import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { MISSIONS_URL } from '../../config';
import getData from '../../api';

const initialState = {
  missions: [],
  isLoading: true,
};

export const fetchMissions = createAsyncThunk('missions/fetchMissions', async () => {
  const response = await getData(MISSIONS_URL);
  return response;
});

export const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    joinMission: (state, action) => {
      const newState = { ...state };
      newState.missions = newState.missions.map((mission) => {
        if (mission.id === action.payload) {
          return { ...mission, reserved: true };
        }
        return mission;
      });
      return newState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMissions.pending, (state) => {
        const newState = { ...state };
        newState.isLoading = true;
        return newState;
      })
      .addCase(fetchMissions.fulfilled, (state, action) => {
        const newState = { ...state };
        newState.isLoading = false;
        newState.missions = action.payload;
        return newState;
      });
  },
});

export const { joinMission, leaveMission } = missionsSlice.actions;

export default missionsSlice.reducer;
