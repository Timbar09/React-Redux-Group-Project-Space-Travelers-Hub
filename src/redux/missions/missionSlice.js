import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { MISSIONS_URL } from '../../config';
import getData from '../../api';
import { saveState, loadState } from '../../localStorage';

const preloadedState = loadState('missions');

const initialState = {
  missionList: [],
  isLoading: true,
};

export const fetchMissions = createAsyncThunk(
  'missions/fetchMissions',
  async () => {
    const response = await getData(MISSIONS_URL);

    const processedData = response.map((item) => ({
      id: item.mission_id,
      name: item.mission_name,
      description: item.description,
      isReserved: false,
      reservedOn: null,
      wikipedia: item.wikipedia,
      twitter: item.twitter || 'https://x.com',
      website: item.website,
    }));

    return processedData;
  },
);

export const missionsSlice = createSlice({
  name: 'missions',
  initialState: preloadedState || initialState,
  reducers: {
    joinLeaveMissionToggle: (state, { payload }) => {
      const mission = state.missionList.find(
        (mission) => mission.id === payload,
      );
      if (mission) {
        mission.isReserved = !mission.isReserved;
        mission.reservedOn = mission.isReserved
          ? new Date().toLocaleString()
          : null;
        saveState('missions', { missionList: state.missionList });
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMissions.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchMissions.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.missionList = payload;
        saveState('missions', { missionList: state.missionList });
      })
      .addCase(fetchMissions.rejected, (state, { error }) => {
        state.isLoading = false;
        state.missionList = [];
        saveState('missions', { missionList: state.missionList });
        state.error = error.message;
        // TODO: Handle error with an error page
      });
  },
});

export const { joinLeaveMissionToggle } = missionsSlice.actions;

export default missionsSlice.reducer;
