import React, { useEffect, useState } from 'react';
import './mobileCoupon.css';


export default function MobileCoupon(props){
    return (
        <>
        <div className="mainCouponMobileDiv">
        <div
            className="leftCouponPart"
            style={{
                backgroundImage: `url(${props.url})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: 'contain',
                height: "90%",
                width: "30%",
                // backgroundColor: "red",
                borderRadius: "10px",
                margin: "5px"
            }}
        >
                {/* <img src={props.url} alt="" srcset="" /> */}
            </div>
            <div className="rightCouponPart">
                {/* <div className="verified">
                    <img src="https://cdn-icons-png.flaticon.com/512/7595/7595571.png" alt="" srcset="" />
                </div> */}
                <h1>
                    {props.percent}% Off
                </h1>
                <h2>
                    {props.brand}
                </h2>
                <h3>
                    valid unitill {props.validTill}
                </h3>
            </div>
            <div className="topCircleMobile">

            </div>
            <div className="dashedVerticalLine"></div>
            <div className="bottomCircleMobile">

            </div>
        </div>
        </>
    )
}