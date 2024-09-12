'use client';
import { TMobile } from '@/components/types/mobile';
import CartDetails from '@/components/ui/CartDetails';
import OrderSummary from '@/components/ui/OrderSummary';
import { useAppSelector } from '@/redux/hooks';
import { Button } from '@nextui-org/react';
import Link from 'next/link';
import React from 'react';

function CartPage() {
  const { mobiles } = useAppSelector(store => store.cart);
  // console.log(products);
  return (
    <div className="container mt-10 mx-auto">
      <div className="flex lg:flex-row flex-col justify-center lg:space-x-40">
        <div className="space-y-5 lg:mt-0 mt-5">
          {mobiles.length ? (
            mobiles.map((mobile: TMobile) => (
              <CartDetails key={mobile._id} mobile={mobile} />
            ))
          ) : (
            <>
              <p className="text-2xl text-primary">
                Please Add Your Choose Mobile!
              </p>
              <Button color="primary" variant="ghost">
                <Link href="/">Go Shop </Link>
              </Button>
            </>
          )}
        </div>
        <OrderSummary />
      </div>
    </div>
  );
}

export default CartPage;
