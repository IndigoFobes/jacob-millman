"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import { Headshots } from "../resume/page";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

interface Props {
  headshots: Headshots[];
}

export default function ImageSlideshow(props: Props) {
  const { headshots } = props;
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  //   const [index, setIndex] = useState(1);
  //   const handleSelect = (selectedIndex, e) => {
  //     setIndex(selectedIndex);

  return (
    <>
      <div className="w-full sm:w-4/5 h-full flex flex-col overflow-hidden">
        {/* main photo */}
        <Swiper
          loop={true}
          spaceBetween={10}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          modules={[FreeMode, Navigation, Thumbs]}
          className={`gap-10 h-full w-full flex`}
        >
          {Object.keys(headshots).map(function (photoIndex) {
            var headshot = headshots[photoIndex];

            return (
              <SwiperSlide key={headshot.id}>
                <div className="main-headshot flex sm:h-full w-full items-center justify-center relative">
                  <Image
                    src={headshot.src}
                    alt={headshot.alt}
                    fill
                    className="block h-1/2 w-1/2 object-cover"
                  ></Image>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        {/* Thumbnail */}
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={12}
          slidesPerView={6}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="thumbs mt-3  w-full flex flex-wrap justify-between thumb-swiper"
        >
          {Object.keys(headshots).map(function (photoIndex) {
            var headshot = headshots[photoIndex];
            return (
              <SwiperSlide key={headshot.id} className="custom-slide">
                <button className="flex h-full w-full items-center justify-center relative">
                  <Image
                    src={headshot.src}
                    alt={headshot.alt}
                    fill
                    className="block w-full h-full object-cover"
                  ></Image>
                </button>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}
