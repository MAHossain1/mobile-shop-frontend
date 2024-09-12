'use client';
import { TMobile } from '@/components/types/mobile';
import CartDetails from '@/components/ui/CartDetails';
import { useAppSelector } from '@/redux/hooks';
import React from 'react';

function CartPage() {
  const { mobiles } = useAppSelector(store => store.cart);
  // console.log(products);
  return (
    <div className="container mt-10 mx-auto">
      <div className="flex lg:flex-row flex-col-reverse justify-center lg:space-x-40 ">
        <div className="space-y-5 lg:mt-0 mt-5">
          {mobiles.length ? (
            mobiles.map((mobile: TMobile) => (
              <CartDetails key={mobile._id} mobile={mobile} />
            ))
          ) : (
            <p className="text-2xl text-red-500">No mobiles found</p>
          )}
        </div>
        {/* <OrderSummary /> */}
        {/* <CheckoutPage></CheckoutPage> */}
      </div>
    </div>
  );
}

export default CartPage;
