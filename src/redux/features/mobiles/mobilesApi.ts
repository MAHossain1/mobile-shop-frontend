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
  }),
});

export const { useGetAllMobileQuery, useCreateMobileMutation } = authApi;
