import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { saveState, loadState } from '../../localStorage';
import { MISSIONS_URL } from '../../config';
import getData from '../../api';

const preloadedState = loadState();

const initialState = {
  missions: [],
  isLoading: true,
};

export const fetchMissions = createAsyncThunk('missions/fetchMissions', async () => {
  const response = await getData(MISSIONS_URL);

  const processedData = response.map((item) => ({
    id: item.mission_id,
    name: item.mission_name,
    description: item.description,
    reserved: false,
    wikipedia: item.wikipedia,
    twitter: item.twitter || 'https://x.com',
    website: item.website,
  }));

  return processedData;
});

export const missionsSlice = createSlice({
  name: 'missions',
  initialState: preloadedState || initialState,
  reducers: {
    joinLeaveToggle: (state, { payload }) => {
      const newState = { ...state };
      newState.missions = newState.missions.map((mission) => {
        if (mission.id === payload) {
          const updatedMission = { ...mission, reserved: !mission.reserved };
          return updatedMission;
        }
        return mission;
      });
      saveState({ missions: newState.missions });
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
      .addCase(fetchMissions.fulfilled, (state, { payload }) => {
        const newState = { ...state };
        newState.isLoading = false;
        newState.missions = payload;
        saveState({ missions: newState.missions });
        return newState;
      });
  },
});

export const { joinLeaveToggle } = missionsSlice.actions;

export default missionsSlice.reducer;
