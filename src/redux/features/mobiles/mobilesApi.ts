import { baseApi } from '../../api/baseApi';

const authApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getAllMobile: builder.query({
      query: () => ({
        url: '/mobile',
      }),
      providesTags: ['mobile'],
    }),
    createMobile: builder.mutation({
      query: ({ mobileData, token }) => ({
        url: 'mobile/add-product',
        method: 'POST',
        body: mobileData,
        headers: {
          Authorization: `${token}`,
        },
      }),
    }),
    deleteMobile: builder.mutation({
      query: ({ mobileId, token }) => ({
        method: 'DELETE',
        url: `mobile/${mobileId}`,
        headers: {
          Authorization: `${token}`,
        },
      }),
      invalidatesTags: ['mobile'],
    }),
  }),
});

export const {
  useGetAllMobileQuery,
  useCreateMobileMutation,
  useDeleteMobileMutation,
} = authApi;
