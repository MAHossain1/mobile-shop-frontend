import { baseApi } from '../../api/baseApi';

const authApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getAllMobile: builder.query({
      query: () => ({
        url: '/mobile',
      }),
      providesTags: ['mobile'],
    }),
    // login: builder.mutation({
    //   query: userCredentials => ({
    //     url: 'auth/login',
    //     method: 'POST',
    //     body: userCredentials,
    //   }),
    // }),
  }),
});

export const { useGetAllMobileQuery } = authApi;
