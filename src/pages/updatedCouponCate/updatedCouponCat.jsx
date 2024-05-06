import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import ResponsiveAppBar from '../../components/bar2';
import './style.css';
import {useNavigate } from 'react-router-dom';
import CategoryDesign2 from '../../components/Product';
import Upd_Cat_Coupon from '../updatedCategoryBasedCoupons/upd_cat_cou';
import RoundedCat from '../../components/roundedCat/roundedCat';
import Carousel from "react-multi-carousel";
import { updateCouponCatCarousel } from '../../components/productData2';
import SEO from '../../SEO/mainSEO';
import RoundedCatLoader from '../../components/roundedCat/roundedCatLoader';


const LoaderData = ["1","2","3","4","5"];
 function UpdatedCouponView() {
  const navigate = useNavigate();
  const handleNavigate = (categoryValue,e) => {
    // Navigate to the desired route with the category parameter
    navigate(`/coupon-category/${categoryValue}`,{state:e});
  };
  const [categories, setCategories] = useState([]);

  const [categoryNames, setCategoryNames] = useState([]);
  const [popularCategories, setPopularCategories] = useState([]);

  const [isLoader, setIsLoader] = useState(true);
  

  useEffect(() => {
    // Fetch data from your API endpoint
    fetch('https://coupon-backend-tau.vercel.app/api/v1/category/get-all')
      .then((response) => response.json())
      .then((data) => {
     
        
        setCategories(data.categories);
        const extractedcategoryNames = data.categories.map(cat => cat.category);
        const popularCategories1 = data.categories.filter(cat => cat.popular === true);
        setCategoryNames(extractedcategoryNames);
        setPopularCategories(popularCategories1);
        console.log(categoryNames);
        console.log(popularCategories);
        setIsLoader(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const alphabets = [
    ...new Set([
      ...categoryNames.map(name => name[0].toUpperCase()).filter(char => /[A-Z]/.test(char)),
      ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    ]),
    '0-9' // Add a separate entry for stores starting with digits
  ].sort((a, b) => {
    if (a === '0-9') return 1;
    if (b === '0-9') return -1;
    return a.localeCompare(b);
  });
  
  
  const [selectedAlphabet, setSelectedAlphabet] = useState('A');

  const handleAlphabetClick = (alphabet) => {
    setSelectedAlphabet(alphabet);
  };

  const filteredNames = selectedAlphabet ? categoryNames.filter(name => name.toUpperCase().startsWith(selectedAlphabet)) : categoryNames;

  const numColumns = Math.min(Math.ceil(filteredNames.length / 5), 3);

  const renderNames = () => {
    const columns = [];
    for (let i = 0; i < numColumns; i++) {
      const start = i * 5;
      const end = Math.min((i + 1) * 5, filteredNames.length);
      const columnNames = filteredNames.slice(start, end);
      const column = (
        <ul key={i}>
          {columnNames.map((name, index) => {
            const category = categories.find(cat => cat.category === name);
            if (category) {
              return (
                <li 
                  className="nameItem" 
                  style={{ margin: '15px', textDecoration: 'none',cursor:"pointer" }} 
                  key={index}
                >
                  <div onClick={() => {
                    const selectedItem = {
                      title: category.metaTitle,
                      description: category.metaDescription,
                      totalStores: category.noStore,
                      totalCoupons: category.noCoupon,
                      totalDeals: category.noDeal,
                    };
                    handleNavigate(name, selectedItem);
                  }}>
                    {name}
                  </div>
                  {category.subCategory.length > 0 && (
                    <ul>
                      {category.subCategory.map((sub, subIndex) => (
                        <li 
                          key={subIndex}
                          onClick={() => {
                            const selectedItem = {
                              title: sub.metaTitle,
                              description: sub.metaDescription,
                              totalStores: sub.noStore,
                              totalCoupons: sub.noCoupon,
                              totalDeals: sub.noDeal,
                            };
                            handleNavigate(sub.category, selectedItem);
                          }}
                        >
                          {sub.category}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            } else {
              return null;
            }
          })}
        </ul>
      );
      columns.push(column);
    }
    return columns;
  };
  
  


    return (<>
        <SEO name={""} type={""} title={"All Categories of Deals & Coupons at dealsorb.com"} description={"All Categories of Deals & Coupons at dealsorb.com"} />
        <header>
        <ResponsiveAppBar activePage={'Categories'} />
        </header>

        {/* <Upd_Cat_Coupon/> */}
        
        <div className='updatedStoreMain'>
          

        <div className='alphabetsTop'>

              <Grid container>
                <Grid item lg={1}>
                    
                </Grid>
                <Grid item lg={10}>
                <div style={{height:'25px'}}></div>
                <h1 className='mainHeadingUCC'>
                  Top Coupons & Deals Categories
                  
                </h1>


{/* <div style={{
  display:"flex",
  alignItems:'flex-start',
  justifyContent:'center',
  marginTop:'25px',
  marginBottom:'35px'
}}> */}

<div style={{height:'25px'}}></div>

<Carousel responsive={updateCouponCatCarousel}>
  
  {isLoader?(LoaderData.map((item, index) => (
                             
                             <RoundedCatLoader/>
                         
                          ))):(popularCategories.map((item, index) => (
                             
                             <div style={{
                              paddingLeft:'10px'
                             }}onClick={()=>{
                              handleNavigate(item.category,{"title":item.metaTitle,"description":item.metaDescription,"totalStores":item.noStore,
                              "totalCoupons":item.noCoupon,
                              "totalDeals":item.noDeal,});
                            }} className='mainShopCard'>
                                 {/* <CategoryDesign2
    name={item.category}
    url={item.image}
    price=""
    description={item.description}
    product_no="1"
    rating="5"
  /> */}
  <RoundedCat name={item.category} img={item.image} />
                             </div>
                         
                          )))}
                          
            </Carousel>
                          {/* </div> */}

                          {/* <RoundedCat/> */}

  <hr />
  <div style={{height:'25px'}}></div>
                <h1 className='mainHeadingUCC'>
                    Browse categories Starting with {selectedAlphabet}
             </h1>
                 
      <div style={{
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
      }}>
        {/* Render alphabets at the top */}
        {alphabets.map((alphabet, index) => (
          <span key={index} style={{ marginRight: '5px', cursor: 'pointer', fontWeight: selectedAlphabet === alphabet ? 'bold' : 'normal', padding:'12px',borderBottom:selectedAlphabet === alphabet ?'4px solid black':'4px solid transparent'}} onClick={() => handleAlphabetClick(alphabet)}>
            {alphabet}
          </span>
        ))}
      
      </div>
                </Grid>
                <Grid item lg={1}>

                </Grid>
              </Grid>

      </div>
             
             <Grid container sx={{
                // backgroundColor:'white'
             }} >
                 <Grid item lg={1}>
 
                 </Grid>
                 <Grid item lg={10}>
            

     <div style={{ display: 'flex' }}>
        {/* Render names in bullet list view */}
        {renderNames().map((column, index) => (
          <div className='linkForStore' key={index} style={{ flex: 1 }}>
            {column}
          </div>
        ))}
      </div>



   
                 </Grid>
                 <Grid item lg={1}>
 
                 </Grid>
             </Grid>
        </div>
     </>)
}


export default UpdatedCouponView;