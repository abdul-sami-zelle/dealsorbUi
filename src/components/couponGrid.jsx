import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'; // Step 1: Import Grid component
import CouponCard from './coupon1'
import AnimatedText from './quote2'




export default function CouponGrid(){
  return (
    <Box mt={2} sx={{backgroundColor:'#1A9BF7'}}>
    <Grid container spacing={2} justifyContent="center" >
      {couponeData1.map((coupon) => (
        <Grid sx={{display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',}} spacing={2}  item key={coupon.id} xs={12} sm={6} md={2} lg={4}>
          <CouponCard
            brandImg={coupon.brandImg}
            name={coupon.name}
            percent={coupon.percent}
            validity={coupon.validity}
          />
        </Grid>
      ))}
    </Grid>
  </Box>
  );
};


export const couponeData1 = [
    {
      id: 1,
      brandImg:
        "https://www.bata.co.za/file/BATA_logo_since1925.png",
      name: "BATA SHOE SERVICES",
      percent: "50%",
      validity: "Get Upto 50% discount",
    },
    {
        id: 2,
        brandImg:
          "https://logos-world.net/wp-content/uploads/2020/04/Adidas-Logo-1991-present.jpg",
        name: "ADDIDAS",
        percent: "70%",
        validity: "Get Upto 70% discount",
      },
      {
        id: 3,
        brandImg:
          "https://cdn.freebiesupply.com/logos/large/2x/mcdonalds-15-logo-png-transparent.png",
        name: "MACDONALD'S",
        percent: "40%",
        validity: "Get Upto 40% discount",
      },
      {
        id: 4,
        brandImg:
          "https://www.freepnglogos.com/uploads/kfc-png-logo/worldfest-kfc-png-logo-6.png",
        name: "KFC",
        percent: "20%",
        validity: "Get Upto 20% discount",
      },
      {
        id: 5,
        brandImg:
          "https://cdn.freebiesupply.com/logos/large/2x/careem-logo-png-transparent.png",
        name: "CAREEM",
        percent: "12%",
        validity: "Get Upto 12% discount",
      },
      {
        id: 6,
        brandImg:
          "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png",
        name: "UBER",
        percent: "60%",
        validity: "Get Upto 60% discount",
      },

  ];




  
