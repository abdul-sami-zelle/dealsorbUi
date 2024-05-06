import React, { useState,useEffect } from 'react';
import { Carousel, Radio } from 'antd';
import CouponCard from './coupon1'; // Make sure the file name matches the correct path
import Box from '@mui/material/Box';
import { couponeData1 } from './couponGrid'; // Import the coupon data array
import MobileCoupon from './couponUi/mobileCoupon';



const App22 = () => {
  const [dotPosition, setDotPosition] = useState(undefined);

  const handlePositionChange = (e) => {
    setDotPosition(e.target.value);
  };
  const [popularCoupons, setPopularCoupons] = useState([]);

  useEffect(() => {
    // Fetch data from your API endpoint
    fetch('https://coupon-backend-tau.vercel.app/api/v1/coupon/get-all')
      .then((response) => response.json())
      .then((data) => {
        // Set the store data in state
        setPopularCoupons(data.coupons);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <Box sx={{padding:"10px",backgroundColor:"#F5F5F5"}}>
      <Carousel autoplay={true} dotPosition={"left"} dots={false}>
        {popularCoupons.map((coupon) => (
          <Box key={coupon.id} sx={{
      
          padding:'10px'
          }}>
            
            <CouponCard
              brandImg={coupon.imgUrl}
              name={coupon.storeName}
              percent={coupon.discountValue}
              validity={coupon.endDate}
              trackingUrl = {coupon.trackingUrl}
              code = {coupon.couponCode}
            />
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default App22;
