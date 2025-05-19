import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

const images = [
  "https://i.ibb.co/gsjKWD4/outdoor-banner.jpg",
  "https://i.ibb.co/BV7p1GJZ/mybean.webp",
  "https://i.ibb.co/RG5V8zhN/books-banner.webp",
  "https://i.ibb.co/Y7jJKRyt/slider-2.webp",
  "https://i.ibb.co/GvdjZcC5/slider.webp",
];

const Slider = () => {
  return (
    <div className="w-full mx-auto h-[75vh]">
      {/* parent now has natural height because Swiper will fill its content */}
      <Swiper
        loop={true}
        effect="coverflow"
        modules={[EffectCoverflow, Pagination, Navigation]}
        grabCursor
        centeredSlides
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        className="mySwiper"
      >
        {images.map((src, index) => (
          <SwiperSlide className="flex justify-center items-center" key={index}>
            <img
              src={src}
              className="w-full object-cover max-h-[75vh]"
              alt={`Slide ${index + 1}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default Slider;
