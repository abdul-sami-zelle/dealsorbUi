import React, { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-creative';
import '../../couponsPage/index.css';
import { EffectCreative } from 'swiper/modules';

export default function Option2({images}) {
  const [swiper, setSwiper] = useState(null);

  useEffect(() => {
    const autoplayInterval = setInterval(() => {
      if (swiper !== null) {
        if (swiper.isEnd) {
          swiper.slideTo(0);
        } else {
          swiper.slideNext();
        }
      }
    }, 5000);

    return () => {
      clearInterval(autoplayInterval);
    };
  }, [swiper]);

  return (
    <>
      <Swiper
        onSwiper={setSwiper}
        grabCursor={true}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
        modules={[EffectCreative]}
        className="swiper3"
      >
         {images.map((imageUrl, index) => (
        <SwiperSlide className='swiper-slide3' key={index}>
          <img  src={imageUrl}  />
        </SwiperSlide>
      ))}
      </Swiper>
    </>
  );
}
