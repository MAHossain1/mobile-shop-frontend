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
    getAllOrder: builder.query({
      query: token => ({
        url: 'order/all-orders',
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
    updateOrder: builder.mutation({
      query: ({ status, token, orderId }) => {
        // console.log(orderId, status, token, 'from redux api');

        return {
          method: 'PATCH',
          url: `/order/${orderId}`, // API endpoint with dynamic orderId
          body: { status }, // Send status as request body
          headers: {
            Authorization: `${token}`, // Ensure token is valid
            'Content-Type': 'application/json',
          },
        };
      },
      invalidatesTags: ['order'],
    }),
  }),
});

export const {
  useCreateOrderMutation,
  useGetAllOrderQuery,
  useGetUserOrdersQuery,
  useUpdateOrderMutation,
} = orderApi;
