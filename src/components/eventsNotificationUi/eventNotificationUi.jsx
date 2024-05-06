import React, { useEffect, useState } from 'react';
import './eventNotificationUi.css'
import deal from '../../assets/deal.png'
import event from '../../assets/event.png'
import eventO from '../../assets/eventO.png'
import gifts from '../../assets/gifts.png'
import discount from '../../assets/discount.png'
import Button from '@mui/material/Button';
import {useNavigate } from 'react-router-dom';


function EventNotification() {
 
    const [eventsData, seteventsData] = useState([]);

    const navigate = useNavigate();
    const handleNavigate = (categoryValue,e) => {
      // Navigate to the desired route with the category parameter
      navigate(`/events/${categoryValue}`,{state:e});
    };
    const handleNavigate2 = () => {
        // Navigate to the desired route with the category parameter
        navigate(`/events`);
      };

    useEffect(() => {
      // Fetch data from your API endpoint
      fetch('https://coupon-backend-tau.vercel.app/api/v1/event/get-all')
        .then((response) => response.json())
        .then((data) => {
          // Set the store data in state
          seteventsData(data.events);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }, []);
    return(
        <>  
            
            <div style={{height:'10px'}}></div>
                    <div className="headingEvNotiTab">
                    <h3 style={{
                      
                      fontSize:'20px',
                      color:'orange',
                      fontWeight:'bolder',
                      
                   
                     }}><img style={{marginBottom:'4px'}} src={eventO} width={24} height={24} alt="" /> Occasions</h3>
                     <p onClick={()=>{
                        handleNavigate2();
                     }} style={{
                        cursor:'pointer'
                     }}>
                        see all
                     </p>
                    </div>
            {eventsData.map((data, index) => ( 
                <div className="mainEventNoificationTab" onClick={()=>{
                    handleNavigate(data.title,{"title":data.metaTitle,"description":data.metaDescription})
                }}>
                <div style={
                    {
                        backgroundImage:
                        `url('${data.imgUrl}')`,
                    }
                } className="backImgEventNoti">
                    <div className="overlayImgNotiEv">
                       
                    </div>
                    <div className="nameSection">
                            <h1>
                               {data.title}
                            </h1>
                    </div>
                    {/* <div className="getEvent">
                    <Button variant="outlined" className='getBeneEveNoti'>
                        <p>Get Benifits</p>
                    </Button>
                    </div> */}
                    <div className="offersOccasions">
                        <div className="eveNotiDeals">
                            <img src={gifts} width={20} height={20} alt="" srcset="" />
                            <div className="eveNotiDealsSub">
                                <h3>
                                    Deals
                                </h3>
                                <p>
                                    10
                                </p>      
                            </div>
                        </div>
                        <div className="eveNotiDeals">
                            <img src={deal} width={20} height={20} alt="" srcset="" />
                            <div className="eveNotiDealsSub">
                                <h3>
                                    Coupons
                                </h3>
                                <p>
                                    10
                                </p>      
                            </div>
                        </div>
                        <div className="eveNotiDeals">
                            <img src={discount} width={20} height={20} alt="" srcset="" />
                            <div className="eveNotiDealsSub">
                                <h3>
                                    Discount
                                </h3>
                                <p>
                                    10%<br/>Discount
                                </p>      
                            </div>
                        </div>
                    </div>
                </div>
                
            </div> 
             ))}   
             
        </>
    )
}
export default EventNotification;