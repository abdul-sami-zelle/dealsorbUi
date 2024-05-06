// displayPopupCouponSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // your initial state here
  isOpen: false,
  couponCode: null,
};

const displayPopupCouponSlice = createSlice({
  name: 'displayPopupCoupon',
  initialState,
  reducers: {
    setDisplayPopupCoupon: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setDisplayPopupCoupon } = displayPopupCouponSlice.actions;
export default displayPopupCouponSlice.reducer;
