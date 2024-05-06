import React, { useEffect, useState } from 'react';
import './couponsCategories.css';
import CouponUI2 from './couponsUi2';
import {useNavigate } from 'react-router-dom';
import { ShimmerButton } from 'react-shimmer-effects';


const Loader = () => <div style={{
  display:'flex',
  flexDirection:'column',
  alignItems:'center',
  
}}>
  <div className='loader111'></div>
  <div className='loader111'></div>
  <div className='loader111'></div>
  <div className='loader111'></div>
  <div className='loader111'></div>
</div>;

export default function CouponCategories(){
    const [isLoading, setIsLoading] = useState(true);
    const [couponCat, setCouponCat] = useState([]);
    const navigate = useNavigate();
    const handleNavigate = (categoryValue,e) => {
      // Navigate to the desired route with the category parameter
      navigate(`/coupon-category/${categoryValue}`,{state:e});
    };
    // const { setCatCouponData } = CategoryCouponData();
    useEffect(() => {
      // Fetch data from your API endpoint
      fetch('https://coupon-backend-tau.vercel.app/api/v1/category/get-all')
        .then((response) => response.json())
        .then((data) => {
          // Set the store data in state
          setCouponCat(data.categories);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }, []);


   
    return (
      
            
            <div className='mainCouponCate'>
       
         <div className="categoriesHeaderCoupon">
                <div className="leftPadd">

                </div>
                <img src="https://cdn-icons-png.flaticon.com/128/3405/3405802.png" alt="" srcset="" />
                <h1>
                   Coupon Categories
                </h1>
            </div>
        <div style={{height:'10px'}}></div>
        <div className='divv1'>
      {isLoading ? ( // Render loader if loading is true
        <Loader />
      ) : (
        couponCat.map((item) => (
          <div 
            key={item.category} // Remember to add a unique key for each item in the list
            onClick={() => handleNavigate(item.category, { "title": item.metaTitle, "description": item.metaDescription })}
          >
            <CouponUI2 url={item.image} brand={item.category} off={"30"} />
          </div>
        ))
      )}
    </div>
        <div style={{height:'10px'}}></div>


       

        </div>
     
      
        )
    }