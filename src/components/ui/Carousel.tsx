'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

interface Slide {
  imgSrc: string;
  imgAlt: string;
  title: string;
  description: string;
}

const Carousel: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [autoplayInterval, setAutoplayInterval] =
    useState<NodeJS.Timeout | null>(null);

  const slides: Slide[] = [
    {
      imgSrc:
        'https://in-exstatic-vivofs.vivo.com/gdHFRinHEMrj3yPG/1711104354021/f91329d65e0c0558e4b1964cc5d080dd.jpg',
      // 'https://penguinui.s3.amazonaws.com/component-assets/carousel/default-slide-1.webp',
      imgAlt: 'vivo phone',
      title: 'Powerful Mobile Devices',
      description:
        'For those who demand more than just a phone, these devices are ready to power your next adventure.',
    },
    {
      imgSrc:
        'https://www.cnet.com/a/img/resize/f8429866cb8c0e538fc0f67519d91297074da6e3/hub/2022/09/07/db442b8b-9da2-422d-9b80-5550401cbfcd/apple-event-090722-iphone-14-pro-14-pro-max-7244.jpg?auto=webp&fit=crop&height=675&width=1200',

      imgAlt: 'apple phone',
      title: 'Latest Smartphones',
      description:
        'Not all heroes wear capes; some carry the latest tech in their pockets, ready to conquer the digital world.',
    },
    {
      imgSrc:
        'https://www.reliancedigital.in/wp-content/uploads/2023/07/Oppo_Reno_10_5g_Cover.jpg',
      imgAlt: 'Oppo Phone.',
      title: 'Smartphone Innovators',
      description:
        "Stay ahead with cutting-edge mobile tech, designed for those who push the boundaries of what's possible.",
    },
  ];

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentSlideIndex(prev => (prev < slides.length ? prev + 1 : 1));
      }, 4000);
      setAutoplayInterval(interval);

      return () => {
        if (interval) clearInterval(interval);
      };
    }
  }, [isPaused]);

  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Slides */}
      <div className="relative min-h-[70svh] w-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlideIndex === index + 1 ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Title and Description */}
            <div className="lg:px-32 lg:py-14 absolute inset-0 z-10 flex flex-col items-center justify-end gap-2 bg-gradient-to-t from-neutral-950/85 to-transparent px-16 py-12 text-center">
              <h3 className="w-full lg:w-[80%] text-balance text-2xl lg:text-3xl font-bold text-white">
                {slide.title}
              </h3>
              <p className="lg:w-1/2 w-full text-pretty text-sm text-neutral-300">
                {slide.description}
              </p>
            </div>

            <Image
              src={slide.imgSrc}
              alt={slide.imgAlt}
              layout="fill"
              objectFit="cover"
              quality={100}
              sizes="100vw"
            />
          </div>
        ))}
      </div>

      {/* Pause/Play Button */}
      <button
        type="button"
        className="absolute bottom-5 right-5 z-20 rounded-full text-neutral-300 opacity-50 transition hover:opacity-80 focus-visible:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:outline-offset-0"
        aria-label={isPaused ? 'play carousel' : 'pause carousel'}
        onClick={togglePause}
      >
        {isPaused ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="size-7"
          >
            <path
              fillRule="evenodd"
              d="M2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm6.39-2.908a.75.75 0 0 1 .766.027l3.5 2.25a.75.75 0 0 1 0 1.262l-3.5 2.25A.75.75 0 0 1 8 12.25v-4.5a.75.75 0 0 1 .39-.658Z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="size-7"
          >
            <path
              fillRule="evenodd"
              d="M2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm5-2.25A.75.75 0 0 1 7.75 7h.5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-.75.75h-.5a.75.75 0 0 1-.75-.75v-4.5Zm4 0a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-.75.75h-.5a.75.75 0 0 1-.75-.75v-4.5Z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </button>

      {/* Indicators */}
      <div
        className="absolute rounded-md bottom-3 md:bottom-5 left-1/2 z-20 flex -translate-x-1/2 gap-4 md:gap-3 px-1.5 py-1 md:px-2"
        role="group"
        aria-label="slides"
      >
        {slides.map((_, index) => (
          <button
            key={index}
            className={`size-2 cursor-pointer rounded-full transition ${
              currentSlideIndex === index + 1
                ? 'bg-neutral-300'
                : 'bg-neutral-300/50'
            }`}
            onClick={() => setCurrentSlideIndex(index + 1)}
            aria-label={`slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
