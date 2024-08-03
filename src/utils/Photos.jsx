"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import SwiperCore from 'swiper';
import Image from 'next/image';
import clsx from 'clsx';
import 'swiper/css';
import 'swiper/css/pagination';

// Importing All Photos
import image1 from '@/images/photos/image-1.jpg';
import image2 from '@/images/photos/image-2.jpg';
import image3 from '@/images/photos/image-3.jpg';
import image4 from '@/images/photos/image-4.jpg';
import image5 from '@/images/photos/image-5.jpg';

SwiperCore.use([Pagination, Autoplay]);

const images = [image1, image2, image3, image4, image5];

function Photos() {
  return (
    <div className="mt-16 sm:mt-20 w-72 md:w-1/2 mx-auto">
      <Swiper
        slidesPerView={1}
        spaceBetween={8}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 12,
          },
        }}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className={clsx(
                'relative aspect-[9/10] w-72 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800'
              )}
            >
              <Image
                src={image}
                alt=""
                sizes="(min-width: 640px) 18rem, 11rem"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Photos;
