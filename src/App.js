import { Navigation, Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import './App.css';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import React, { useState, useEffect } from "react";
const firstUrl = "https://avatars.githubusercontent.com/u/810438?v=4";
//"https://api.github.com/users/gaearon";
const secondUrl = "https://avatars.githubusercontent.com/u/3624098?v=4";
//"https://api.github.com/users/acdlite";
const thirdUrl = "https://avatars.githubusercontent.com/u/499550?v=4";
//"https://api.github.com/users/yyx990803";
const forthUrl = "https://avatars.githubusercontent.com/u/36901?v=4";
//"https://api.github.com/users/unclebob";
const fifthUrl = "https://avatars.githubusercontent.com/u/120859?v=4";
//"https://api.github.com/users/martinfowler";

export default function Slider () {

  const [img, setImg] = useState();

  const firstFetchImage = async () => {
    const res = await fetch(firstUrl);
    const imageBlob = await res.blob();
    const imageObjectURL = URL.createObjectURL(imageBlob);
    setImg(imageObjectURL);
  };

  useEffect(() => {
    firstFetchImage();
  }, []);

  return (
    <>
      <div className="Slider">
        <h1><img src={require('./GitHub-logo.png')} height="48" /> Avatars Slider</h1>
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        >
          <SwiperSlide><img src={img} alt="image" />
          </SwiperSlide>
          <SwiperSlide><img src={secondUrl} alt="image" />
          </SwiperSlide>
          <SwiperSlide><img src={thirdUrl} alt="image" />
          </SwiperSlide>
          <SwiperSlide><img src={forthUrl} alt="image" />
          </SwiperSlide>
          <SwiperSlide><img src={fifthUrl} alt="image" />
          </SwiperSlide>
        </Swiper>
      </div>
      );
    </>
  );
}