import { createSlice } from '@reduxjs/toolkit';

const hoverSlice = createSlice({
  name: 'hover',
  initialState: {
    hoveredWidget: null,
  },
  reducers: {
    setHoveredWidget: (state, action) => {
      state.hoveredWidget = action.payload;
    },
    resetHoveredWidget: (state) => {
      state.hoveredWidget = null;
    },
  },
});

export const { setHoveredWidget, resetHoveredWidget } = hoverSlice.actions;
export const selectHoveredWidget = (state) => state.hover.hoveredWidget;
export default hoverSlice.reducer;
