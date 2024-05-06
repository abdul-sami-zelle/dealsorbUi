import React, { useEffect, useState, useRef } from 'react';
import './mobileViewCategoriesAndBestSale.css'
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import CatName from '../catName';
import ProductCard1 from '../widgets/productCard';
import SimpleProductCard from '../simpleProductCards/simplePrductCards';


export default function MobileViewCategoriesAnBestSale({dataList}) {
    return(
        <>
        <div style={{height:'30px'}}></div>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center', marginLeft:'15px',marginRight:'15px'}}>
        <CatName categoryHeading="Categories" productHeading="Best Selling Products"/>
        <div style={{height:'15px'}}></div>
        <Button className='seeAllBtnMobilePr'>
           See All
        </Button>
        </div>
        <div style={{height:'12px'}}></div>
         <div style={{marginLeft:'15px',marginRight:'15px'}}>
         <Grid container  spacing={1} rowSpacing={1.5}>
      {dataList.map((data, index) => (
        <Grid item key={index} xs={6} sm={4} md={2} lg={1.7}>
            <SimpleProductCard
            name={data.name}
            url={data.photo}
            price={data.price}
            description={data.description}
            rating={data.rating}
            brandLogo={data.brandLogo}
            arrayImages={data.arrayImages}
            colors=""
            sizes=""
          />
         
        </Grid>
      ))}
    </Grid>
         </div>
      
        </>
    )
} 

// "https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/viewCart.png?alt=media&token=b196a479-e558-470b-8bba-6688bd5c4492" 