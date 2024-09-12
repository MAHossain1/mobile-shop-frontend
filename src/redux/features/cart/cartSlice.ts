/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mobiles: [] as any,
  selectedItems: 0,
  totalPrice: 0,
  tax: 0.0,
  grandTotal: 0,
  taxRate: 0.05,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const previousMobile = state.mobiles.find(
        (mobile: any) => mobile._id === action.payload._id
      );

      if (previousMobile) {
        previousMobile.quantity += 1;
      } else {
        state.mobiles.push({ ...action.payload, quantity: 1 });
      }

      state.selectedItems = selectSelectedItems(state);
      state.totalPrice = selectTotalPrice(state);
      state.tax = selectTax(state);
      state.grandTotal = selectGrandTotal(state);
    },

    updateQuantity: (state, action) => {
      const mobile = state.mobiles.find(
        (mobile: any) => mobile._id === action.payload.id
      );

      // console.log(action.payload._id);

      if (mobile) {
        if (action.payload.type === 'increment') {
          mobile.quantity += 1;
        } else if (action.payload.type === 'decrement' && mobile.quantity > 1) {
          mobile.quantity -= 1;
        }
      }

      state.mobiles = state.mobiles.filter(
        (mobile: any) => mobile.quantity > 0
      );

      state.selectedItems = selectSelectedItems(state);
      state.totalPrice = selectTotalPrice(state);

      // console.log(state.totalPrice, 'from cart');
      state.tax = selectTax(state);
      // console.log(state.tax, 'order summary');
      state.grandTotal = selectGrandTotal(state);
    },

    removeMobile: (state, action) => {
      state.mobiles = state.mobiles.filter(
        (mobile: { _id: any }) => mobile._id !== action.payload.id
      );

      state.selectedItems = selectSelectedItems(state);
      state.totalPrice = selectTotalPrice(state);
      state.tax = selectTax(state);
      state.grandTotal = selectGrandTotal(state);
    },

    clearCart: state => {
      state.mobiles = [];
      state.selectedItems = 0;
      state.totalPrice = 0;
      state.tax = 0;
      state.grandTotal = 0;
    },
  },
});

export const selectSelectedItems = (state: any) =>
  state.mobiles.reduce((total: number, mobile: any) => {
    return Number(total + mobile.quantity);
  }, 0);

export const selectTotalPrice = (state: any) =>
  state.mobiles.reduce((total: number, mobile: any) => {
    return Number(total + mobile.quantity * mobile.price);
  }, 0);

export const selectTax = (state: any) =>
  selectTotalPrice(state) * state.taxRate;

export const selectGrandTotal = (state: any) => {
  return selectTotalPrice(state) + selectTotalPrice(state) * state.taxRate;
};

export const { addToCart, updateQuantity, removeMobile, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
