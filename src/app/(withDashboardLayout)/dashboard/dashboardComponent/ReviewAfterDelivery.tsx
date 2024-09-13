/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import {
  Modal,
  Button,
  Textarea,
  useDisclosure,
  ModalHeader,
  ModalBody,
  ModalContent,
} from '@nextui-org/react';
import { useCreateReviewMutation } from '@/redux/features/review/reviewApi';
import React, { useEffect, useState } from 'react';
import { toast } from 'sonner';

const ReviewAfterDelivery = ({ order }: any) => {
  const { userId, products, order_status, _id: orderId } = order;
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [reviewText, setReviewText] = useState('');
  const [ratings, setRatings] = useState<number>(5);
  const { isOpen, onOpen, onClose } = useDisclosure(); // useDisclosure handles modal state

  const [createReview, { isLoading, error }] = useCreateReviewMutation();

  const handleRating = (value: number) => {
    setRatings(value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      //   throw new Error('test error');

      const reviewData = {
        review: reviewText,
        ratings,
        userId: userId._id,
        orderId,
        productId: products[0].productId._id,
      };

      await createReview(reviewData).unwrap();
      toast.success('Review submitted successfully!');
      setReviewText('');
      setRatings(5);
      onClose(); // Close modal after successful submission
    } catch (error: any) {
      setErrorMessage(error?.data?.message || 'Failed to submit review.');
      toast.error('Failed to submit review.');
    }
  };

  return (
    <>
      {/* Trigger to open the modal */}
      <Button variant="ghost" color="primary" onPress={onOpen}>
        Give a Review
      </Button>

      {/* Modal for submitting the review */}
      <Modal isOpen={isOpen} onClose={onClose} isDismissable={false}>
        <ModalContent>
          <ModalHeader>
            <h2 className="text-xl font-semibold">Please Leave a Review</h2>
          </ModalHeader>

          <ModalBody>
            {errorMessage && <p className="text-red-600">{errorMessage}</p>}

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

              <div className="flex justify-between">
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button type="submit" disabled={isLoading} className="w-full">
                  {isLoading ? 'Submitting...' : 'Submit Review'}
                </Button>
              </div>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ReviewAfterDelivery;
