import './ocasionPageStyle.css';
import ResponsiveAppBar from '../../components/bar2';
import Footer from '../../components/footer';
import { Grid } from '@mui/material';
import Upd_Cat_Coupon from '../updatedCategoryBasedCoupons/upd_cat_cou';
import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLoadingTrue, setLoadingFalse, selectLoadingState } from '../../stateManagement/slices/loadingSlice';
import Upd_Cat_Coupon2 from '../updatedCategoryBasedCoupons/upd_cat_cou2';
import { useParams, useLocation  } from 'react-router-dom';
import CouponCodeModal from '../../components/Modals/couponCodeModal';
import SEO from '../../SEO/mainSEO';


export default function OcassionPage() {
    const { eventType } = useParams();
    const location = useLocation();
    const [seoTitle, setSeoTitle] = useState(location?.state?.title);
    const [seoDescription, setSeoDescription] = useState(location?.state?.description);
    const [coupons, setCoupons] = useState([]);
    const isLoading = useSelector(selectLoadingState);
  
    useEffect(() => {
        console.log(seoTitle)
      // Fetch data from your API endpoint
      fetch(`https://coupon-backend-tau.vercel.app/api/v1/coupon/get-coupons-event/${eventType}`)
        .then((response) => response.json())
        .then((data) => {
            setCoupons(data.event);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }, [eventType]); // Add `eventType` as a dependency
  
    return(
        <>
           <SEO name={""} type={""} title={seoTitle} description={seoDescription} />
            <ResponsiveAppBar/>
            <Grid container>
                <Grid item lg={1}></Grid>
                <Grid item lg={10}>
                    <div className="EventBanner" style={{
                        backgroundImage: `url('https://texcovery.com/upload/media/entries/2020-11/25/86-entry-0-1606338732.jpg')`
                    }}></div>
                    <h1 className='headingMain'>Best Deals & Coupons For {eventType}</h1>
                    <Grid item lg={12}>
                        <Grid container spacing={2} sx={{ marginTop: '10px',marginBottom: '40px' }}>
                            {coupons.map((item, index) => (
                                <Grid item key={index} xs={6} sm={3} md={2} lg={2.3}>
                                    <Upd_Cat_Coupon2 company={item.storeName} tagline={item.description} logo={item.imgUrl} code={item.couponCode} expiry={`${item.startDate} - ${item.startDate}`} url={item.trackingUrl} neverExpire={item.neverExpire} imgUrl = {item.imgUrl} />
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item lg={1}></Grid>
            </Grid>
            <Footer/>
            {isLoading?<CouponCodeModal    />:<div></div>}
        </>
    );
}
