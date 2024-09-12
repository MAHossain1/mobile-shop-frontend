'use client';

import { TMobile } from '@/components/types/mobile';
import MobileCard from '@/components/ui/MobileCard';
import { useGetAllMobileQuery } from '@/redux/features/mobiles/mobilesApi';
import { Spinner } from '@nextui-org/react';
const Featured = () => {
  const { data = { data: [] }, isLoading, isError } = useGetAllMobileQuery('');

  // Handle loading state
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner />
        <p>Loading...</p>
      </div>
    );
  }

  // Handle error state
  if (isError) {
    return (
      <div className="text-center text-red-600">
        <p>Something went wrong! Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-screen-xl px-2">
      <div className="my-20 space-y-10">
        <h1 className="text-5xl text-semibold text-center text-primary">
          Find Your Desire Phone
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {data?.data.length &&
            data?.data?.map((mobile: TMobile) => (
              <MobileCard {...mobile} key={mobile._id} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Featured;
