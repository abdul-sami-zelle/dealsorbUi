import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './subCarouselTesting.css';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
export default function SubCarouselTesting() {
    return (
      <div className='subCar'>
        <Swiper
          slidesPerView={2}
          centeredSlides={true}
          spaceBetween={30}
          grabCursor={true}
          
         
          className="mySwiper3"
        >
          <SwiperSlide className='swiperSlide3'>Slide 1</SwiperSlide>
          <SwiperSlide className='swiperSlide3'>Slide 2</SwiperSlide>
          <SwiperSlide className='swiperSlide3'>Slide 3</SwiperSlide>
          <SwiperSlide className='swiperSlide3'>Slide 4</SwiperSlide>
          <SwiperSlide className='swiperSlide3'>Slide 5</SwiperSlide>
          <SwiperSlide className='swiperSlide3'>Slide 6</SwiperSlide>
          <SwiperSlide className='swiperSlide3'>Slide 7</SwiperSlide>
          <SwiperSlide className='swiperSlide3'>Slide 8</SwiperSlide>
          <SwiperSlide className='swiperSlide3'>Slide 9</SwiperSlide>
        </Swiper>
      </div>
    );
  }
  