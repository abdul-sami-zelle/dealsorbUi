import React, { useEffect, useRef, useState } from "react";
import Grid from '@mui/material/Grid';
import './couponCategoryWise.css'
import ResponsiveAppBar from "../../components/bar2";
import CouponCardAllDesign from "../couponsPage/components/couponCardAllDesign";
import PopUp1 from "../../components/popUp/popUp1";
import Close from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { useParams } from 'react-router-dom';

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




function CouponCategoryWise() {
    const [categoricalCoupons, setCategoricalCoupons] = useState([]);
    const [popUpState, setPopUpState] = useState(false);
    const [couponCode, setCouponCode] = useState(null);
    const [couponLogo, setCouponLogo] = useState(null);
    const [storeName, setStoreName] = useState(null);

    const { category } = useParams();
    
    useEffect(() => {
      fetch(`https://coupon-backend-tau.vercel.app/api/v1/coupon/get-coupons/${category}`)
        .then((response) => response.json())
        .then((data) => {
          // Set the store data in state
          setCategoricalCoupons(data.coupons);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }, []);

    return(
        <div style={{
            position:'relative',
         
            
        }}>
                 <div style={{
            height:'300px',
            width:'600px',
            backgroundColor:popUpState===true?'white':'transparent',
            position:'absolute',
            zIndex:'9999',
            top:'30%',
            left:'30%',
            display:popUpState===true?'block':'none',
        }}>
         <div className='popupContent1'>
							<div className="upperContentPopup">
                               <div className="upperContentPopup1">
                                    <img src={couponLogo} height="40px" width="60px" alt="" />
                                    <p> {storeName} is offering you this coupon. Get and Enjoy...</p>
                               </div>
                               <IconButton onClick={() => {
                                // handleCopyButtonClick()
                               }} color="primary" sx={{ height: '30px', width: '30px' }}>
                                  <Close />
                                </IconButton>
                            </div>
                            <div className="lowerContentPopup">
                                <p>
                                    COPY THIS CODE AND USE AT CHECKOUT
                                </p>
                                <div className="codeCopyUiPopup">
                                    <div className="codeToCopy">
                                       {couponCode}
                                    </div>
                               
                                    <Button
                                      
                                        sx={{
                                            width:'25%',
                                            border: '1px solid #AD0000',
                                            
                                        background:' #FFF', color: '#AD0000',
                                        fontsize: '11px',
                                        fontweight: '700',
                                        borderRadius:'5px'
                                        }}>Copy</Button>
                                </div>
                                <div style={{height:'20px'}}></div>
                                <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                                    <div style={{display:'flex'}}>
                                       <div>
                                        <p>Did it Work?</p>
                                       <ButtonGroup variant="outlined" aria-label="outlined button group">
                                            <Button><img src="https://cdn-icons-png.flaticon.com/128/158/158420.png" height='20px' width='20px' alt="" srcset="" /></Button>
                                            <Button><img src="https://cdn-icons-png.flaticon.com/128/4989/4989793.png" height='20px' width='20px' alt="" srcset="" /></Button>
                                            <Button><img src="https://cdn-icons-png.flaticon.com/128/2956/2956792.png" height='20px' width='20px' alt="" srcset="" /></Button>
                                        </ButtonGroup>
                                       </div>
                                     
                                    </div>
                                 
                                </div>
                            </div>
						</div>
        </div>  
        <div onClick={() => setPopUpState(false)} style={{
            height:'100%',
            width:'100%',
            backgroundColor:popUpState===true?'black':'transparent',
            position:'absolute',
            zIndex:'999',
            opacity:'0.5',
            display:popUpState===true?'block':'none',
        }}>
     
        </div>
        <ResponsiveAppBar activePage={'Categories'} />
        <Grid container>


            <Grid item lg={1} ></Grid>
            <Grid item lg={10} >
                <div style={{
                    backgroundImage:`url("${"https://i.pinimg.com/originals/39/5c/bd/395cbdc769cbbc96a8d123a5f1f16e80.jpg"}")`,
                    backgroundColor:'#cccccc',
                    height:'200px',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    
                }}></div>

            </Grid>
            <Grid item lg={1} ></Grid>
             
            <Grid item lg={12}><div style={{height:'20px'}}></div></Grid> 

            <Grid item lg={1}>

            </Grid>
            <Grid item lg={10}>
                            <div className="storeNameHeading">
                                {category} Coupons and Promo Codes
                            </div>
                            <div style={{ height: '15px' }}></div>
            </Grid>
            <Grid item lg={1}>

            </Grid>



            <Grid item lg={1}>

      </Grid>
      
      <Grid item lg={10}>
        <Grid container spacing={4} sx={{ marginX: '' }}>
          {categoricalCoupons.map((item, index) => (
            <Grid item key={index} xs={6} sm={3} md={2} lg={1.5}>
                <div onClick={()=>
                    {
                        setPopUpState(true);
                        setCouponCode(item.couponCode);
                        setCouponLogo(item.imgUrl);
                        setStoreName(item.storeName);
                        setTimeout(() => {
                            // Open the website in a new tab
                            window.open(`${item.trackingUrl}`, '_blank');
                          }, 5000);
                        
                    }
                }>
                <CouponCardAllDesign type={item.discountType} brandLogo={item.imgUrl} off={item.discountValue} code={item.couponCode} />
                </div>
              
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item lg={1}>

      </Grid>




        </Grid>
       
        </div>
    )
}
export default CouponCategoryWise;