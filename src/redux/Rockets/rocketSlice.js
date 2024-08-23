import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import getData from '../../api';
import { ROCKETS_URL } from '../../config';
import { saveState, loadState } from '../../localStorage';

const preloadedState = loadState('rockets');

const initialState = {
  rocketList: [],
  isLoading: true,
};

export const getRockets = createAsyncThunk('rockets/getRockets', async () => {
  const response = await getData(ROCKETS_URL);

  const processedData = response.map((item) => ({
    id: item.id,
    name: item.name,
    description: item.description,
    images: item.flickr_images,
    wikipedia: item.wikipedia,
    isReserved: false,
    reservedOn: null,
    boosters: item.boosters,
    diameter: item.diameter.meters,
    costPerLaunch: item.cost_per_launch,
    successRate: item.success_rate_pct,
  }));

  return processedData;
});

const rocketSlice = createSlice({
  name: 'rockets',
  initialState: preloadedState || initialState,
  reducers: {
    AddRemoveReservationToggle: (state, { payload }) => {
      const rocket = state.rocketList.find((rocket) => rocket.id === payload);
      if (rocket) {
        rocket.isReserved = !rocket.isReserved;
        rocket.reservedOn = rocket.isReserved
          ? new Date().toLocaleString()
          : null;
        saveState('rockets', { rocketList: state.rocketList });
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRockets.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getRockets.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.rocketList = payload;
        saveState('rockets', { rocketList: state.rocketList });
      })
      .addCase(getRockets.rejected, (state, { error }) => {
        state.isLoading = false;
        state.rocketList = [];
        saveState('rockets', { rocketList: state.rocketList });
        state.error = error.message;
      });
  },
});

export const { AddRemoveReservationToggle } = rocketSlice.actions;

export default rocketSlice.reducer;
