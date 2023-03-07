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
  reducers: {},
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

// export const { } = missinsSlice.actions;

export default missionsSlice.reducer;
