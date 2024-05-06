import React, { useRef, useEffect } from 'react';
import '../../couponsPage/index.css'
import Grid from '@mui/material/Grid';

export default function CouponCardAllDesign(props){
    return (
        <>
          <div className='mainCardCoupon'>
            <div className='couponCard'>
                <div className='brandLogo'>
                   <img src={props.brandLogo} alt="" srcset="" />
                </div>
                <div className="off">
                {props.type==='$'?<p>Upto {props.type}{props.off} off</p>:<p>Upto {props.off}{props.type} off</p>}
                
                </div>
                
                <div className="number">
                <div className="subNumber">
            </div>
                </div>
                <div className="mainNumber">
                {props.code}
                </div>
                <div className='right'></div>
                <div className='left'></div>
                <div className='dashedLine'></div>
            </div>
            
        </div>
        </>
    )}