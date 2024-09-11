'use client';

import { useGetAllMobileQuery } from '@/redux/features/mobiles/mobilesApi';
import { Button } from '@nextui-org/react';
import React from 'react';
import MobileCard from './MobileCard';
import { TMobile } from '../types/mobile';

const Featured = () => {
  const { data = { data: [] }, isLoading, isError } = useGetAllMobileQuery('');

  console.log(data.data.length);

  return (
    <div className="mx-auto w-full max-w-screen-xl px-2">
      <div className="my-20 space-y-10">
        <div className="mx-10 flex justify-between items-center">
          <h1 className="text-4xl font-semibold">Flash SALE</h1>
          <Button size="lg" color="primary" variant="ghost">
            VIEW ALL MOBILES
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {data?.data.length &&
            data?.data
              .slice(-6)
              ?.map((mobile: TMobile) => (
                <MobileCard {...mobile} key={mobile._id} />
              ))}
        </div>
      </div>
    </div>
  );
};

export default Featured;
