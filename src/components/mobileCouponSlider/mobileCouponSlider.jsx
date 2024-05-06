import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import MobileCoupon from '../couponUi/mobileCoupon';
import './mobileCouponSlider.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import CatName from '../catName';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import MobileCoupon2 from '../couponUi/mobileCoupon2';

export default function MobileCouponSlider({couponDataMobile}) {
  return (
    <>
      <div style={{height:'30px'}}></div>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center', marginLeft:'15px',marginRight:'15px'}}>
        <CatName categoryHeading="Coupons" productHeading="Best Deals Coupons"/>
        <div style={{height:'15px'}}></div>
        <Button className='seeAllBtnMobilePr'>
           See All
        </Button>
        </div>
        <div style={{height:'30px'}}></div>
      <Swiper
         autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        className="mySwiper224"
        customClass={{
            navigationButtonPrev: 'swiper-button-prev',
            navigationButtonNext: 'swiper-button-next',
          }}
          modules={[Autoplay]}
      >
         {couponDataMobile.map((item, index) => (
           <SwiperSlide className="mySwiper222">
            <MobileCoupon url={item.url} percent={item.percent} brand={item.brand} validTill={item.validTill} />
            </SwiperSlide>
      ))}
      </Swiper>
      <Swiper
         autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        className="mySwiper225"
        customClass={{
            navigationButtonPrev: 'swiper-button-prev',
            navigationButtonNext: 'swiper-button-next',
          }}
          modules={[Autoplay]}
      >
         {couponDataMobile.map((item, index) => (
           <SwiperSlide className="mySwiper2225">
            <MobileCoupon url={item.url} percent={item.percent} brand={item.brand} validTill={item.validTill} />
            </SwiperSlide>
      ))}
      </Swiper>
      {/* <div style={{marginLeft:'20px',marginRight:"20px"}}> 
      <Grid container  spacing={0} rowSpacing={2}>
      {couponDataMobile.map((item, index) => (
        <Grid  item key={index}  sx={{display:"flex",justifyContent:"center",alignItems:"center"}} xs={6} sm={4} md={2} lg={1.7}>
           <MobileCoupon2 url={item.url} percent={item.percent} brand={item.brand} validTill={item.validTill} />
         
        </Grid>
      ))}
    </Grid>
      </div> */}
    </>
  );
}
