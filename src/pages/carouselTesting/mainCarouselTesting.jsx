import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './mainCarouselTesting.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


function getSwipeDirection(swiper) {
  const { slidesPerView, currentSlide, previousSlide } = swiper;

  // Calculate the distance of the swipe.
  let swipeDistance = currentSlide - previousSlide;
  if (swipeDistance < 0) {
    swipeDistance += slidesPerView;
  }

  // Determine the swipe direction.
  if (swipeDistance > 0) {
    return "right";
  } else if (swipeDistance < 0) {
    return "left";
  } else {
    return "none";
  }
}

export default function MainCarouselTesting({ images }) {
  const [mainCarouselSwiper, setMainCarouselSwiper] = useState(null);
  const [subCarouselSwiper, setSubCarouselSwiper] = useState(null);
  const [swiper, setSwiper] = useState(null);

  const handleSubCarouselDrag = () => {
    if (mainCarouselSwiper && subCarouselSwiper) {
      mainCarouselSwiper.controller.control = subCarouselSwiper;
      subCarouselSwiper.controller.control = mainCarouselSwiper;
    }
  };

  const onSwipeChange = () => {
    const direction = getSwipeDirection(swiper);
    console.log("Swipe direction:", direction);
  };

  return (
    <div className="main-carousel-container">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className={`mySwiper2`}
        onSlideChange={onSwipeChange}
      >
        {images.map((imageUrl, index) => (
          <SwiperSlide className='swipeSlide2' key={index}>
            <img src={imageUrl} alt={`Slide ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className='subCar'>
        <Swiper
          slidesPerView={2}
          centeredSlides={true}
          spaceBetween={30}
          grabCursor={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper3"
          onSwiper={setSubCarouselSwiper}
          onSlideChange={handleSubCarouselDrag}
        >
          {images.map((_, index) => (
            <SwiperSlide className='swiperSlide3' key={index}>
              {`Slide ${index + 1}`}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
