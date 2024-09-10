import { baseApi } from '../../api/baseApi';

const authApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    signup: builder.mutation({
      query: userCredentials => ({
        url: 'users/create-user',
        method: 'POST',
        body: userCredentials,
      }),
    }),
    login: builder.mutation({
      query: userCredentials => ({
        url: 'auth/login',
        method: 'POST',
        body: userCredentials,
      }),
    }),
  }),
});

export const { useSignupMutation, useLoginMutation } = authApi;
