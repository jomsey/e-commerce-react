import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper";

import "swiper/css";
import "./Slider.css";
import "swiper/css/navigation";

export default function Slider({ itemsList, itemsPerDisplayNumber }) {
  return (
    <Swiper
      spaceBetween={50}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      slidesPerView={itemsPerDisplayNumber}
      pagination={{ clickable: true }}
      modules={[Pagination, Autoplay, Navigation]}
    >
      {itemsList.map((item) => (
        <SwiperSlide key={item}>{item}</SwiperSlide>
      ))}
    </Swiper>
  );
}
