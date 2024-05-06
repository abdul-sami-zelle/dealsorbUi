import React, { useEffect, useState, useRef } from 'react';
import '../../storesCouponsPage/stores.css'
import Button from '@mui/material/Button';

export default function TopUsersComments(){
    return(
        <div className='topUserComments'>
            <div className="couponMainHeadingOffer">
                Top Users Comments for Noon
            </div>
            <div style={{height:'15px'}}></div>
            <div className="lastSectionsTopComments">
            <div style={{width:'5px'}}></div>
               <div className="unHappyComment">
                    <div className='circleStyle'>
                        <div className='subcircleStyle'>
                            <img src="https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/sad-face.png?alt=media&token=36732335-a33c-47d3-bb90-3ad85ce39447" height='40px' width='40px' alt="" srcset="" />
                        </div> 
                    </div> 
                    <div style={{width:'5px'}}></div>
                    <h1>
                    Delays in delivery
                    </h1>
                </div>
                <div style={{width:'15px'}}></div>
                <div className="dislikeComment">
                    <div className='circleStyle'>
                        <div className='subcircleStyle'>
                            <img src="https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/dislike.png?alt=media&token=bb72c3e5-0bce-4c15-a503-312f949edb4d" height='40px' width='40px' alt="" srcset="" />
                        </div> 
                    </div> 
                    <div style={{width:'5px'}}></div>
                    <h1>
                    Limited customer support
                    </h1>
                </div>
            </div>
        </div>
    )
}