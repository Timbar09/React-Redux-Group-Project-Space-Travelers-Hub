import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { ROCKETS_URL } from '../../config';

export const getRockets = createAsyncThunk('Rockets/getRockets', async () => {
  try {
    const items = [];
    const res = await axios(ROCKETS_URL);
    res.data.map((item) => {
      items.push({
        id: item.id,
        name: item.name,
        description: item.description,
        images: item.flickr_images,
      });
      return items;
    });
    return items;
  } catch (error) {
    return error;
  }
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
