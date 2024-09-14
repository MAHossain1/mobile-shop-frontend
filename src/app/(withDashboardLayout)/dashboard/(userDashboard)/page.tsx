/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { selectToken } from '@/redux/features/auth/authSlice';
import { useGetUserOrdersQuery } from '@/redux/features/order/orderApi';
import { useAppSelector } from '@/redux/hooks';
import React from 'react';
import OrderCard from '../dashboardComponent/OrderCard';
import { Button } from '@nextui-org/react';

const MyDashboardPage = () => {
  const token = useAppSelector(selectToken);
  const { data: myOrders } = useGetUserOrdersQuery(token);

  // console.log(myOrders);

  return (
    <div>
      <h1 className="text-2xl font-semibold mt-8 text-center">My Orders</h1>

      {myOrders?.data?.length > 0 ? (
        myOrders?.data?.map((order: any) => (
          <OrderCard key={order._id} order={order} />
        ))
      ) : (
        <div className="flex justify-center items-center">
          <p className=" text-gray-600 mt-4">You have no orders yet.</p>
          <Button href="/">Go Shop</Button>
        </div>
      )}
    </div>
  );
};

export default MyDashboardPage;
