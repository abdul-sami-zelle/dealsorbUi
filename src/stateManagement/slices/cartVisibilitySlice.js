// visibilitySlice.js
import { createSlice } from '@reduxjs/toolkit';

const visibilitySlice = createSlice({
  name: 'visibility',
  initialState: false, // Initial state is false (hidden)
  reducers: {
    toggleVisibility: (state) => !state,
  },
});

export const { toggleVisibility } = visibilitySlice.actions;
export default visibilitySlice.reducer;
