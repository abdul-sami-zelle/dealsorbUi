import React, { useEffect, useState, useRef } from 'react';
import './mobileViewCategories.css'
import mat from '../../assets/mat.png'
import baking from '../../assets/baking.png'
import cleaning from '../../assets/cleaning.png'
import kitchen from '../../assets/kitchen.png'
import shirts from '../../assets/shirts.png'
import menacc from '../../assets/menacc.png'
import toys from '../../assets/toys.png'
import water from '../../assets/waterbottle.png'
import Button from '@mui/material/Button';
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Box from '@mui/material/Box';
import CatName from '../catName';


export default  function MobileViewCategories(){
    const sliderRefM = useRef(null);
    const scrollAmountM = 150;
    return(
        <div className='mobview'>
        <div style={{height:'30px'}}></div>
       <div style={{display:'flex',justifyContent:'space-between',alignItems:'center', marginLeft:'15px',marginRight:'15px'}}>
       <CatName categoryHeading="Categories" productHeading="Popular Categories"/>
       <div style={{display:'flex'}}>
       <div
                        className="CategoriesScrollBtn"
                        onClick={() => {
                          const container = sliderRefM.current;
                          container.scrollLeft -= scrollAmountM;
                        }}
                      >
                        <ChevronLeftIcon />
                      </div>
        <div style={{width:'5px'}}>

        </div>
        <div
                        className="CategoriesScrollBtn"
                        onClick={() => {
                          const container = sliderRefM.current;
                          container.scrollLeft += scrollAmountM;
                        }}
                      >
                        <ChevronRightIcon />
                      </div>
       </div>
       </div>

       
       
        <Box ref={sliderRefM}  sx={{paddingTop:'',overflowX:'auto',width:'100%', scrollbarWidth: 'none','&::-webkit-scrollbar': {
            width: '0.4em', // Adjust the width as needed
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'transparent', // Hide thumb in webkit-based browsers
          },}}>
         
                      <div className="mainCategoryRow" style={{marginTop:'35px'}}>
         
         <div className="mainCategoryCircle" style={{backgroundColor:'#ACDDDE'}}>
           <img src={mat} alt=""  height='60px' width='80px' srcset=""/>
           <p>Bathroom Mats</p>
         </div>
         <div className="mainCategoryCircle" style={{backgroundColor:'#ACDDDE'}}>
           <img src={kitchen} alt="" srcset="" height='80px' width='80px' />
           <p>Baking Items</p>
         </div>
         <div className="mainCategoryCircle" style={{backgroundColor:'#ACDDDE'}}>
           <img src={cleaning} alt="" srcset="" height='80px' width='80px' />
           <p>Cleaning Items</p>
         </div>
         <div className="mainCategoryCircle" style={{backgroundColor:'#ACDDDE'}}>
         <div style={{width:'80px',height:'80px'}}>
           <img src={menacc} alt="" srcset="" height='60px' width='60px' />
           </div>
           <p>Cleaning Items</p>
         </div>
         <div className="mainCategoryCircle" style={{backgroundColor:'#ACDDDE'}}>
         <div style={{width:'80px',height:'80px'}}>
           <img src={shirts} alt="" srcset="" height='60px' width='60px' />
           </div>
           <p>Cleaning Items</p>
         </div>
         <div className="mainCategoryCircle" style={{backgroundColor:'#ACDDDE'}}>
         <div style={{width:'80px',height:'80px'}}>
           <img src={toys} alt="" srcset="" height='60px' width='70px' />
           </div>
           <p>Cleaning Items</p>
         </div>
         <div className="mainCategoryCircle" style={{backgroundColor:'#ACDDDE'}}>
           <div style={{width:'80px',height:'80px'}}>
              <img src={water} alt="" srcset="" height='60px' width='30px' />
           </div>
           <p>Cleaning Items</p>
         </div>
      </div>
     
        </Box>
        
        </div>
    )
}