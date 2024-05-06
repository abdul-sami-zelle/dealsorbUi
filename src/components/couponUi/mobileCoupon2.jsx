import React, { useEffect, useState } from 'react';
import './mobileCoupon.css';
import Button from '@mui/material/Button';

export default function MobileCoupon2(props){
    return (
        <div className='mainnnn'>
        <div className="mainCouponMobileDiv2">
            <div className="topCouponPart">
                <img src={props.url} alt="" srcset="" />
            </div>
            <div className="bottomCouponPart">
                {/* <div className="verified">
                    <img src="https://cdn-icons-png.flaticon.com/512/7595/7595571.png" alt="" srcset="" />
                </div> */}
          
              <div className="bottomCouponPartSec1">
              <h2>
                    {props.brand}
                </h2>
                {/* <Button >Get</Button> */}
              </div>
                <h3>
                    valid till {props.validTill}
                </h3>
            </div>
            <div className="leftCircleMobile2">

            </div>
            <div className="dashedhorizontalLine"></div>
            <div className="rightCircleMobile2">

            </div>
            <div className="couponOfferMob">
                {props.percent}% off
            </div>
        </div>
        </div>
    )
}