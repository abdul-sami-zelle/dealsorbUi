// loadingSlice.js
import { createSlice } from '@reduxjs/toolkit';

const loadingSlice = createSlice({
  name: 'loading',
  initialState: {
    isLoading: false,
    couponData: {},
  },
  reducers: {
    setLoadingTrue: (state) => {
      state.isLoading = true;
      console.log(` its true ${state.isLoading}`)
    },
    setLoadingFalse: (state) => {
      state.isLoading = false;
      console.log(` its false ${state.isLoading}`)
    },
    setCouponData: (state, action) => {
      state.couponData = action.payload;
      console.log(` its data ${state.couponData.name}`)
    },
  },
});

export const { setLoadingTrue, setLoadingFalse, setCouponData } = loadingSlice.actions;
export const selectLoadingState = (state) => state.loading.isLoading;
export const getCouponData = (state) => state.loading.couponData; 

export default loadingSlice.reducer;
