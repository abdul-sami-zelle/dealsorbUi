import {useEffect, useState } from 'react'
import CatName from '../../components/catName'
import { Provider } from 'react-redux';
import ImageSwitcher from '../../pages/productDetails'
import "react-multi-carousel/lib/styles.css";
import './index.css'
import ResponsiveAppBar from '../../components/bar2'
import Box from '@mui/material/Box';
import { useLocation } from 'react-router-dom';
import { useData } from '../../context/myData';
import { useParams } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Footer from '../../components/footer'
import SEO from '../../SEO/mainSEO';

export default function ShowableProductDetails(props) {
  const { productData } = useData();
  const { productName } = useParams();
  const parsedProductArray = productName;
    const colorList = ['#FF5733', '#33FFA6', '#3366FF', '#FF33E9'];
    const variations = ['xs', 'sm', 'md', 'lg', 'xl'];
    useEffect(() => {
      // Scroll to the top of the page on component mount
      window.scrollTo(0, 0);  
    }, []);

    return(
      <Box sx={{backgroundColor:'white '}}>
        
     <Grid container>
      <Grid item lg={12} md={12} sm={12} xs={12}>
          <ResponsiveAppBar activePage={'Deal & Coupons'} />
      </Grid>
     </Grid>

      
      <Grid container>
        <Grid item lg={0.5} md={0.5} sm={0.5} xs={0.5}>

        </Grid>
        <Grid item lg={11} md={11} sm={11} xs={11}>
          <div style={{height:'30px'}}></div>
          <div className="App">
            <ImageSwitcher
             productData={productData}
             />
          </div>
          <div style={{height:'30px'}}></div>
          <CatName categoryHeading="Today's" productHeading="Related Products"/>
          <div style={{height:'30px'}}></div>
        </Grid>
        <Grid item lg={0.5} md={0.5} sm={0.5} xs={0.5}>

        </Grid>
      </Grid>
      <Footer/>
      </Box>
    )
} 