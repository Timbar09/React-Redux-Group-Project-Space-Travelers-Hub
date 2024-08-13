import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { MISSIONS_URL } from '../../config';
import getData from '../../api';

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

  // console.log(processedData);

  return processedData;
});

export const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    joinLeaveToggle: (state, { payload }) => {
      const newState = { ...state };
      newState.missions = newState.missions.map((mission) => {
        if (mission.id === payload) {
          return { ...mission, reserved: !mission.reserved };
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
      .addCase(fetchMissions.fulfilled, (state, { payload }) => {
        const newState = { ...state };
        newState.isLoading = false;
        newState.missions = payload;
        return newState;
      });
  },
});

export const { joinLeaveToggle } = missionsSlice.actions;

export default missionsSlice.reducer;
