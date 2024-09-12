import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  Button,
  CardFooter,
} from '@nextui-org/react';
import { TMobile } from '../types/mobile';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/redux/features/cart/cartSlice';
import { toast } from 'sonner';

const MobileCard = (mobile: TMobile) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(mobile));
    toast.success('Your just added this product to cart.');
  };

  return (
    <Card className="py-4">
      <CardBody className="overflow-visible py-2">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
          <p className="text-tiny uppercase font-bold">{mobile.name}</p>
          <small className="text-default-500">${mobile.price}</small>
          <h4 className="font-bold text-large">{mobile.brand}</h4>
        </CardHeader>
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={mobile.imgUrl}
          width={270}
        />
      </CardBody>

      <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-center">
        <Button
          className="text-tiny mr-10"
          color="primary"
          radius="lg"
          size="sm"
        >
          <Link href={`/mobiles/${mobile._id}`}>View Details</Link>
        </Button>
        <Button
          className="text-tiny"
          variant="bordered"
          color="primary"
          radius="lg"
          size="sm"
          onClick={handleAddToCart}
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default MobileCard;
