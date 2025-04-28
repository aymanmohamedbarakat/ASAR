import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

export default function Agencies() {
  const [boardMembers] = useState([
    {
      title: "رئيس مجلس الإدارة",
      name: "أحمد مجدي عبد الله",
    },
    {
      title: "رئيس التحرير",
      name: "أ.د/ إيناس محمود حامد",
    },
    {
      title: "مدير التحرير",
      name: "د/ ريهام عنتر",
    },
    {
      title: "الإشراف التنفيذي",
      name: "م.م/ شهاب نجم",
    },
    {
      title: "الديسك الصحفي",
      name: "أ/ محمد كامل",
    },
    {
      title: "الإخراج الصحفي",
      name: "أ/ عمرو رأفت",
    },
  ]);

  return (
    <div
      className="w-full bg-gray-50 border-t-2 border-gray-200 py-2"
      dir="rtl"
    >
      <div className="container mx-auto">
        <div className="flex items-center">
          <div className="bg-blue-600 text-white px-2 py-2 text-xs rounded-sm font-medium ml-2">
            هيئة التحرير
          </div>
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
              {boardMembers.map((member, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white border-r-2 border-blue-500 pr-2 py-1 h-full">
                    <span className="block text-xs text-gray-500">
                      {member.title}
                    </span>
                    <span className="block text-sm font-bold text-gray-800">
                      {member.name}
                    </span>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
