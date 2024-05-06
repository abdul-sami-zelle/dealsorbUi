import React, { useEffect, useState } from 'react';
import './mobileViewNewArrivals.css'
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import CatName from '../catName';

export default function MobileViewNewArrivals() {
    return(
        <>
         <div style={{height:'30px'}}></div>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <CatName categoryHeading="This Month" productHeading="New Arrivals"/>
        <div style={{height:'15px'}}></div>
        <Button className='seeAllBtnMobilePr'>
           See All
        </Button>
        </div>
        <div style={{height:'12px'}}></div>
            <div className="mainMobileNewArrival">
                <Grid container columnSpacing={1}>
                    <Grid item lg={6} md={6} sm={6} xs={6}>
                        <div className="mainArrivalMobile">
                        <div className="subArrivalMobile01">
                           <div className="internalDataMobileNewArrival">
                            <h1>
                            PlayStation 5
                            </h1>
                              <p>
                              Black and White version of the PS5 coming out on sale.
                              </p>
                              <Button variant='outlined'>
                                  Shop Now
                              </Button>
                              
                           </div>
                        </div>
                        <div className="subArrivalMobile02">
                        <div className="internalDataMobileNewArrival">
                            <h1>
                            PlayStation 5
                            </h1>
                              <p>
                              Black and White version of the PS5 coming out on sale.
                              </p>
                              <Button variant='outlined'>
                                  Shop Now
                              </Button>
                              
                           </div>
                        </div>

                        </div>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={6}>
                      <div className="mainArrivalMobile2">
                      <div className="subArrivalMobile1">
                      <div className="internalDataMobileNewArrival">
                            <h1>
                            PlayStation 5
                            </h1>
                              <p>
                              Black and White version of the PS5 coming out on sale.
                              </p>
                              <Button variant='outlined'>
                                  Shop Now
                              </Button>
                              
                           </div>
                        </div>
                        <div className="subArrivalMobile2">
                        <div className="internalDataMobileNewArrival">
                            <h1>
                            PlayStation 5
                            </h1>
                              <p>
                              Black and White version of the PS5 coming out on sale.
                              </p>
                              <Button variant='outlined'>
                                  Shop Now
                              </Button>
                              
                           </div>
                        </div>

                      </div>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}