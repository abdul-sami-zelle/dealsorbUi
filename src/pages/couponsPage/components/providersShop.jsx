import React, { useEffect, useState, useRef } from 'react';
import '../../couponsPage/index.css'
import Grid from '@mui/material/Grid';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const couponsData = [
    {
        id: 1,
        name: "Noon",
        off:"10 % OFF",
        brandLogo:"https://wosu.org/wp-content/uploads/2020/04/Amazon-Logo-Transparent-PNG.png"
      },
      {
        id: 2,
        name: "Noon",
        off:"20 % OFF",
        brandLogo:"https://wosu.org/wp-content/uploads/2020/04/Amazon-Logo-Transparent-PNG.png"
      },
      {
        id: 3,
        name: "Noon",
        off:"30 % OFF",
        brandLogo:"https://wosu.org/wp-content/uploads/2020/04/Amazon-Logo-Transparent-PNG.png"
      },
      {
        id: 4,
        name: "Noon",
        off:"40 % OFF",
        brandLogo:"https://wosu.org/wp-content/uploads/2020/04/Amazon-Logo-Transparent-PNG.png"
      },
      {
        id: 2,
        name: "Noon",
        off:"20 % OFF",
        brandLogo:"https://wosu.org/wp-content/uploads/2020/04/Amazon-Logo-Transparent-PNG.png"
      },
      {
        id: 3,
        cname: "Noon",
        off:"30 % OFF",
        brandLogo:"https://wosu.org/wp-content/uploads/2020/04/Amazon-Logo-Transparent-PNG.png"
      },
      {
        id: 4,
        name: "Noon",
        off:"40 % OFF",
        brandLogo:"https://wosu.org/wp-content/uploads/2020/04/Amazon-Logo-Transparent-PNG.png"
      },
      {
        id: 4,
        name: "Noon",
        off:"40 % OFF",
        brandLogo:"https://wosu.org/wp-content/uploads/2020/04/Amazon-Logo-Transparent-PNG.png"
      },
      {
        id: 4,
        name: "Noon",
        off:"40 % OFF",
        brandLogo:"https://wosu.org/wp-content/uploads/2020/04/Amazon-Logo-Transparent-PNG.png"
      },{
        id: 4,
        name: "Noon",
        off:"40 % OFF",
        brandLogo:"https://wosu.org/wp-content/uploads/2020/04/Amazon-Logo-Transparent-PNG.png"
      },{
        id: 4,
        name: "Noon",
        off:"40 % OFF",
        brandLogo:"https://wosu.org/wp-content/uploads/2020/04/Amazon-Logo-Transparent-PNG.png"
      },{
        id: 4,
        name: "Noon",
        off:"40 % OFF",
        brandLogo:"https://wosu.org/wp-content/uploads/2020/04/Amazon-Logo-Transparent-PNG.png"
      },{
        id: 4,
        name: "Noon",
        off:"40 % OFF",
        brandLogo:"https://wosu.org/wp-content/uploads/2020/04/Amazon-Logo-Transparent-PNG.png"
      },{
        id: 4,
        name: "Noon",
        off:"40 % OFF",
        brandLogo:"https://wosu.org/wp-content/uploads/2020/04/Amazon-Logo-Transparent-PNG.png"
      },{
        id: 4,
        name: "Noon",
        off:"40 % OFF",
        brandLogo:"https://wosu.org/wp-content/uploads/2020/04/Amazon-Logo-Transparent-PNG.png"
      },
];

function ProviderShops(){
  const [popularStores, setPopularStores] = useState([]);
  const navigate = useNavigate();
  const handleNavigate = (categoryValue,e) => {
    // Navigate to the desired route with the category parameter
    navigate(`/all-stores/${categoryValue}`,{state:e});
  };
  useEffect(() => {
    // Fetch data from your API endpoint
    fetch('https://coupon-backend-tau.vercel.app/api/v1/store/get-all')
      .then((response) => response.json())
      .then((data) => {
     
        
        setPopularStores(data.popularStores);


      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
 
    return (
  
        
        <Grid container>
            <Grid item lg={0}>
            
            </Grid>
            <Grid item lg={12}>
            <Grid container spacing={4}  sx={{ marginX: '' }}>
      {popularStores.map((item, index) => (
        <Grid item key={index} xs={6} sm={3} md={2} lg={2}>
           <div onClick={()=>{
            handleNavigate(
              item.storeName, 
              { 
                "title": item.metaTitle, 
                "description": item.metaDescription, 
                "heading": item.heading, 
                "tagLine": item.discountType === '%' ? `Upto ${item.discountValue}% Discount` : `Discount upto ${item.discountCurrecy}${item.discountValue}`, 
                "faqs": item.Faqs, 
                "descriptionHeading": item.descriptionHeading, 
                "longDescriptionHeading": item.longDescriptionHeading, 
                "longDescription": item.longDescription, 
                "aboutHeading": item.aboutHeading, 
                "about": item.about
               }
            );
           }} className='mainShopCard'>
            <div className='shopCard'>
                <div className='brandLogo'>
                   <img title={item.metaTitle} src={item.imgUrl} alt="" srcset="" />
                </div>
                <div className="offer">
                    <p>{item.discountType === '%' ? `Upto ${item.discountValue}% Discount` : `Discount upto ${item.discountCurrecy}${item.discountValue} `}</p>
                </div>
                <div className="shopLink">
                    <p title={item.metaTitle}>{item.storeName}</p>
                </div>
            </div>
            
        </div>
        </Grid>
      ))}
    </Grid>
            </Grid>
            <Grid item lg={0}>

            </Grid>
        </Grid>

  
    )
}

export default ProviderShops;