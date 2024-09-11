'use client';

import { TMobile } from '@/components/types/mobile';
import MobileCard from '@/components/ui/MobileCard';
import { useGetAllMobileQuery } from '@/redux/features/mobiles/mobilesApi';
import { Button } from '@nextui-org/react';
import React from 'react';

const Featured = () => {
  const { data = { data: [] }, isLoading, isError } = useGetAllMobileQuery('');

  //   console.log(data.data.length);

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
