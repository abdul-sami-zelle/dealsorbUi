import React, { useEffect, useState } from 'react';
import './couponsCategories.css';
import CouponUI2 from './couponsUi2';



export default function CouponUI(props){
    return (
        <>
        <div className="mainCouponUI">
            
        <div
            className="leftCouponPartUI"
            style={{
                // backgroundImage: {props.url},
                backgroundRepeat: "no-repeat",
                backgroundSize: 'contain',
                height: "80%",
                width: "30%",
                // backgroundColor: "red",
                borderRadius: "10px",
                margin: "5px"
            }}
        >
                <img src={props.url} alt="" srcset="" />
            </div>
            <div className="rightCouponPartUI">
                {/* <div className="verified">
                    <img src="https://cdn-icons-png.flaticon.com/512/7595/7595571.png" alt="" srcset="" />
                </div> */}
                {/* <h1>
                    {props.percent}% Off
                </h1> */}
                <h2>
                    {props.brand}
                </h2>
                {/* <h3>
                    valid unitill {props.validTill}
                </h3> */}
            </div>
            <div className="topCircleMobileUI">

            </div>
            <div className="dashedVerticalLineUI"></div>
            <div className="bottomCircleMobileUI">

            </div>
        </div>
        </>
    )
}