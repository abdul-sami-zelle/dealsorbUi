import React, { useEffect, useState, useRef } from 'react';
import Grid from '@mui/material/Grid';
import './stores.css'
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Mail from '@mui/icons-material/Mail';
import SearchIcon from '@mui/icons-material/Search';
import { FaLocationArrow } from 'react-icons/fa';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import CouponDescriptionStores from './components/couponDescriptions'
import MajorDiscountOffer from './components/majorDiscountOffer'
import PopularPromoCodes from './components/popularPromoCodes'
import ReviewsArticles from './components/reviewsArtcles'
import TopUsersComments from './components/topUserComments'
import CustomerRatings from './components/CustomerRatings'
import FAQS  from './components/faqs';
import SimilarStores from './components/similarStores';
import ResponsiveAppBar from '../../components/bar2';
import Footer from '../../components/footer';
import { useParams,useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoadingState } from '../../stateManagement/slices/loadingSlice';
import { selectLoaderState ,setLoaderTrue,setLoaderFalse} from '../../stateManagement/slices/showLoader';
import CouponCodeModal from '../../components/Modals/couponCodeModal';
import SEO from '../../SEO/mainSEO';
import { useNavigate } from 'react-router-dom';
import MainLoader from '../../components/loader/loader';
import PopUp2 from '../../components/popUp/popUp2';
import { setSuccessPopUpFalse,setSuccessPopUpTrue,showSuccessLoaderState } from '../../stateManagement/slices/successPopup';
import { setErrorPopupFalse,setErrorPopupTrue,showErrorLoaderState } from '../../stateManagement/slices/errorPopUp';
import PopUp3 from '../../components/popUp/popUp3';


export default function MainStorePage() {
    const [storesBenefits, setStoresBenefits] = useState([]);
    const [popularStores, setPopularStores] = useState([]);
    const [topDealsCoupons, setTopDealsCoupons] = useState([]);


    const [email, setEmail] = useState('');

    // Step 2: Event handler function to update state
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
      console.log(email);
    };


    const { storeName } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        window.scrollTo(0,0);  
      }, []);

  useEffect(() => {
    // Fetch data from your API endpoint
    fetch(`https://coupon-backend-tau.vercel.app/api/v1/coupon/get-coupons-storeName/${storeName}`)
      .then((response) => response.json())
      .then((data) => {
        setStoresBenefits(data.coupons);
        setTopDealsCoupons(data.topCoupon);
        console.log(data.topCoupon)
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [storeName]);

  useEffect(() => {
    // Fetch data from your API endpoint
    fetch('https://coupon-backend-tau.vercel.app/api/v1/store/get-all')
      .then((response) => response.json())
      .then((data) => { // Replace "Your Store Name Here" with the name of the store you want to exclude
        let popularStores = data.popularStores.slice(0, 9);
        if (popularStores.some(store => store.name === storeName)) {
          popularStores = popularStores.filter(store => store.storeName !== storeName);
        }
        setPopularStores(popularStores);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [popularStores]);
  const navigate = useNavigate();

  const navigateToStore = (categoryValue,e) => {
    // Navigate to the desired route with the category parameter
    navigate(`/all-stores/${categoryValue}`,{state:e});
    window.scrollTo(0, 0);  
  };



  const handleSubmit = async (storeName, email, country) => {
    try {
        dispatch(setLoaderTrue());
      const response = await fetch('https://coupon-backend-tau.vercel.app/api/v1/DealSubscribe/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          storeName: storeName,
          email: email,
          country: country
        })
      });

      if (response.ok) {
        dispatch(setLoaderFalse());
        dispatch(setSuccessPopUpTrue());
        setEmail("");
        console.log('Success');
      } 
      else if(response.status===400){
        dispatch(setErrorPopupTrue());
        dispatch(setLoaderFalse());
        dispatch(setSuccessPopUpFalse());
      }
      else {
        dispatch(setErrorPopupTrue());
        dispatch(setLoaderFalse());
        dispatch(setSuccessPopUpFalse());
        console.log(response);
      }
    } catch (error) {
        dispatch(setSuccessPopUpFalse());
        dispatch(setLoaderFalse());
      console.error('Error:', error);
    }
  };


  const isLoading = useSelector(selectLoadingState);
  const isLoading2 = useSelector(selectLoaderState);
  const isSuccessTrue = useSelector(showSuccessLoaderState);
  const isErrorTrue = useSelector(showErrorLoaderState);
  const location = useLocation();

    const [seoTitle, setSeoTitle] = useState(location?.state?.title);
    const [seoDescription, setSeoDescription] = useState(location?.state?.description);
    const [storeHeading, setStoreHeading] = useState(location?.state?.heading);
    const [tagLine, setTagLine] = useState(location?.state?.tagLine);
    const [faqs, setFaqs] = useState(location?.state?.faqs);
    const [descriptionHeading, setDescriptionHeading] = useState(location?.state?.descriptionHeading);
    const [longDescriptionHeading, setLongDescriptionHeading] = useState(location?.state?.longDescriptionHeading);
    const [longDescription, setLongDescription] = useState(location?.state?.longDescription);
    const [aboutHeading, setAboutHeading] = useState(location?.state?.aboutHeading);
    const [about, setAbout] = useState(location?.state?.about);
    const [bannerImg, setBannerImg] = useState(location?.state?.bannerImgUrl);



    const seoTitle1 = location?.state?.title || "Default Title";
    const seoDescription1 = location?.state?.description || "Default Description";





    return (
        <> 
        <SEO name={""} type={""} title={seoTitle1} description={seoDescription1}/>
        <Grid container >
            <Grid item xs={12} sm={12} md={12} xl={12} lg={12}>
            <ResponsiveAppBar activePage={'All Stores'} />
            </Grid>
            <Grid item xs={1} xl={1} lg={1} md={1}></Grid>
            <Grid item xs={10} xl={10} lg={10} md={10}>
                <div className="banner" style={{
                    backgroundImage:`url(${bannerImg})`
                }}></div>
                <Grid container>

                    <Grid lg={8} md={8} xs={12} sm={12}>
                        <div>
                        <div style={{ height: '15px' }}></div>
                            <div className="storeNameHeading">
                             {storeHeading} | {tagLine}
                            </div>
                            <div style={{ height: '15px' }}></div>
                            <div>
                            {storesBenefits.map((coupon, index) => (
                                <>
                               <div style={{height:'10px'}}> </div>
                               
                                <CouponDescriptionStores
                                    offer={coupon.offer}
                                    title={coupon.title}
                                    description={coupon.description}
                                    code={coupon.couponCode}
                                    descriptionHeading={coupon.longDescription}
                                    promoCode={coupon.promoCode}
                                    discountType={coupon.discountType}
                                    discountValue={coupon.discountValue}
                                    applicableFor={coupon.applicableFor}
                                    couponValidity={coupon.expiresType}
                                    trackingUrl={coupon.trackingUrl}
                                    storeName={coupon.storeName}
                                    StoreLogo={coupon.imgUrl}
                                    type={coupon.type}
                                    id={coupon._id}
                                />
                                <div style={{height:'10px'}}> </div>
                                </>
                            ))}
                            </div>
                            <div style={{ height: '30px' }}></div>
                            <MajorDiscountOffer/>
                            <div style={{ height: '30px' }}></div>
                            <PopularPromoCodes storeName={storeName} topCoupons={topDealsCoupons} />
                            <div className="mobViewContentRightSide">
                              <Grid container>

                               <Grid item lg={4} md={4} sm={12}>
                                    
                               </Grid>
                              </Grid>
                        </div>


                            <div style={{ height: '30px' }}></div>
                            <ReviewsArticles/>
                            {/* <div style={{ height: '30px' }}></div>
                            <TopUsersComments/> */}
                            <div style={{ height: '30px' }}></div>
                            <CustomerRatings/>
                            <div style={{ height: '30px' }}></div>
                            <div className="couponMainHeadingOffer">
                            FAQ about {storeName} coupon, sale and discounts
                            </div>
                            <div style={{ height: '15px' }}></div>
                            <FAQS faqs={faqs} />
                            <div style={{ height: '30px' }}></div>
                            <div className="couponMainHeadingOffer">
                            Similar Stores to {storeName} in UAE
                            </div>
                            <div style={{ height: '15px' }}></div>
                            <SimilarStores/>

                        </div>
                    </Grid>
                    <Grid item xl={4} lg={4} md={4} xs={12} sm={12} sx={{}}>
                        <div className="webViewContentRightSide">
                        <div className="webViewContentRightSide1" style={{
                            display:'flex',
                            flexDirection:'column',
                            alignItems:'end',
                            justifyContent:'center'
                        }}>
                            <div className="shopNow">
                                <div style={{ height: '30px' }}></div>
                                <img src={`${topDealsCoupons.length>0 && topDealsCoupons[0].imgUrl}`} height='80px' width='80px' alt="" srcset="" />
                                <div style={{ height: '20px' }}></div>
                                <div className="offer">
                                  {topDealsCoupons.length>0 && topDealsCoupons[0].offer}
                                  {/* {items.length > 0 && items[0].title} */}
                                </div>
                                <div style={{ height: '20px' }}></div>
                                <Button onClick={()=>{
                                    window.open(`${topDealsCoupons.length>0 && topDealsCoupons[0].trackingUrl}`, '_blank');
                                }} variant="contained" sx={{ borderRadius: '20px', backgroundColor: '#DB4444', paddingX: '50px' }}>Shop Now</Button>
                                <div style={{ height: '30px' }}></div>
                            </div>
                            <div style={{ height: '30px' }}></div>
                            <div className="contact">
                                <div className="boldHeadings">
                                    Receive exclusive offers to your mailbox
                                </div>
                                <Paper
                                    component="form"
                                    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '80%' }}
                                >
                                    <IconButton sx={{ p: '10px' }} aria-label="menu">
                                        <Mail />
                                    </IconButton>
                                    <InputBase
                                        value={email}
                                        onChange={handleEmailChange}
                                        sx={{ ml: 1, flex: 1 }}
                                        placeholder="Email"
                                        inputProps={{ 'aria-label': 'search google maps' }}
                                    />
                                    <IconButton onClick={()=>{
                                        // dispatch(setLoaderTrue());
                                        if (email==='') {
                                            
                                        }
                                         else{
                                            handleSubmit(storeName,email,'US');
                                         }
                                    }} type="button" sx={{ p: '10px' }} aria-label="search">
                                    <FaLocationArrow />
                                    </IconButton>
                                </Paper>
                             
                                <div style={{ height: '30px' }}></div>
                                <div style={{width:'274px'}}>
                                <div className="smallDescription">
                                Enter your email address or mobile number to receive
                                new exclusive deals as soon as we have them!
                                </div>
                                </div>
                            </div>
                            <div style={{ height: '30px' }}></div>
                            <div className="aboutShoppingStore">
                                <div className="normalMainHeading">
                                 {descriptionHeading}
                                </div>
                                <div style={{ height: '15px' }}></div>
                                <div className="normalParagraph">
                                   {seoDescription}
                                </div>
                            </div>
                            <div style={{ height: '30px' }}></div>
                            <div className="topStores">
                                <div className="headerTopStores">
                                    <div className="normalMainHeading">
                                       Popular Stores
                                    </div>
                                    <div className="seeAll" onClick={()=>{
                                        navigate(`/all-stores`);
                                    }}>
                                        See all
                                    </div>
                                </div>
                                <div className="namesTopStores">
                                            <Grid container>
                                                <Grid item lg={12}>
                                                    <Grid container sx={{ marginX: '' }}>
                                                        {popularStores.map((item, index) => (
                                                        <Grid item key={index} xs={4} sm={4} md={4} lg={4}>
                                                        <div className='storeLogo' onClick={()=>{
                                                            navigateToStore(item.storeName,{"title":item.metaTilte,"description":item.metaDescription,"tagLine":item.discountType==='%'?`Upto ${item.discountValue}% Discount`:`Discount upto ${item.discountCurrecy}${item.discountValue} `});
                                                        }}>
                                                          <img src={item.logoUrl} alt="" srcset="" />
                                                        </div>
                                                        </Grid>
                                                    ))}
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                </div>
                            </div>
                            <div style={{ height: '30px' }}></div>
                            {/* <div className="couponImageType">
                                    <div className="couponImageTypeSub">
                                     <div className="small">
                                        
                                        <img src="https://images.crunchbase.com/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/dke6pt7l5f3jihkmhjzm" alt="" srcset="" />
                                        <div style={{ height: '15px' }}></div>
                                        <p>
                                        Coupon Code
                                        </p>
                                        <div className="couponCode">
                                            A4152F
                                        </div>
                                        <h6>
                                        Copy the Above Code and Paste at Checkout
                                      </h6>
                                      <h5>
                                        Upto 80% Off + Extra 10%
                                      </h5>
                                      <p>
                                        Ali Express
                                    </p>
                                     <div className="lastSection">
                                        <div className="first">

                                        </div>
                                        <div className="second">
                                            <img className='logoImg'  src="https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/logo.png?alt=media&token=c1702995-c7d6-43cc-a9e7-632cc8717922" alt="" srcset="" />
                                            <img className='flagImg'  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Flag_of_Pakistan.svg/320px-Flag_of_Pakistan.svg.png" alt="" srcset="" />
                                        </div>
                                     </div>
                                     </div>
                                    </div>       
                                </div> */}
                                <div style={{ height: '30px' }}></div>
                                {/* <div className="storeFeatures">
                                    <div className="normalMainHeading">
                                       Store Features
                                    </div>  
                                    <div style={{ height: '15px' }}></div>
                                        <div className="features">
                                            <div className='circleStyle'>
                                                <div className='subcircleStyle'>
                                                    <img src="https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/support.png?alt=media&token=115d560d-5f29-442c-b364-5d5d7ead71aa" height='40px' width='40px' alt="" srcset="" />
                                                </div> 
                                            </div> 
                                            <h1>
                                                Customer Support 24/7
                                                </h1> 
                                        </div>
                                        <div style={{ height: '10px' }}></div>
                                        <div className="features">
                                            <div className='circleStyle'>
                                                <div className='subcircleStyle'>
                                                    <img src="https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/security.png?alt=media&token=2c39d2c9-ba6d-49e0-aa17-0f68410a8587" height='40px' width='40px' alt="" srcset="" />
                                                </div> 
                                            </div> 
                                            <h1>
                                            Extended warranty
                                                </h1> 
                                        </div>  
                                        <div style={{ height: '10px' }}></div>
                                        <div className="features">
                                            <div className='circleStyle'>
                                                <div className='subcircleStyle'>
                                                    <img src="https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/return.png?alt=media&token=cf1bc8d9-e441-4986-9bd9-caae348411ca" height='40px' width='40px' alt="" srcset="" />
                                                </div> 
                                            </div> 
                                            <h1>
                                            Free Returns
                                                </h1> 
                                        </div>  
                                </div> */}
                                {/* <div style={{ height: '30px' }}></div> */}
                                {/* <div className="storeFeatures">
                                    <div className="normalMainHeading">
                                       Shipping Methods
                                    </div>  
                                    <div style={{ height: '15px' }}></div>
                                        <div className="features">
                                            <div className='circleStyle'>
                                                <div className='subcircleStyle'>
                                                    <img src="https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/shop.png?alt=media&token=f4e78a33-ea7d-45ff-8b2e-e1353bfd5ba0" height='40px' width='40px' alt="" srcset="" />
                                                </div> 
                                            </div> 
                                            <h1>
                                                In-Store Pickups
                                                </h1> 
                                        </div>
                                        <div style={{ height: '10px' }}></div>
                                        <div className="features">
                                            <div className='circleStyle'>
                                                <div className='subcircleStyle'>
                                                    <img src="https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/icon-delivery.png?alt=media&token=ed1f5eaa-212c-41d8-be3c-d6717e8e3ac4" height='40px' width='40px' alt="" srcset="" />
                                                </div> 
                                            </div> 
                                            <h1>
                                            Same Day Delivery
                                                </h1> 
                                        </div>  
                                        <div style={{ height: '10px' }}></div>
                                        <div className="features">
                                            <div className='circleStyle'>
                                                <div className='subcircleStyle'>
                                                    <img src="https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/icon-delivery.png?alt=media&token=ed1f5eaa-212c-41d8-be3c-d6717e8e3ac4" height='40px' width='40px' alt="" srcset="" />
                                                </div> 
                                            </div> 
                                            <h1>
                                            Standard shipping
                                                </h1> 
                                        </div>  
                                </div>
                                <div style={{ height: '30px' }}></div>
                                <div className="storeFeatures">
                                    <div className="normalMainHeading">
                                       Payment Methods
                                    </div>  
                                    <div style={{ height: '15px' }}></div>
                                        <div className="features">
                                            <div className='circleStyle'>
                                                <div className='subcircleStyle'>
                                                    <img src="https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/cash-on-delivery.png?alt=media&token=9367e391-5522-441a-94ad-35ceee5d452b" height='40px' width='40px' alt="" srcset="" />
                                                </div> 
                                            </div> 
                                            <h1>
                                                Cash on Delivery
                                                </h1> 
                                        </div>
                                        <div style={{ height: '10px' }}></div>
                                        <div className="features">
                                            <div className='circleStyle'>
                                                <div className='subcircleStyle'>
                                                    <img src="https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/credit-card.png?alt=media&token=08e6fe25-2b8b-4093-ba4b-318f2ef39777" height='40px' width='40px' alt="" srcset="" />
                                                </div> 
                                            </div> 
                                            <h1>
                                            Credit Card
                                                </h1> 
                                        </div> 
                                        <div style={{ height: '10px' }}></div> 
                                        <div className="features">
                                            <div className='circleStyle'>
                                                <div className='subcircleStyle'>
                                                    <img src="https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/pay.png?alt=media&token=abdbdc72-da9c-4697-804c-ce9eba3dd35b" height='40px' width='40px' alt="" srcset="" />
                                                </div> 
                                            </div> 
                                            <h1>
                                            Paypal
                                                </h1> 
                                        </div>  
                                </div>
                                <div style={{ height: '30px' }}></div> */}
                                <div className="aboutShoppingStore">
                                    <div className="normalMainHeading">
                                    {longDescriptionHeading}
                                    </div>
                                    <div style={{ height: '15px' }}></div>
                                    <div className="normalParagraph">
                                    {longDescription}
                                    </div>
                                </div>
                                <div style={{ height: '30px' }}></div>
                                <div className="aboutShoppingStore">
                                    <div className="normalMainHeading">
                                    {aboutHeading}
                                    </div>
                                    <div style={{ height: '15px' }}></div>
                                    <div className="normalParagraph">
                                    {about}
                                    </div>
                                </div>
                                <div style={{ height: '30px' }}></div>
                        </div>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={1} sm={1} xl={1} lg={1} md={1}></Grid>
            <Grid item xl={12} lg={12} md={12}>
            <Footer />
            
            </Grid>
        </Grid>
        {isLoading?<CouponCodeModal    />:<div></div>}
        {isLoading2?<MainLoader/>:<></>}
        {isSuccessTrue?<PopUp2 exclaimation={"Wohoo!"} mainLine={`Your Subscription For Store ${storeName} Has Been Submitted.`} paraLine={"Now you can receive new exclusive deals & coupons as soon as we have."} />:<></>}
        {isErrorTrue?<PopUp3 paraLine={`${email} this email is already Done Subscription of Store ${storeName}`} />:<></>}
        </>

    )
} 