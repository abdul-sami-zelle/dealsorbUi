import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bigImageSrc: '',
};

const imageSlice = createSlice({
  name: 'image',
  initialState,
  reducers: {
    setBigImage: (state, action) => {
      state.bigImageSrc = action.payload;
    },
  },
});

export const { setBigImage } = imageSlice.actions;

export default imageSlice.reducer;
