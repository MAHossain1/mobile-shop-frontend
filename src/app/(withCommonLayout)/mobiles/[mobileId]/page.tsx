import MobileDetails from '@/components/ui/MobileDetails';
import React from 'react';

const MobileDetailsPage = async ({
  params,
}: {
  params: { mobileId: string };
}) => {
  const mobileId = params.mobileId;

  const res = await fetch(
    `https://mobile-shop-backend-seven.vercel.app/api/v1/mobile/${mobileId}`,
    {
      cache: 'no-store',
    }
  );

  const mobile = await res.json();

  //   console.log(mobile);

  return (
    <div>
      <MobileDetails mobile={mobile.data} />
    </div>
  );
};

export default MobileDetailsPage;
