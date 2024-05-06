import './style.css'
import { Grid } from '@mui/material'
import Upd_Cat_Coupon from './upd_cat_cou'
import React, { useEffect, useState, useRef } from 'react';
import { useParams ,useLocation} from 'react-router-dom';
import ResponsiveAppBar from '../../components/bar2';
import CouponCodeModal from '../../components/Modals/couponCodeModal';
import { useDispatch, useSelector } from 'react-redux';
import { setLoadingTrue, setLoadingFalse, selectLoadingState } from '../../stateManagement/slices/loadingSlice';
import SEO from '../../SEO/mainSEO';
import { LoaderCouponsCat } from './loaderCoupons';
const loadingData = [
  "1","2","3","4","5","6"
];

const Loader = () => <div className="textLoader">
  <div className='loader113'></div>
  <div className='loader113'></div>
  <div className='loader113'></div>
  <div className='loader113'></div>
  <div className='loader113'></div>
</div>;



export default function UpdatedCategoryPageDC() {

    const { category } = useParams();

    const location = useLocation();

    const [seoTitle, setSeoTitle] = useState(location?.state?.title);
    const [seoDescription, setSeoDescription] = useState(location?.state?.description);
    const [totalStores, setTotalStores] = useState(location?.state?.totalStores);
    const [totalCoupons, setTotalCoupons] = useState(location?.state?.totalCoupons);
    const [totalDeals, setTotalDeals] = useState(location?.state?.totalDeals);



    const [stores, setStores] = useState([]);

    const [storeNames, setStoreNames] = useState([]);

    const isLoading = useSelector(selectLoadingState);

    const [isLoaderActive, setIsLoaderActive] = useState(true);
  
    useEffect(() => {
      // Fetch data from your API endpoint
      console.log(location?.state?.title)
      fetch(`https://coupon-backend-tau.vercel.app/api/v1/coupon/get-coupons/${category}`)
        .then((response) => response.json())
        .then((data) => {
       
          
          setStores(data.coupons);
          const extractedStoreNames = data.coupons.map(coupon => coupon.storeName);
          setStoreNames(extractedStoreNames);
          console.log(storeNames);
          setIsLoaderActive(false);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }, []);
    return <>
    <SEO name={""} type={""} title={seoTitle} description={seoDescription} />
  
    <ResponsiveAppBar/>
    <div className="updatedCategoryPageDC">
        <div className="headerUCPDC">
        <div className="marginClass">
            <h1>
               {category} Sales & Deals
            </h1>
            <p>
               TOP 211 OFFERS AVAILABLE FOR FEBRUARY 2024
            </p>
        </div>
        </div>
        <div className="marginClass">
            <Grid container>
                <Grid className='leftSideUCPDC' item lg={3}>
                    <div>
                        <p className='paragraghUCPDCB'>ABOUT {category} Deals & Coupons</p>
                       {isLoaderActive? <Loader/>: <p className='paragraghUCPDC'>{seoDescription}</p>}
                    </div>
                    <div >
                        <div className='paragraghUCPDC1'>
                          <p>Total Stores</p>
                          {isLoaderActive? <div className='countLoaderCat'></div>: <p>{totalStores}</p>}
                        </div>
                        <div className='paragraghUCPDC1'>
                          <p>Total Coupons</p>
                          {isLoaderActive? <div className='countLoaderCat'></div>: <p>{totalCoupons}</p>}
                        </div>
                        <div className='paragraghUCPDC1'>
                          <p>Total Deals</p>
                          {isLoaderActive? <div className='countLoaderCat'></div>: <p>{totalDeals}</p>}
                        </div>
                        {/* <div className='paragraghUCPDC1'>
                          <p>Free Shipping Deals</p>
                          {isLoaderActive? <div className='countLoaderCat'></div>: <p>10</p>}
                        </div> */}
                    </div>
                    <div style={{
                        height:'20px'
                    }}></div>
                    <p className='paragraghUCPDCB'>Similar Stores</p>
                    <div style={{
                        height:'0px'
                    }}></div>
                    <div className='similarStoresUCPDC'>
                        
                    <p>Free Shipping Deals</p>
                    <p>Free Shipping Deals</p>
                    <p>Free Shipping Deals</p>
                    <p>Free Shipping Deals</p>
                    <p>Free Shipping Deals</p>
                    <p>Free Shipping Deals</p>
                    <p>Free Shipping Deals</p>
                    <p>Free Shipping Deals</p>
                    <p>Free Shipping Deals</p>
                    <p>Free Shipping Deals</p>
                    </div>
                    

                </Grid>
                <Grid className='rightSideUCPDC' item lg={9}>
                    
                     <Grid container spacing={1.4}  sx={{ marginTop: '10px',marginBottom: '40px'  }}>
                            
                            { isLoaderActive? (loadingData.map((item, index) => (
                                <Grid item key={index} xs={6} sm={3} md={2} lg={4}>
                                    <LoaderCouponsCat />
                                  </Grid>
                                 ))) :(stores.map((item, index) => (
                                <Grid item key={index} xs={6} sm={3} md={2} lg={4}>
                                    <Upd_Cat_Coupon id={item._id} company={item.storeName} tagline={item.description} logo={item.imgUrl} code={item.couponCode} expiry={`${item.startDate} - ${item.startDate}`} url={item.trackingUrl} neverExpire={item.neverExpire} imgUrl = {item.imgUrl} />
                                </Grid>
                                 )))}
                          </Grid>
                </Grid>
            </Grid>
        </div>
    </div>

    {isLoading?<CouponCodeModal    />:<div></div>}
    </>
}