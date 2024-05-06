// showLoader.js
import { createSlice } from '@reduxjs/toolkit';

const showLoader = createSlice({
  name: 'loader',
  initialState: {
    isLoading: false,
  },
  reducers: {
    setLoaderTrue: (state) => {
      state.isLoading = true;
      console.log(` its true ${state.isLoading}`)
    },
    setLoaderFalse: (state) => {
      state.isLoading = false;
      console.log(` its false ${state.isLoading}`)
    },
  },
});

export const { setLoaderTrue, setLoaderFalse} = showLoader.actions;
export const selectLoaderState = (state) => state.loader.isLoading;


export default showLoader.reducer;
