import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import "../assets/styles/Carousal.css";
import SwiperCore, { Pagination, Navigation,Autoplay } from "swiper/core";
import slide from "../assets/images/slide.png";

SwiperCore.use([Pagination, Navigation,Autoplay]);

const Carousal = () => {
  return (
    <div className="carousal__container">
      <Swiper
        pagination={{ type: "bullets","clickable":true }}
        navigation={true}
        loop={true}
      //   autoplay={{
      //     delay: 3000,
      //     disableOnInteraction: true
      // }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="carousal__slide">
            <img src={slide} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide-active'>
          <div className="carousal__slide">
            <img src={slide} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="carousal__slide">
            <img src={slide} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="carousal__slide">
            <img src={slide} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousal;
