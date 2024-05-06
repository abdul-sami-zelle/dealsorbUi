import React, { useEffect, useState, useRef } from 'react';
import '../../storesCouponsPage/stores.css'
import Button from '@mui/material/Button';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Close from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import { useDispatch, useSelector } from 'react-redux';
import { setLoadingTrue, setLoadingFalse, selectLoadingState ,setCouponData,getCouponData} from '../../../stateManagement/slices/loadingSlice';
import { FaLocationArrow } from 'react-icons/fa';


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

export default function CouponDescriptionStores({offer,title, description,code,descriptionHeading,promoCode,discountType,discountValue,applicableFor,couponValidity,trackingUrl,storeName,StoreLogo,type,id}) {
   const [isDivVisible, setIsDivVisible] = useState(true);
   const [isRedirect, setIsRedirect] = useState(false);
   const [newTab, setNewTab] = useState(null);


   const dispatch = useDispatch();

   const handleSetLoadingTrue = () => {
       console.log(selectLoadingState);
       dispatch(setLoadingTrue());
       console.log(selectLoadingState);
     };

//   const handleCopyButtonInsidePopupClick = () => {
//     // Update the URL of the new tab when the button is clicked inside the Popup
//     if (newTab) {
//       newTab.location.href = 'https://newurl.com';
//     }
//   };

  


    return(
        <div className='couponCardStorePageMain'>
           <div className="couponCardStorePage">
                <div className="section1">
                    <div className="couponsCardOffer">
                        {offer}
                    </div>
                    <div className="couponTag">
                        {type==='deal'?'Deal':'Coupon'}
                    </div>
                </div>
                <div className="section2">
                    {/* <div style={{
                        padding:'5px',
                        backgroundColor:'#F3F4F6',
                        height:'30px',
                        width:'60px',
                        display:'flex',
                        alignContent:'center',
                        
                        justifyContent:'center'
                    }}>
                        <p style={{color:'black',paddingBottom:'15px',fontSize:'15px',fontWeight:'normal'}}>CODE</p>
                    </div> */}
                    <div style={{height:'10px'}}></div>
                   <div className="couponMainHeading">
                        {title}
                        

                   </div>
                   <div style={{height:'20px'}}></div>
                   <div className="section2B">
                   <div className="couponCodeStorePageA">
                   <div style={{
                    display:'flex',
                    width:'100%',
                    justifyContent:'space-between',
                   }}>
                       <div style={{display:'flex',}}>
                           <div className="linkCouponCode">
                                <div className='circleStyle'>
                                    <div className='subcircleStyle'>
                                        <img src="https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/hotsale.png?alt=media&token=43dbc1ae-4083-44c8-b666-a8d29a8c25fd" height='40px' width='40px' alt="" srcset="" />
                                    </div> 
                                </div> 
                                    <h6>
                                        Hot Deal
                                    </h6> 
                            </div>
                            <div style={{width:'10px'}}></div>
                            <div className="linkCouponCode">
                                <div className='circleStyle'>
                                    <div className='subcircleStyle'>
                                        <img src="https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/like.png?alt=media&token=c9f5c5f1-e427-4018-8f5c-b75443a64953" height='40px' width='40px' alt="" srcset="" />
                                    </div> 
                                </div> 
                                <h6>
                                    Verified Coupon
                                </h6> 
                            </div>
                           </div>

                        <div style={{
                            display:'flex',
                            flexDirection:'column',
                            alignItems:'center'
                        }}>
                            <div className="couponCodeStorePage">
                                <Button onClick={
                                    ()=>{
                                        handleSetLoadingTrue();
                                        handleClick(id);
                                        dispatch(setCouponData({
                                            companyName:`${storeName}`,
                                            tagLine:`${offer}`,
                                            code:`${code}`,
                                            expiry:`${couponValidity}`,
                                            trackingUrl:`${trackingUrl}`,
                                            logo:`${StoreLogo}`,
                                            type:`${type}`
                                        }));
                                    }
                                } variant="contained" sx={{
                                    borderRadius: '12px',
                                    backgroundColor: '#DB4444', 
                                    paddingX: '50px',
                                    fontSize:'14px',
                                    fontWeight:'bold',
                                        
                                    }}> {type==='deal'?'Activate Deal':'Get Coupon'}</Button>
                                    
                                    




                                 
                                </div>
                                <div style={{height:'5px'}}></div>
                               {type==='deal'? <div style={{height:'15px'}}></div>: <p>
                                Copy the code above and paste at checkout.
                                </p>}
                                <p>
                               <a href={trackingUrl} target="_blank">Go To {storeName} website <span style={{marginLeft:'5px'}}><FaLocationArrow  /></span></a>
                                </p>
                        </div>
                
                   </div>
                                
                                {/* <p>
                                Copy the code above and paste at checkout.
                                </p>
                              */}
                            </div>
                        <div className='section2BCouponeDescriptionCode' style={{display:'flex',alignItems:'center',justifyContent:'space-between', }}>
                       
                          
                        </div>
                      
                   </div>
                   <div style={{height:'20px'}}></div>
                   <div on className="lastSectionCouponPage">
                        <div  style={{display:'flex'}}>
                             
                            {/* <div className="tab1">
                                    <h1>
                                        340
                                    </h1>  
                                    <h2>
                                            uses daily
                                    </h2> 
                                </div> 
                                <div style={{width:'5px'}}></div>
                                <div className="tab1">
                                    <h1>
                                        2 hours 
                                    </h1>  
                                    <h2>
                                            ago Last Used
                                    </h2> 
                                </div> 
                                <div style={{width:'5px'}}></div>
                                <div className="tab1">
                                    <h1>
                                        38.3 Dirmham
                                    </h1>  
                                    <h2>
                                            Last Saved
                                    </h2> 
                                </div>   */}
                        </div>
                        <div onClick={() => setIsDivVisible(!isDivVisible)} >
                        {isDivVisible? <div className="tab1">
                            {/* <div className="tab">
                                <h2>See Details</h2>
                            </div>
                            <div style={{width:'5px'}}></div> */}
                            <img src="https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/add.png?alt=media&token=c6a651b1-5c13-4012-8c6c-ab21cbb3bf75" alt="" />
                            
                            
                            </div>:<div className="tab1">
                        {/* <div className="tab">
                                <h2>Hide Details</h2>
                            </div>
                            <div style={{width:'5px'}}></div> */}
                            <img src="https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/minus.png?alt=media&token=13124ee7-6a2f-49bb-b574-8b4180b56fd3" alt="" srcset="" />
                            
                            
                        </div> }
                        </div>           
                   </div>



                   <div on className="lastSectionCouponPageMobile">
                        <div className='' >
                                <div style={{display:'flex' ,marginTop:"5px"}}>
                                <img style={{ height:'15px',width:'15px'}} src="https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/link.png?alt=media&token=947cc9b5-d8f7-4206-82dd-45a5b2c36efc" alt="" srcset="" />
                            <div style={{width:'5px'}}></div>
                            <div className="tab1">
                                    <h1>
                                        340
                                    </h1>  
                                    <h2>
                                            uses daily
                                    </h2> 
                                </div>
                                </div> 
                               <div style={{display:'flex',marginTop:"5px"}}>
                               
                                <div className="tab1">
                                    <h1>
                                        2 hours 
                                    </h1>  
                                    <h2>
                                            ago Last Used
                                    </h2> 
                                </div> 
                                
                               </div>
                                <div style={{display:'flex',marginTop:"5px"}}>
                                <div className="tab1">
                                    <h1>
                                        38.3 Dirmham
                                    </h1>  
                                    <h2>
                                            Last Saved
                                    </h2> 
                                </div>  
                                </div>
                        </div>
                        <div style={{display:'flex', alignItems:'center',justifyContent:'space-between',marginTop:"5px"}}>
                        <div>

                        </div>
                        <div onClick={() => setIsDivVisible(!isDivVisible)} className="tab1">
                        {isDivVisible? <img src="https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/add.png?alt=media&token=c6a651b1-5c13-4012-8c6c-ab21cbb3bf75" alt="" />: <div><img src="https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/minus.png?alt=media&token=13124ee7-6a2f-49bb-b574-8b4180b56fd3" alt="" srcset="" /></div>}
                        </div> 
                        </div>          
                   </div>








                </div>
           </div>
           {!isDivVisible &&
           <div className="couponDescription">
                <div className="couponMainHeading">
                {/* Activate the latest Noon coupon code 2023 and get Up to 50 Dirham Cashback On All Orders at Noon.com */}
                {descriptionHeading}
                </div>
                <div style={{height:'10px'}}></div>
                <div className="descriptionSectionCoupon">
                {description}
                </div>
                <div style={{height:'10px'}}></div>
                <div className="couponAttributes">
                    <div className="attrbutes">
                      
                        <h1>
                        Discount Value
                        </h1>
                        <h1>
                        Applicable For
                        </h1>
                         <h1>
                         {type==='deal'?'Deal':'Coupon'} Validity	
                         </h1>
                        
                    </div>
                    <div style={{width:'20px'}}></div>
                    <div className="values">
                  
                        <h1>
                       {discountType==='%'?'':discountType} {discountValue} {discountType==='%'?'%':""}
                        </h1>
                        <h1>
                        {applicableFor}
                        </h1>
                         <h1>
                         {couponValidity}	
                         </h1>
                    </div>
                </div>
           </div>
           }
        </div>
    )
} 