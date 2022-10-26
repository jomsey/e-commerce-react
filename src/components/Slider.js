import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper";

import "swiper/css";
import "./Slider.css";
import "swiper/css/navigation";

export default function Slider({ ImagesUrlsList, itemsPerDisplayNumber }) {
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
      {ImagesUrlsList.map((imageUrl) => (
        <SwiperSlide key={imageUrl}>
          <img src={imageUrl} alt="...." />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
