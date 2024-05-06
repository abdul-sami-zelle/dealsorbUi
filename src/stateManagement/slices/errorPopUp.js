// errorPopup.js
import { createSlice } from '@reduxjs/toolkit';

const errorPopup = createSlice({
  name: 'errorPopUp',
  initialState: {
    isLoading: false,
  },
  reducers: {
    setErrorPopupTrue: (state) => {
      state.isLoading = true;
      console.log(` its true ${state.isLoading}`)
    },
    setErrorPopupFalse: (state) => {
      state.isLoading = false;
      console.log(` its false ${state.isLoading}`)
    },
  },
});

export const { setErrorPopupTrue, setErrorPopupFalse} = errorPopup.actions;
export const showErrorLoaderState = (state) => state.errorPopUp.isLoading;


export default errorPopup.reducer;
