import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import Image from "next/image";
import SliderBtns from "./SliderBtns";

const Slider = () => {
  return (
    <Swiper className="bg-white shadow-lg w-full max-w-[630px] h-[200px] ">
      <SwiperSlide>
        <div className="px-12 pl-[20px] md:pl-[60px] flex items-center gap-9 h-full">
          {/* Avatar image */}
          <div className="relative hidden xl:flex w-[90px] h-[90px]">
            <Image
              src={"/assets/img/testimonials/avatar.jpg"}
              fill
              className="object-cover"
              quality={100}
              alt=""
            />
          </div>
          {/* text */}
          <div className="flex-1 xl:max-w-[340px] flex flex-col gap-2">
            <p>
              Exceeded expectations. On time, within budget and top quality
              work. High recommend!
            </p>
            <p className="font-dmSans text-[#121315] font-semibold">Jane Doe</p>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="px-12 pl-[20px] md:pl-[60px] flex items-center gap-9 h-full">
          {/* Avatar image */}
          <div className="relative hidden xl:flex w-[90px] h-[90px]">
            <Image
              src={"/assets/img/testimonials/avatar.jpg"}
              fill
              className="object-cover"
              quality={100}
              alt=""
            />
          </div>
          {/* text */}
          <div className="flex-1 xl:max-w-[340px] flex flex-col gap-2">
            <p>
              Exceeded expectations. On time, within budget and top quality
              work. High recommend!
            </p>
            <p className="font-dmSans text-[#121315] font-semibold">Jane Doe</p>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="px-12 pl-[20px] md:pl-[60px] flex items-center gap-9 h-full">
          {/* Avatar image */}
          <div className="relative hidden xl:flex w-[90px] h-[90px]">
            <Image
              src={"/assets/img/testimonials/avatar.jpg"}
              fill
              className="object-cover"
              quality={100}
              alt=""
            />
          </div>
          {/* text */}
          <div className="flex-1 xl:max-w-[340px] flex flex-col gap-2">
            <p>
              Exceeded expectations. On time, within budget and top quality
              work. High recommend!
            </p>
            <p className="font-dmSans text-[#121315] font-semibold">Jane Doe</p>
          </div>
        </div>
      </SwiperSlide>

      {/* Swiper button */}
      <SliderBtns />
    </Swiper>
  );
};

export default Slider;
