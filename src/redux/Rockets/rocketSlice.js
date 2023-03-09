import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.spacexdata.com/v4/rockets';
// then((res) => res.json()).then((data) => console.log(data[0]));

export const getRockets = createAsyncThunk('Rockets/getRockets', async () => {
  try {
    const res = await axios(url);
    return res.data;
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
