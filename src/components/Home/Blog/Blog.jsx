import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
export default function Blog() {
  return (
    <div>
      <div className="relative flex-1 overflow-hidden">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={10}
          slidesPerView={4}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },
            576: { slidesPerView: 2, spaceBetween: 15 },
            992: { slidesPerView: 3, spaceBetween: 20 },
            1200: { slidesPerView: 4, spaceBetween: 20 },
          }}
          className="w-full"
        >
          <SwiperSlide></SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
