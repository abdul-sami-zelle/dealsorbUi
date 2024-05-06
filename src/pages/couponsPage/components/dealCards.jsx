import React, { useRef, useEffect,useState } from 'react';
import '../../couponsPage/index.css'
import Grid from '@mui/material/Grid';
import CouponCardAllDesign from './couponCardAllDesign';
import { useDispatch, useSelector } from 'react-redux';
import {  setLoadingTrue, setLoadingFalse, selectLoadingState ,setCouponData,getCouponData } from '../../../stateManagement/slices/loadingSlice';

const couponsData = [
  {
    id: 1,
    code: "QW1234",
    off: "10 % OFF",
    brandLogo: "https://wosu.org/wp-content/uploads/2020/04/Amazon-Logo-Transparent-PNG.png"
  },
  {
    id: 2,
    code: "HY6543",
    off: "20 % OFF",
    brandLogo: "https://wosu.org/wp-content/uploads/2020/04/Amazon-Logo-Transparent-PNG.png"
  },
  {
    id: 3,
    code: "H7647U",
    off: "30 % OFF",
    brandLogo: "https://wosu.org/wp-content/uploads/2020/04/Amazon-Logo-Transparent-PNG.png"
  },
  {
    id: 4,
    code: "KKJ123",
    off: "40 % OFF",
    brandLogo: "https://wosu.org/wp-content/uploads/2020/04/Amazon-Logo-Transparent-PNG.png"
  },
  {
    id: 2,
    code: "HY6543",
    off: "20 % OFF",
    brandLogo: "https://wosu.org/wp-content/uploads/2020/04/Amazon-Logo-Transparent-PNG.png"
  },
  {
    id: 3,
    code: "H7647U",
    off: "30 % OFF",
    brandLogo: "https://wosu.org/wp-content/uploads/2020/04/Amazon-Logo-Transparent-PNG.png"
  },
  {
    id: 4,
    code: "KKJ123",
    off: "40 % OFF",
    brandLogo: "https://wosu.org/wp-content/uploads/2020/04/Amazon-Logo-Transparent-PNG.png"
  },
  {
    id: 4,
    code: "KKJ123",
    off: "40 % OFF",
    brandLogo: "https://wosu.org/wp-content/uploads/2020/04/Amazon-Logo-Transparent-PNG.png"
  },
  {
    id: 4,
    code: "KKJ123",
    off: "40 % OFF",
    brandLogo: "https://wosu.org/wp-content/uploads/2020/04/Amazon-Logo-Transparent-PNG.png"
  }, {
    id: 4,
    code: "KKJ123",
    off: "40 % OFF",
    brandLogo: "https://wosu.org/wp-content/uploads/2020/04/Amazon-Logo-Transparent-PNG.png"
  }, {
    id: 4,
    code: "KKJ123",
    off: "40 % OFF",
    brandLogo: "https://wosu.org/wp-content/uploads/2020/04/Amazon-Logo-Transparent-PNG.png"
  }, {
    id: 4,
    code: "KKJ123",
    off: "40 % OFF",
    brandLogo: "https://wosu.org/wp-content/uploads/2020/04/Amazon-Logo-Transparent-PNG.png"
  }, {
    id: 4,
    code: "KKJ123",
    off: "40 % OFF",
    brandLogo: "https://wosu.org/wp-content/uploads/2020/04/Amazon-Logo-Transparent-PNG.png"
  }, {
    id: 4,
    code: "KKJ123",
    off: "40 % OFF",
    brandLogo: "https://wosu.org/wp-content/uploads/2020/04/Amazon-Logo-Transparent-PNG.png"
  }, {
    id: 4,
    code: "KKJ123",
    off: "40 % OFF",
    brandLogo: "https://wosu.org/wp-content/uploads/2020/04/Amazon-Logo-Transparent-PNG.png"
  },
];

export default function CouponCardDeal() {

  const dispatch = useDispatch();

  const handleSetLoadingTrue = () => {
      console.log(selectLoadingState);
      dispatch(setLoadingTrue());
      console.log(selectLoadingState);
  };
  
  const handleSetLoadingFalse = () => {
      dispatch(setLoadingFalse());
  };


  const [allPopularCoupons, setAllPopularCoupons] = useState([]);

  useEffect(() => {
    // Fetch data from your API endpoint
    fetch('https://coupon-backend-tau.vercel.app/api/v1/coupon/get-all')
      .then((response) => response.json())
      .then((data) => {
        // Set the store data in state
        setAllPopularCoupons(data.popular);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (

    <Grid container>

      <Grid item lg={0}>

      </Grid>
      <Grid item lg={12}>
        <Grid container spacing={4} sx={{ marginX: '' }}>
          {allPopularCoupons.map((item, index) => (
            <Grid item key={index} xs={6} sm={3} md={2} lg={2}>
                
              <div onClick={()=>{
                   handleSetLoadingTrue();
                   dispatch(setCouponData({
                       name:`${item.storeName}`,
                       companyName:`${item.storeName}`,
                       tagLine:`${item.description}`,
                       code:`${item.couponCode}`,
                       expiry:`${item.startDate} - ${item.startDate}`,
                       trackingUrl:`${item.url}`,
                       logo:`${item.imgUrl}`,
                       type:`${item.type}`,
                   }));
              }}>
              <CouponCardAllDesign brandLogo={item.imgUrl} off={item.discountValue} code={item.couponCode} type={item.discountType} />
              </div>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item lg={0}>

      </Grid>
    </Grid>

  )
}