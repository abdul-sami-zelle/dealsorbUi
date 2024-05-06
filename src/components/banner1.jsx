import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import headphone from '../assets/headphone.png';
import Typography from "@mui/material/Typography";
import '../App.css'



export default function Banner1({title,subtitle,img,startDate,endDate,url}){



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

    const circleStyle = {
        width: {lg:'70px',md:'60px',sm:'50px',xs:'50px'},
        height: {lg:'70px',md:'60px',sm:'50px',xs:'50px'},
        borderRadius: '50%', // This creates the circular shape
        backgroundColor: {lg:'white',md:'white',sm:'white',xs:'white'}, // Example background color
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        // marginX:{lg:'30px',md:'40px',sm:'30px',xs:'30px'},
        
      };


    
    return (





        <Box sx={{ backgroundImage: 'linear-gradient(to left,#2B2B2B, #040406)',
        //  backgroundColor: '#666666',
        width:"100%",
            paddingX:{lg:'40px',md:'30px',sm:'20px',xs:'10px'},
            borderRadius:'10px',boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px'
            // paddingY:'30px',
            }}>
            <Grid container spacing={2} justifyContent="center" alignItems="center">
        
        <Grid item lg={8} md={8} sm={12} xs={12} >
            <Box sx={{
                
            }}>
               <Typography sx={{color:"#00FF66",fontWeight:'bold',fontSize:{lg:'40px',md:'28px',sm:'23px',xs:'18px'}}}>
                {title}
                </Typography> 
                <Typography sx={{ color: "white",
                fontWeight: 'bold',
                fontSize: { lg: '55px', md: '40px', sm: '35px', xs: '25px' },
                overflow: 'hidden',
                display: '-webkit-box',
                WebkitBoxOrient:'vertical',
                WebkitLineClamp: 2,
                textOverflow: 'ellipsis',}}>
                {subtitle}
                </Typography> 
                <Box sx={{height:'20px'}}></Box>
                <Grid container  >
                
                 <Grid item lg={1.5} md={2} sm={3} xs={3}>
                    <Box sx={circleStyle}>
                        <Typography sx={{fontWeight:'bold',fontSize:'15px'}}>
                        {timeLeft.days < 10 ? `0${timeLeft.days}` : timeLeft.days}
                        </Typography>
                        <Typography sx={{fontWeight:'normal',fontSize:'12px'}}>
                            Days
                        </Typography>
                    </Box>
                 </Grid>
                 <Grid item lg={1.5} md={2} sm={3} xs={3}>
                 <Box sx={circleStyle}>
                    
                        <Typography sx={{fontWeight:'bold',fontSize:'15px'}}>
                        {timeLeft.hours < 10 ? `0${timeLeft.hours}` : timeLeft.hours}
                        </Typography>
                        <Typography sx={{fontWeight:'normal',fontSize:'12px'}}>
                            Hours
                        </Typography>
                    </Box>
                 </Grid>
                 <Grid item lg={1.5} md={2} sm={3} xs={3}>
                 <Box sx={circleStyle}>
                        <Typography sx={{fontWeight:'bold',fontSize:'15px'}}>
                        {timeLeft.minutes < 10 ? `0${timeLeft.minutes}` : timeLeft.minutes}
                        </Typography>
                        <Typography sx={{fontWeight:'normal',fontSize:'12px'}}>
                            Min
                        </Typography>
                    </Box>
                 </Grid>
                 <Grid  item lg={1.5} md={2} sm={3} xs={3}>
                 <Box sx={circleStyle} >
                        <Typography sx={{fontWeight:'bold',fontSize:'15px'}}>
                        {timeLeft.seconds < 10 ? `0${timeLeft.seconds}` : timeLeft.seconds}
                        </Typography>
                        <Typography sx={{fontWeight:'normal',fontSize:'12px'}}>
                            Sec
                        </Typography>
                    </Box>
                 </Grid>
              
                 
                
                </Grid>
                <Button onClick={()=>{
                    window.open(url,'blank')
                }} sx={{backgroundColor:'#00FF66', marginY:'20px'}}>
                <Typography sx={{fontWeight:'normal',fontSize:'15px',color:'white',paddingX:{lg:'30px',md:'50px',sm:'55px',xs:'40px'},paddingY:'10px'}}>
                            Buy Now!
                        </Typography>
                </Button>
            </Box>  
        </Grid>
        <Grid item lg={4} md={4} sm={12} xs={12}>
            <Box sx={{padding:{lg:'20px',md:'20px',sm:'0px',xs:'0px'}}}>
                <img id='headphoneImg' src={img} alt="" srcset="" />
            </Box>
        </Grid>

</Grid>
        </Box>

    )
}