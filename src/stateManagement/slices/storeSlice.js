// storeSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  stores: [], // This is where you'll store the list of stores
};

const storeSlice = createSlice({
  name: 'store',
  initialState,
  reducers: {
    setStores: (state, action) => {
      state.stores = action.payload;
    },
  },
});

export const { setStores } = storeSlice.actions;
export default storeSlice.reducer;
