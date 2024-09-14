'use client';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';

function BrandSlider() {
  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: 'linear',
  };
  return (
    <div className="slider-container mt-10">
      <h1 className="text-4xl text-center text-blue-500 my-10">Our BRANDS</h1>
      <div className="lg:mx-20">
        <Slider {...settings}>
          <div>
            <Image
              src="https://i.ibb.co.com/t4cBJNz/pngegg.png"
              alt="phone-logo"
              height="100"
              width="100"
            />
          </div>
          <div>
            <Image
              src="https://i.ibb.co.com/xfKY3fq/pngegg-1.png"
              alt="phone-logo"
              height="100"
              width="100"
            />
          </div>
          <div>
            <Image
              src="https://i.ibb.co.com/277TJGp/pngegg-2.png"
              alt="phone-logo"
              height="100"
              width="100"
            />
          </div>
          <div>
            <Image
              src="https://i.ibb.co.com/sywpF64/pngegg-3.png"
              alt="phone-logo"
              height="100"
              width="100"
            />
          </div>
          <div>
            <Image
              src="https://i.ibb.co.com/0cTcd7q/pngegg-11.png"
              alt="phone-logo"
              height="100"
              width="100"
            />
          </div>
          <div>
            <Image
              src="https://i.ibb.co.com/7GD6pYq/pngegg-5.png"
              alt="phone-logo"
              height="100"
              width="100"
            />
          </div>
          <div>
            <Image
              src="https://i.ibb.co.com/dGH36p0/pngegg-8.png"
              alt="phone-logo"
              height="100"
              width="100"
            />
          </div>
          <div>
            <Image
              src="https://i.ibb.co.com/9nkbpM5/pngegg-7.png"
              alt="phone-logo"
              height="100"
              width="100"
            />
          </div>
          <div>
            <Image
              src="https://i.ibb.co.com/tQxT8Nr/pngegg-9.png"
              alt="phone-logo"
              height="100"
              width="100"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default BrandSlider;
