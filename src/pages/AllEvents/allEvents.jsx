import './allEvents.css'
import { Grid } from '@mui/material'
import ResponsiveAppBar from '../../components/bar2'
import Footer from '../../components/footer'
import event1pic from '../../../public/ramadan.png'
import EventComponent from './eventComponent'
import React, { useEffect, useState, useRef } from 'react';
import Timer from '../../components/timer1'
import eventO from '../../assets/eventO.png'
import SEO from '../../SEO/mainSEO'
import { useDispatch, useSelector } from 'react-redux';
import { setLoadingTrue, setLoadingFalse, selectLoadingState } from '../../stateManagement/slices/loadingSlice';
import CouponCodeModal from '../../components/Modals/couponCodeModal'

export default function AllEvents() {
    const [events, setEvents] = useState([]);
    useEffect(() => {
        // Fetch data from your API endpoint
        fetch(`https://coupon-backend-tau.vercel.app/api/v1/event/get-all`)
          .then((response) => response.json())
          .then((data) => {
            // Filter out only the events with status "enabled"
            const enabledEvents = data.events.filter(event => event.status === "enable");
            setEvents(enabledEvents);
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
          });
      }, []);
      
    return(
        <>
        <SEO title={"All Deals & Coupons Categories at DealsOrb"} name={""} description={"Discover exclusive savings across a multitude of categories at DealsOrb! From electronics to fashion, home goods to travel essentials, explore our extensive range of deals and coupons tailored to suit every shopper's needs. Enjoy unbeatable discounts and special offers on top brands, ensuring you get the best value for your money. Shop smarter and save bigger with DealsOrb today!"} type={""} />
        <ResponsiveAppBar/>
        
        <div className="allEventsMainPage">
            <Grid container>
                <Grid item lg={1}></Grid>
                <Grid item lg={10}>
                    <div className="bannerImgAllEvents">
                        <img src={eventO} alt="" srcset="" />
                        <h1>All Events</h1>
                    </div>
                 
                    {events.map((item, index) => (
                                 <EventComponent eventName={item.title} eventDescription={item.eventDetail} startDate={`${item.startDate}T00:00:00`} endDate={`${item.endDate}T00:00:00`} title={item.metaTitle} description={item.metaDescription}/>
                            ))}

                

                  

                </Grid>
                <Grid item lg={1}></Grid>
            </Grid>
        </div>
        <Footer/>
       
        </>

        
    )
}