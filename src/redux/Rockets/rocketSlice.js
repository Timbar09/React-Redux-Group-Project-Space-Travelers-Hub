import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import getData from '../../api';
import { ROCKETS_URL } from '../../config';

export const getRockets = createAsyncThunk('Rockets/getRockets', async () => {
  const items = [];
  const res = await getData(ROCKETS_URL);
  res.map((item) => {
    items.push({
      id: item.id,
      name: item.name,
      description: item.description,
      images: item.flickr_images,
      wikipedia: item.wikipedia,
    });
    return items;
  });
  return items;
});

const initialState = {
  rocketList: [],
};

const rocketSlice = createSlice({
  name: 'Rockets',
  initialState,
  isLoading: true,
  reducers: {
    addReservation: (state, { payload }) => {
      const newState = { ...state };
      newState.rocketList = newState.rocketList.map((rocket) => {
        if (rocket.id === payload) {
          return { ...rocket, isReserved: true };
        }
        return rocket;
      });
      return newState;
    },
    remReservation: (state, { payload }) => {
      const newState = { ...state };
      newState.rocketList = newState.rocketList.map((rocket) => {
        if (rocket.id === payload) {
          return { ...rocket, isReserved: false };
        }
        return rocket;
      });
      return newState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRockets.pending, (state) => {
        const newState = { ...state };
        newState.isLoading = true;
        return newState;
      })
      .addCase(getRockets.fulfilled, (state, action) => {
        const newState = { ...state };
        newState.isLoading = false;
        newState.rocketList = action.payload;
        return newState;
      })
      .addCase(getRockets.rejected, (state) => {
        const newState = { ...state };
        newState.isLoading = false;
        return newState;
      });
  },
});

export const { addReservation, remReservation } = rocketSlice.actions;
export default rocketSlice.reducer;
