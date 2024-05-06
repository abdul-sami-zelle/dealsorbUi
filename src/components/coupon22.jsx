import React, { useState } from 'react';
import { Carousel, Radio } from 'antd';
import CouponCard from './coupon1'; // Make sure the file name matches the correct path
import Box from '@mui/material/Box';
import { couponeData1 } from './couponGrid'; // Import the coupon data array



const App222 = () => {
  const [dotPosition, setDotPosition] = useState(undefined);


  return (
    <Box >
      <Carousel autoplay={true} dotPosition={"left"} dots={false}>
        {couponeData1.map((coupon) => (
          <Box key={coupon.id} sx={{
          ml:"50px",
          }}>
            <CouponCard
              brandImg={coupon.brandImg}
              name={coupon.name}
              percent={coupon.percent}
              validity={coupon.validity}
            />
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default App222;
