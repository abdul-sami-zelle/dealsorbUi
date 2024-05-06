import '../AllDeals/allDeals.css'
import ResponsiveAppBar from '../../components/bar2'
import SEO from '../../SEO/mainSEO'
import { Grid } from '@mui/material'
import coupon from '../../assets/coupon.png'
import DealDesign from '../AllDeals/dealDesign'
import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoadingState ,setLoadingTrue, setLoadingFalse ,setCouponData,getCouponData} from '../../stateManagement/slices/loadingSlice';
import CouponCodeModal from '../../components/Modals/couponCodeModal';



function handleClick(id) {
    const apiUrl = `https://coupon-backend-tau.vercel.app/api/v1/coupon/click-coupon/${id}`;

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('API response:', data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
}



export default function AllCoupons() {
    const [coupons, setCoupons] = useState([])
    const isLoading = useSelector(selectLoadingState);
    const dispatch = useDispatch();

    const handleSetLoadingTrue = () => {
        console.log(selectLoadingState);
        dispatch(setLoadingTrue());
        console.log(selectLoadingState);
    };
    
    const handleSetLoadingFalse = () => {
        dispatch(setLoadingFalse());
    };

    useEffect(() => {
        // Fetch data from your API endpoint
        fetch('https://coupon-backend-tau.vercel.app/api/v1/coupon/get-all')
          .then((response) => response.json())
          .then((data) => {
            // Filter stores where type === 'deal'
            const couponOnly = data.coupons.filter(coupon => coupon.type === 'coupon');
            
            // Set state with filtered stores and store names
            setCoupons(couponOnly);
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
          });
      }, [coupons]);
    
    return <>
    <SEO title={"Free Online Coupon and Coupon Codes at dealsorb.com"} />
        <ResponsiveAppBar/>
        <Grid container>
                <Grid item lg={1}></Grid>
                <Grid item lg={10}>
                    <div className="bannerImgAllEvents">
                        <img src={coupon} alt="" srcset="" />
                        <h1>All Coupons</h1>
                    </div>

                    <Grid container spacing={4}  sx={{ marginTop: '10px',marginBottom: '40px'  }}>
                            
                            {coupons.map((item, index) => (
                                <Grid item key={index} xs={6} sm={3} md={2} lg={3}>
                                       <div onClick={()=>{
                   handleSetLoadingTrue();
                   handleClick(item._id);
                   dispatch(setCouponData({
                       name:`${item.storeName}`,
                       companyName:`${item.storeName}`,
                       tagLine:`${item.description}`,
                       code:`${item.couponCode}`,
                       expiry:`${item.startDate} - ${item.startDate}`,
                       trackingUrl:`${item.url}`,
                       logo:`${item.imgUrl}`
                   }));
              }}> 
                                        <DealDesign storeName={item.storeName} title={item.title} expiry={`${item.startDate} to ${item.endDate}`} type={"Coupon"}/></div>
                                </Grid>
                                 ))}
                          </Grid>

                
                   

                

                  

                </Grid>
                <Grid item lg={1}></Grid>
            </Grid>
            {isLoading?<CouponCodeModal    />:<div></div>}
    </>
}