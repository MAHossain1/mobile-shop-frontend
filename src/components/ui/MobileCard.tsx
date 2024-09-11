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

const MobileCard = (mobile: TMobile) => {
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
        <div>
          {/* <p className="text-tiny text-red/60 uppercase font-bold">New</p>
          <h4 className="text-primary font-medium text-2xl">{mobile.name}</h4> */}
          {/* <p className="text-black text-2xl">Price: ${mobile.price}</p>
          <p className="text-black text-tiny">Get notified.</p> */}
        </div>
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
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>

    // <Card isFooterBlurred className="py-4">
    //   <CardHeader className="absolute z-10 top-1 flex-col items-start"></CardHeader>
    //   <Image
    //     removeWrapper
    //     alt="Card example background"
    //     className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
    //     src={mobile.imgUrl}
    //   />
    //   <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
    //     <div>
    //       <p className="text-tiny text-red/60 uppercase font-bold">New</p>
    //       <h4 className="text-primary font-medium text-2xl">{mobile.name}</h4>
    //       <p className="text-black text-2xl">Price: ${mobile.price}</p>
    //       <p className="text-black text-tiny">Get notified.</p>
    //     </div>
    //     <Button className="text-tiny" color="primary" radius="lg" size="sm">
    //       View Details
    //     </Button>
    //     <Button
    //       className="text-tiny"
    //       variant="bordered"
    //       color="primary"
    //       radius="lg"
    //       size="sm"
    //     >
    //       Add to Cart
    //     </Button>
    //   </CardFooter>
    // </Card>
  );
};

export default MobileCard;
