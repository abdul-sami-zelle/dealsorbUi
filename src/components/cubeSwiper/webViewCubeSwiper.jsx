import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

import './cube.css';
import CatName from '../catName';
import Button from '@mui/material/Button';
// import required modules
import {Autoplay, EffectCube, Pagination } from 'swiper/modules';

export default function WebCube() {
  return (
    <>
      <Swiper
        effect={'cube'}
        grabCursor={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[Autoplay,EffectCube, Pagination]}
        className="mySwipercube"
      >
        <SwiperSlide className="mySwipercubeSlide">
          <img src="https://img.freepik.com/free-vector/flat-paper-style-eid-al-adha-bakrid-festival-nice-background_1017-32465.jpg?w=740&t=st=1695902047~exp=1695902647~hmac=54075a2a9e163ae264163b8fb990148792032070fc0e1a85e28f914e4323868b" />
        </SwiperSlide>
        <SwiperSlide className="mySwipercubeSlide">
          <img src="https://img.freepik.com/free-vector/eid-al-fitr-blue-background_1035-8123.jpg?w=740&t=st=1695902234~exp=1695902834~hmac=0db1539bfd4b3b962ebe71883e34df8191b4de4ce387db3dc0817d6136f801bc" />
        </SwiperSlide>
        <SwiperSlide className="mySwipercubeSlide">
          <img src="https://img.freepik.com/free-vector/map-design-pakistan-independence-day_1057-4697.jpg?w=740&t=st=1695902299~exp=1695902899~hmac=17a8be891afd94d013b51daaa3dedc1f68e0bb677420b63eeae2f22ad395c67a" />
        </SwiperSlide>
        <SwiperSlide className="mySwipercubeSlide">
          <img src="https://img.freepik.com/free-vector/beautiful-labor-day-design_1057-4324.jpg?w=740&t=st=1695902338~exp=1695902938~hmac=2e56a9dc5c8ac9043134479e40277da0b40b425751abedc2032be8816aed49b5" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
