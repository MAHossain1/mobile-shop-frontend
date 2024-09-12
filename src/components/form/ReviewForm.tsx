import { selectUser } from '@/redux/features/auth/authSlice';
import { useCreateReviewMutation } from '@/redux/features/review/reviewApi';
import { Textarea } from '@nextui-org/react';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { toast } from 'sonner';

interface ReviewFormProps {
  mobileId: string;
}

const ReviewForm: React.FC<ReviewFormProps> = ({ mobileId }) => {
  const [reviewText, setReviewText] = useState('');
  const [ratings, setRatings] = useState<number>(5);
  const user = useSelector(selectUser);

  const [createReview, { isLoading }] = useCreateReviewMutation();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const handleRating = (value: number) => {
    setRatings(value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!user) {
      alert('You must be logged in to submit a review.');
      return;
    }

    try {
      const reviewData = {
        review: reviewText,
        ratings,
        userEmail: user.userEmail,
        productId: mobileId,
      };

      await createReview(reviewData).unwrap();
      toast.success('Review submitted successfully!');

      setReviewText('');
      setRatings(5);
    } catch (error) {
      //   console.error('Failed to submit review:', error);
      toast.error('Failed to submit review.');
    }
  };

  return (
    <div className="my-6 flex flex-col items-center mx-auto max-w-md">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Please Leave a Review
      </h2>
      <form onSubmit={handleSubmit} className="w-full">
        <div className="mb-4">
          <Textarea
            label="Description"
            placeholder="Enter your description"
            color="primary"
            className="w-full"
            value={reviewText}
            onChange={e => setReviewText(e.target.value)}
          />
        </div>

        <div className="flex justify-center items-center mb-4">
          <span className="font-semibold mr-2">Ratings</span>
          {[1, 2, 3, 4, 5].map(star => (
            <span
              key={star}
              className={`cursor-pointer text-2xl ${
                ratings >= star ? 'text-yellow-500' : 'text-gray-300'
              }`}
              onClick={() => handleRating(star)}
            >
              ★
            </span>
          ))}
        </div>

        <div className="flex justify-center">
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded"
            type="submit"
          >
            Submit Review
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
