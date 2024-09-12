import { baseApi } from '../../api/baseApi';

const orderApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    createOrder: builder.mutation({
      query: ({ orderData, token }) => ({
        url: 'order/create-order',
        method: 'POST',
        body: orderData,
        headers: {
          Authorization: `${token}`,
        },
      }),
    }),
    getUserOrders: builder.query({
      query: token => ({
        url: 'order/my-orders',
        headers: {
          Authorization: `${token}`,
        },
      }),
    }),
  }),
});

export const { useCreateOrderMutation, useGetUserOrdersQuery } = orderApi;
