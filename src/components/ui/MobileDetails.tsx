/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
'use client';

import React from 'react';
import { useDispatch } from 'react-redux';
import { TMobile } from '../types/mobile';
import Image from 'next/image';
import { List, ListCheck } from 'lucide-react';
import { Checkbox } from '@nextui-org/react';
import ReviewForm from '../form/ReviewForm';
import { useGetReviewsByProductIdQuery } from '@/redux/features/review/reviewApi';

interface ProductDetailProps {
  mobile: TMobile;
}

const MobileDetails: React.FC<ProductDetailProps> = ({ mobile }) => {
  const dispatch = useDispatch();
  // console.log(mobile, 'from details component');

  const { data: reviews } = useGetReviewsByProductIdQuery(mobile._id);
  console.log(reviews);

  //   // console.log(reviews?.data);
  //   const onAddToCart = () => {
  //     dispatch(addToCart(product));
  //   };

  return (
    <div>
      <div className="container mx-auto p-6">
        <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden">
          <Image
            src={mobile?.imgUrl}
            alt={mobile?.name}
            className="w-full md:w-1/2 h-auto object-cover"
            width={500}
            height={300}
          />
          <div className="w-full md:w-1/2 p-6">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              {mobile?.name}
            </h1>
            <p className="text-gray-600 text-lg mb-4">{mobile?.description}</p>
            <p className="text-xl font-semibold text-blue-600 mb-4">
              ${mobile?.price.toFixed(2)}
            </p>
            <div className="text-sm text-gray-700 mb-4">
              <p>
                <span className="font-bold">Ratings:</span>{' '}
                <span className="font-semibold">{mobile?.ratings}</span>
              </p>
              <p>
                <span className="font-bold">Brand:</span>{' '}
                <span className="font-semibold">{mobile?.brand}</span>
              </p>

              <p>
                <span className="font-bold">Features:</span>
                {mobile?.features?.map((item, index) => (
                  <ul key={index}>
                    <Checkbox defaultSelected size="sm" color="success">
                      {item}
                    </Checkbox>
                  </ul>
                ))}
              </p>
            </div>
            <button
              //   onClick={onAddToCart}
              className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Add to Cart
            </button>
          </div>
        </div>

        {/* Review Section */}
        <div className="my-10">
          <h2 className="text-2xl font-semibold mb-4">
            What Says People About this Phone
          </h2>

          <div className="space-y-4">
            {reviews?.data?.length > 0 ? (
              reviews?.data?.map((review: any, index: any) => (
                <div key={index} className="bg-gray-100 p-4 rounded">
                  <p className="text-lg">{review.review}</p>
                  <p className="text-sm text-gray-600">
                    Rating: {review.ratings} Stars
                  </p>
                </div>
              ))
            ) : (
              <p>No reviews yet for this product.</p>
            )}
          </div>
          <ReviewForm mobileId={mobile._id} />
        </div>
      </div>
    </div>
  );
};

export default MobileDetails;
