// successPopup.js
import { createSlice } from '@reduxjs/toolkit';

const successPopup = createSlice({
  name: 'successPopUp',
  initialState: {
    isLoading: false,
  },
  reducers: {
    setSuccessPopUpTrue: (state) => {
      state.isLoading = true;
      console.log(` its true ${state.isLoading}`)
    },
    setSuccessPopUpFalse: (state) => {
      state.isLoading = false;
      console.log(` its false ${state.isLoading}`)
    },
  },
});

export const { setSuccessPopUpTrue, setSuccessPopUpFalse} = successPopup.actions;
export const showSuccessLoaderState = (state) => state.successPopUp.isLoading;


export default successPopup.reducer;
