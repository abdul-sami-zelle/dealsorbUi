import './allDeals.css';
import ResponsiveAppBar from '../../components/bar2';
import SEO from '../../SEO/mainSEO';
import { Grid } from '@mui/material';
import dealsImage from '../../assets/deals.png';
import DealDesign from './dealDesign';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLoadingTrue, setLoadingFalse, setCouponData, selectLoadingState } from '../../stateManagement/slices/loadingSlice';
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

export default function AllDeals() {
    const [deals, setDeals] = useState([]);
    const isLoading = useSelector(selectLoadingState);
    const dispatch = useDispatch();

    useEffect(() => {
        fetch('https://coupon-backend-tau.vercel.app/api/v1/coupon/get-all')
          .then((response) => response.json())
          .then((data) => {
            const dealOnly = data.coupons.filter(deal => deal.type === 'deal');
            setDeals(dealOnly);
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
          });
    }, []); // Empty dependency array to fetch data only once when component mounts

    const handleSetLoadingTrue = () => {
        dispatch(setLoadingTrue());
    };
    
    return (
        <>
            <SEO 
                title="Free Online Deals at dealsorb.com"
                description="Get amazing deals on dealsorb.com. Shop now and save!"
                name="Your Name"
                type="website"
            />
            <ResponsiveAppBar/>
            <Grid container>
                <Grid item lg={1}></Grid>
                <Grid item lg={10}>
                    <div className="bannerImgAllEvents">
                        <img src={dealsImage} alt="" />
                        <h1>All Deals</h1>
                    </div>
                    <Grid container spacing={4} sx={{ marginTop: '10px', marginBottom: '40px' }}>
                        {deals.map((item, index) => (
                            <Grid item key={index} xs={6} sm={3} md={2} lg={3}>
                                <div onClick={() => {
                                    handleSetLoadingTrue();
                                    handleClick(item._id);
                                    dispatch(setCouponData({
                                        name: `${item.storeName}`,
                                        companyName: `${item.storeName}`,
                                        tagLine: `${item.description}`,
                                        code: `${item.couponCode}`,
                                        expiry: `${item.startDate} - ${item.startDate}`,
                                        trackingUrl: `${item.url}`,
                                        logo: `${item.imgUrl}`
                                    }));
                                }}>
                                    <DealDesign storeName={item.storeName} title={item.title} expiry={`${item.startDate} to ${item.endDate}`} type={"Top Deal"}/>
                                </div>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
                <Grid item lg={1}></Grid>
            </Grid>
            {isLoading ? <CouponCodeModal /> : <div></div>}
        </>
    );
}
