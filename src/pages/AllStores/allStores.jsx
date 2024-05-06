import React, { useEffect, useState, useRef } from 'react';
import Grid from '@mui/material/Grid';
import '../couponsPage/index.css'
import ResponsiveAppBar from '../../components/bar2';
import Footer from '../../components/footer';
import { useNavigate } from 'react-router-dom';
import SEO from '../../SEO/mainSEO';

const loadingData = [
  "1", "2", "3", "4", "5", "6", "1", "2", "3", "4", "5", "6",
];

export default function AllStores() {
  const navigate = useNavigate();
  const handleNavigate = (categoryValue, e) => {
    // Navigate to the desired route with the category parameter
    navigate(`/all-stores/${categoryValue}`, { state: e });
  };
  const [stores, setStores] = useState([]);

  const [storeNames, setStoreNames] = useState([]);

  const [popularStores, setPopularStores] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Scroll to the top of the page on component mount
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Fetch data from your API endpoint
    fetch('https://coupon-backend-tau.vercel.app/api/v1/store/get-all')
      .then((response) => response.json())
      .then((data) => {


        setStores(data.stores);
        setPopularStores(data.popularStores);
        const extractedStoreNames = data.stores.map(store => store.storeName);
        setStoreNames(extractedStoreNames);

        console.log(storeNames);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const alphabets = [
    ...new Set([
      ...storeNames.map(name => name[0].toUpperCase()).filter(char => /[A-Z]/.test(char)),
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

  const filteredNames = selectedAlphabet === '0-9' ? 
  storeNames.filter(name => !isNaN(name[0])) :
  storeNames.filter(name => name.toUpperCase().startsWith(selectedAlphabet));


  const numColumns = Math.min(Math.ceil(filteredNames.length / 5), 3);

  const renderNames = () => {
    const columns = [];
    for (let i = 0; i < numColumns; i++) {
      const start = i * 5;
      const end = Math.min((i + 1) * 5, filteredNames.length);
      const columnNames = filteredNames.slice(start, end);
      const column = (
        <ul  key={i}>
          {columnNames.map((name, index) => {
            const store = stores.find(cat => cat.storeName === name);
            if (store) {
              return(
                <li onClick={() => {
                  handleNavigate(
                    store.storeName, 
                    { 
                      "title": store.metaTitle, 
                      "description": store.metaDescription, 
                      "heading": store.heading, 
                      "tagLine": store.discountType === '%' ? `Upto ${store.discountValue}% Discount` : `Discount upto ${store.country==='US'? '$' : store.country==='UK'? '£' : '€'} ${store.discountValue} `, 
                      "faqs": store.Faqs, 
                      "descriptionHeading": store.descriptionHeading, 
                      "longDescriptionHeading": store.longDescriptionHeading, 
                      "longDescription": store.longDescription, 
                      "aboutHeading": store.aboutHeading, 
                      "about": store.about,
                      "bannerImgUrl":store.bannerImgUrl
                     }
                  );
                }} className="nameItem" style={{
                  margin: '15px',
                  textDecoration: 'none',
                  cursor:'pointer'
                }} key={index}>{name}</li>
              )
            }else{
              return null;
            }
          
          })}
        </ul>
      );
      columns.push(column);
    }
    return columns;
  };


  return (
    <>
      <SEO name={""} type={""} title={"All Stores of Deals & Coupons at dealsorb.com"} description={"All Stores of Deals & Coupons at dealsorb.com"} />
      <header>
        <ResponsiveAppBar activePage={'Stores'} />
      </header>
      <main>
        <Grid container >
          <Grid items lg={1.5}>
          </Grid>
          <Grid items lg={9}>
            <Grid container>
              <Grid item lg={12}>
                <div className="allStoreBanner">

                </div>
              </Grid>
              <Grid item lg={12}>
                <div className="allCouponDealsHeading">
                  Popular Stores
                </div>
                <Grid container spacing={1.4} sx={{ marginTop: '10px', marginBottom: '40px' }}>

                  {isLoading ? (loadingData.map((item, index) => (
                    <Grid item key={index} xs={6} sm={3} md={2} lg={2}>
                      <div className='storeCardLoader'></div>
                    </Grid>
                  ))) : (popularStores.map((item, index) => (
                    <Grid item key={index} xs={6} sm={3} md={2} lg={2}>
                      <div onClick={() => {
                        handleNavigate(
                          item.storeName, 
                          { 
                            "title": item.metaTitle, 
                            "description": item.metaDescription, 
                            "heading": item.heading, 
                            "tagLine":item.discountType === '%' ? `Upto ${item.discountValue}% Discount` : `Discount upto ${item.country==='US'? '$' : item.country==='UK'? '£' : '€'} ${item.discountValue} `, 
                            "faqs": item.Faqs, 
                            "descriptionHeading": item.descriptionHeading, 
                            "longDescriptionHeading": item.longDescriptionHeading, 
                            "longDescription": item.longDescription, 
                            "aboutHeading": item.aboutHeading, 
                            "about": item.about,
                            "bannerImgUrl":item.bannerImgUrl
                           }
                        );
                      }} className='mainShopCard'>
                        <div className='shopCard'>
                          <div className='brandLogo'>
                            <img title={item.metaTitle} src={item.imgUrl} alt="" srcset="" />
                          </div>
                          <div className="offer">
                            <p>{item.discountType === '%' ? `Upto ${item.discountValue}% Discount` : `Discount upto ${item.country==='US'? '$' : item.country==='UK'? '£' : '€'} ${item.discountValue} `}</p>
                          </div>
                          <div className="shopLink">
                            <p title={item.metaTitle}>{item.storeName}</p>
                          </div>
                        </div>
                      </div>
                    </Grid>
                  )))}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid items lg={1.5}></Grid>
        </Grid>

        <div className='updatedStoreMain'>

          <div className='alphabetsTop'>
            <Grid container>
              <Grid item lg={1}>

              </Grid>
              <Grid item lg={10}>
                <h1 style={{
                  color: 'black',
                  fontSize: '24px',
                  margin: '32px 0px'
                }}>
                  Browse Stores Starting with {selectedAlphabet}
                </h1>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {/* Render alphabets at the top */}
                  {alphabets.map((alphabet, index) => (
                    <span key={index} style={{ marginRight: '5px', cursor: 'pointer', fontWeight: selectedAlphabet === alphabet ? 'bold' : 'normal', padding: '12px', borderBottom: selectedAlphabet === alphabet ? '4px solid black' : '4px solid transparent' }} onClick={() => handleAlphabetClick(alphabet)}>
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
          <div style={{
                  height:"100px"
                }}></div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}