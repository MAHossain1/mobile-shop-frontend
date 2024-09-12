import { createSlice } from '@reduxjs/toolkit';

type TOrderItem = {
  id: string;
  name: string;
  image: string;
  quantity: number;
  price: number;
};

type TOrder = {
  products: TOrderItem[];
  totalAmount: number;
  paymentMethod: string;
  order_status: string;
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
