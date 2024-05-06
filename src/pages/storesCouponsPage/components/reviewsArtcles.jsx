import React, { useEffect, useState, useRef } from 'react';
import '../../storesCouponsPage/stores.css'
import Button from '@mui/material/Button';

export default function ReviewsArticles(){
    return(
        <div className='reviewsArticles'>
           <div className="couponMainHeadingOffer">
                Reviews And Articles About Noon
            </div>
            <div style={{height:'15px'}}></div>
            <a href='https://uae.alcoupon.com/en/discount-codes/noon/storetitle-country-online-shopping-during-coronavirus' target="_blank" rel="noopener noreferrer">
                   Online Shopping during COVID19 
            </a>
        </div>
    )
}