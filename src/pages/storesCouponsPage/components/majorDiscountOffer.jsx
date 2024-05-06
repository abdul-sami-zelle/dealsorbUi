import React, { useEffect, useState, useRef } from 'react';
import '../../storesCouponsPage/stores.css'
import Button from '@mui/material/Button';

export default function MajorDiscountOffer(){
    return(
        <div className='majorDiscountOfferMain'>
            <div className="majorDiscountOfferMainSection1">
                <div style={{height:'5px',width:'5px'}}>

                </div>
               <div className="tipOffer">
               <img src="https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/bulb.png?alt=media&token=d3785a21-9cfb-4fc2-a790-93dd244427b0" alt="" srcset="" />
               <div style={{height:'7px'}}></div>
               <div className="couponTag">
                 Tip
               </div>
               </div>
            </div>
            <div className="majorDiscountOfferMainSection2">
                <div className="couponMainHeadingOffer">
                Score Major Noon Discounts and Offers
                </div>
                <div style={{height:'15px'}}></div>
                <div className="couponMainHeadingOffer">
                Are you looking for a valid Noon coupon code & deals for the month of August?
                </div>
                <div style={{height:'15px'}}></div>
                <p>
                    Keep checking this page as our team at alcoupon.com keeps updating this page with the most recent voucher codes and exclusive Noon promo codes valid in UAE.
                    Shop Noon's latest deals through the discounts section dedicated to all items on sale. Noon UAE offers great seasonal deals at huge discounts, reaching up to 50% on basic products and electrical appliances...
                </p>
                <div className="lastSubSectionOffer">
                    <img src="https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/link.png?alt=media&token=947cc9b5-d8f7-4206-82dd-45a5b2c36efc" alt="" srcset="" />
                    <Button variant="contained" sx={{ borderRadius: '20px', backgroundColor: '#DB4444', paddingX: '50px' }}>Shop Now</Button>
                </div>
            </div>
        </div>
    )
}