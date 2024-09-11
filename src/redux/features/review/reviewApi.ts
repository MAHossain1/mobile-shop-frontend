import { baseApi } from '../../api/baseApi';

const reviewApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getReviewsByProductId: builder.query({
      query: (productId: string) => ({
        url: `/ratings/${productId}`,
      }),
      providesTags: (result, error, productId) => [
        { type: 'review', id: productId },
      ],
    }),
    createReview: builder.mutation({
      query: reviewData => ({
        url: 'ratings/create-rating',
        method: 'POST',
        body: reviewData,
      }),
      invalidatesTags: ['review'],
    }),
  }),
});

export const { useGetReviewsByProductIdQuery, useCreateReviewMutation } =
  reviewApi;
