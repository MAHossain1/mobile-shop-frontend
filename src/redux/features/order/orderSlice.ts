import { createSlice } from '@reduxjs/toolkit';

type TOrderItem = {
  id: string;
  name: string;
  image: string;
  quantity: number;
  price: number;
};

type TOrder = {
  user: {
    userId: string;
    userName: string;
    userEmail: string;
  };
  products: TOrderItem[];
  totalAmount: number;
  paymentMethod: string;
  status: string;
};

const initialState: TOrder[] = [];

export const orderSlice = createSlice({
  name: 'order',
  initialState,

  reducers: {
    createOrder: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { createOrder } = orderSlice.actions;
export default orderSlice.reducer;
