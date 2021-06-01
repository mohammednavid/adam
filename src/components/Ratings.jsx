import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import "../assets/styles/Ratings.css";
import SwiperCore, { Pagination,Autoplay } from "swiper/core";
import sliderImg from "../assets/images/sliderImg.png";
import star from "../assets/images/star.svg";

SwiperCore.use([Pagination,Autoplay]);

const Ratings = () => {
  return (
    <div className="ratings__container">
      <Swiper
        pagination={{ type: "bullets","clickable":true }}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true
      }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="ratings__slide">
            <div className="star">
                <img src={star} alt=""/>
                <img src={star} alt=""/>
                <img src={star} alt=""/>
                <img src={star} alt=""/>
                <img src={star} alt=""/>
            </div>
            <h2 className="ratings__title">The best and right service for social media!</h2>
            <p className="ratings__desp">"Jumping from automation tool to another one was a huge pain point for me. I found ADAM few months ago. Very happy (since it actually works) and there customer support is solid."</p>
            <div className="ratings__bottom">
                <img src={sliderImg} alt="" className="ratings__img"/>
                <p className="ratings__username">@username</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="ratings__slide">
            <div className="star">
                <img src={star} alt=""/>
                <img src={star} alt=""/>
                <img src={star} alt=""/>
                <img src={star} alt=""/>
                <img src={star} alt=""/>
            </div>
            <h2 className="ratings__title">The best and right service for social media!</h2>
            <p className="ratings__desp">"Jumping from automation tool to another one was a huge pain point for me. I found ADAM few months ago. Very happy (since it actually works) and there customer support is solid."</p>
            <div className="ratings__bottom">
                <img src={sliderImg} alt="" className="ratings__img"/>
                <p className="ratings__username">@username</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="ratings__slide">
            <div className="star">
                <img src={star} alt=""/>
                <img src={star} alt=""/>
                <img src={star} alt=""/>
                <img src={star} alt=""/>
                <img src={star} alt=""/>
            </div>
            <h2 className="ratings__title">The best and right service for social media!</h2>
            <p className="ratings__desp">"Jumping from automation tool to another one was a huge pain point for me. I found ADAM few months ago. Very happy (since it actually works) and there customer support is solid."</p>
            <div className="ratings__bottom">
                <img src={sliderImg} alt="" className="ratings__img"/>
                <p className="ratings__username">@username</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="ratings__slide">
            <div className="star">
                <img src={star} alt=""/>
                <img src={star} alt=""/>
                <img src={star} alt=""/>
                <img src={star} alt=""/>
                <img src={star} alt=""/>
            </div>
            <h2 className="ratings__title">The best and right service for social media!</h2>
            <p className="ratings__desp">"Jumping from automation tool to another one was a huge pain point for me. I found ADAM few months ago. Very happy (since it actually works) and there customer support is solid."</p>
            <div className="ratings__bottom">
                <img src={sliderImg} alt="" className="ratings__img"/>
                <p className="ratings__username">@username</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Ratings;
