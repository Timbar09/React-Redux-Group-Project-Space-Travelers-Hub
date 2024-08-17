import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import getData from '../../api';
import { ROCKETS_URL } from '../../config';

export const getRockets = createAsyncThunk('rockets/getRockets', async () => {
  const response = await getData(ROCKETS_URL);

  const processedData = response.map((item) => ({
    id: item.id,
    name: item.name,
    description: item.description,
    images: item.flickr_images,
    wikipedia: item.wikipedia,
    isReserved: false,
  }));

  return processedData;
});

const initialState = {
  rocketList: [],
};

const rocketSlice = createSlice({
  name: 'rockets',
  initialState,
  isLoading: true,
  reducers: {
    AddRemoveReservationToggle: (state, { payload }) => {
      const rocket = state.rocketList.find((rocket) => rocket.id === payload);
      if (rocket) {
        rocket.isReserved = !rocket.isReserved;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRockets.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getRockets.fulfilled, (state, action) => {
        state.isLoading = false;
        state.rocketList = action.payload;
      })
      .addCase(getRockets.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { AddRemoveReservationToggle } = rocketSlice.actions;

export default rocketSlice.reducer;
