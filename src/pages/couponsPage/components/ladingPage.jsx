import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import '../../couponsPage/index.css';
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function Tabs({images}) {
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiper = swiperRef.current.swiper;

    const interval = setInterval(() => {
      if (swiper && swiper.activeIndex < swiper.slides.length - 1) {
        swiper.slideNext();
      } else {
        swiper.slideTo(0);
      }
    }, 3000); // Change the delay here as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='abc'>
     <>
     <Swiper
        ref={swiperRef}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        // direction="vertical"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        slidesPerView={3}
        loop={true}
        speed={500}
        pagination={false}
        navigation={true}

        modules={[EffectCoverflow, Pagination]}
        
        className="swiper"
      >   {images.map((imageUrl, index) => (
        <SwiperSlide key={index}>
          
          <img src={imageUrl} alt={`Slide ${index + 1}`} height='100%'  width='100%' />
        </SwiperSlide>
      ))}
      </Swiper>
     </>
    </div>
  );
}
