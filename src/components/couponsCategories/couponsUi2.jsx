import React, { useEffect, useState } from 'react';
import './couponsCategories.css';
import electronics from '../../assets/electronics.png'


export default function CouponUI2(props){
    return(
        <>
        <div className="mainCouponUiDiv">
            <div className="topPartCouponUi2">
                <div className="imgSec">
                    <img src={props.url} alt="" srcset="" />
                </div>
                <div className="catCouponUi2Name">
                    <h1>
                        {props.brand}
                    </h1>
                </div>
            </div>
            <div className="bottomPartCouponUi2">
                <h1>
                    Upto {props.off}% Discount
                </h1>
            </div>
        </div>
        </>
    )
}