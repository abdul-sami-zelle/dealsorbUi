import './allEvents.css'
import event1pic from '../../../public/ramadan.png'
import box from '../../assets/box.png'
import React, { useState, useEffect } from 'react';
import {useNavigate } from 'react-router-dom';


const getStatus = (startDate, endDate) => {
    const currentDate = new Date();
    const start = new Date(startDate);
    const end = new Date(endDate);
  
    if (currentDate < start) {
      return 'coming';
    } else if (currentDate > end) {
      return 'expired';
    } else {
      return 'ongoing';
    }
  };

export default function EventComponent({eventName,eventDescription,startDate,endDate,title,description}) {
    const navigate = useNavigate();
    const handleNavigate = (categoryValue,e) => {
        // Navigate to the desired route with the category parameter
        navigate(`/events/${categoryValue}`,{ state: e });
      };

    const calculateTimeLeft = () => {
        const currentDate = new Date();
        const start = new Date(startDate);
        const end = new Date(endDate);

        const difference = +new Date(currentDate < start? startDate : currentDate > end?null:endDate ) - +new Date();
        let timeLeft = {};
    
        if (difference > 0) {
          timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
          };
        }
    
        return timeLeft;
      };
    
      const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    
      useEffect(() => {
        const timer = setTimeout(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);
    
        return () => clearTimeout(timer);
      });
    
      const formatTime = (time) => {
        return `${time.days} days ${time.hours} hours ${time.minutes} minutes ${time.seconds} seconds`;
      };
    
    return(
        <>
        <div className="mainEventComponent">
            <div style={{
                height:'10px'
            }}></div>
            <div style={{
                height:'600px',
                width:'600px',
                backgroundImage:`url(${event1pic})`,
                backgroundSize:'600px 600px',
                backgroundRepeat:'no-repeat'

            }}></div>
            <div className="EventComponentContent">
                <h6>
                    About Event
                </h6>
                <div style={{height:'10px'}}></div>
                <h1>
                    {eventName}
                </h1>
                <div style={{height:'10px'}}></div>
                <div className="underline1">
                    <span className='underline1A'></span>
                    <span className='underline1B'></span>
                    <span className='underline1C'></span>
                </div>
                <div style={{height:'30px'}}></div>
                <p>
                    {eventDescription}
                </p>
                <div style={{height:'10px'}}></div>
                <div className= {getStatus(startDate, endDate)==='coming'?"eventStatusComing":getStatus(startDate, endDate)==='expired'?"eventStatusExpires":"eventStatusActive"}>
                    <p>{getStatus(startDate, endDate)==='coming'?"Upcoming":getStatus(startDate, endDate)==='expired'?"Expired":"Ongoing"}</p>
                </div>
                <div style={{height:'10px'}}></div>
                <div className="eventTimer">
                    {getStatus(startDate, endDate)!=='expired'? <div className="eventTimerHeading">
                        <img src={box} alt="" srcset="" />
                        <div style={{
                            display:'flex',
                            flexDirection:'column',
                            alignItems:'flex-start'
                        }}>
                           {getStatus(startDate, endDate)==='coming'? <h2>Coming In</h2>:getStatus(startDate, endDate)==='ongoing'?  <h2>Expires In</h2>:<h2>Expired</h2>}
                            {/* <h2 style={{fontSize:'20px'}}>Timer</h2> */}
                        </div>
                    </div>:<></>}
                    <div style={{height:'20px'}}></div>
                    
                 {getStatus(startDate, endDate)!=='expired' ? <div className="counterET">
                   <div className="daysET">
                        <div className="daysETA">
                            <h4 className="timeET">
                            {timeLeft.days < 10 ? `0${timeLeft.days}` : timeLeft.days}
                            </h4>
                            <h5 className="unitET">
                                Days
                            </h5>
                        </div>
                    </div>
                    <div className="daysET">
                        <div className="daysETA">
                            <h4 className="timeET">
                            {timeLeft.hours < 10 ? `0${timeLeft.hours}` : timeLeft.hours}
                            </h4>
                            <h5 className="unitET">
                                Hours
                            </h5>
                        </div>
                    </div>
                    <div className="daysET">
                        <div className="daysETA">
                            <h4 className="timeET">
                            {timeLeft.minutes < 10 ? `0${timeLeft.minutes}` : timeLeft.minutes}
                            </h4>
                            <h5 className="unitET">
                                Min
                            </h5>
                        </div>
                    </div>
                    <div className="daysET">
                        <div className="daysETA">
                            <h4 className="timeET">
                            {timeLeft.seconds < 10 ? `0${timeLeft.seconds}` : timeLeft.seconds}
                            </h4>
                            <h5 className="unitET">
                                Sec
                            </h5>
                        </div>
                    </div>
                   </div>:<></>}
                </div>

               {getStatus(startDate, endDate)!=='expired' && getStatus(startDate, endDate)!=='coming' ?  <div style={{height:'20px'}}></div>:<></>}
               {getStatus(startDate, endDate)!=='expired' && getStatus(startDate, endDate)!=='coming' ?  <button onClick={()=>{
                    handleNavigate(eventName,{"title":title,"description":description})
                }}>
                  View Deals & Coupons
                </button>:<></>}
            </div>

        </div>
        <div style={{
            width:'80%',
            height:'2px',
            backgroundColor:"#36454f",
            margin:'0 auto'
        }}>

        </div>
        </>
    )
}