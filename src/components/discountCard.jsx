import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import Looks from '@mui/icons-material/Looks';

export default function DiscountCard1(props) {
    return (
        <Box
            sx={{
              height:{xl:'320px',lg: '280px',md:'250px',sm:'250px',xs:'220px'},
              width: {xl:'250px',lg: '210px',md:'200px',sm:'200px',xs:'160px'},
                borderRadius: '5px',
                backgroundColor: '#F5F5F5',
                boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"   ,
                display:'flex',
                flexDirection:'column',
            }}
        >  
          <Box
           sx={{
            margin:{xl:'10px',lg: '10px',md:'8px',sm:'6px',xs:'4px'},
            flexGrow:{xl:'10',lg: '10',md:'12',sm:'12',xs:'20'},
            backgroundColor:'red',
            borderRadius: '5px',
            backgroundColor: 'blue',
           position:'relative',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage:
            `url('${props.url}')`,
            // transition: 'transform 0.3s', // Add transition property for smooth zoom effect
            // '&:hover': {
            //     transform: 'scale(1.1)', // Zoom in by 10% on hover
            //     transformOrigin: 'center', // Keep the zoom centered within the box
            // },
        }}
        
          >
            <Box sx={{
                position:'absolute',
                top:'0px',
                left:'0px',
                height:{xl:'25px',lg: '25px',md:'23px',sm:'21px',xs:'21px'},
                width:{xl:'50px',lg: '50px',md:'44px',sm:'41px',xs:'41px'},
                backgroundColor:'#DB4444',
                borderRadius: '5px',
                display:'flex',
                alignItems:'center',
                justifyContent:'center'
            }}>
                <Typography sx={{color:"white",fontSize:'10px',fontWeight:'bold'}}>
                   {props.discount}% off
                </Typography>
            </Box>
          </Box>
          <Box
          sx={{
            flexGrow:'1',
            // display:'flex',
            // flexDirection:'column',
            // alignItems:'center',
            // justifyContent:'center'
            paddingX:'10px'
          }}
          >
        <Box sx={{}}>
        <Typography sx={{color:"#DB4444",fontSize:{xl:'15px',lg: '15px',md:'13px',sm:'12px',xs:'10px'},fontWeight:'bold'}}>
          {props.name}
        </Typography>
        <Rating name="read-only" size='2px' value={props.rating} readOnly />
        </Box>
        <Box sx={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-evenly'}}>
            <Button sx={{
                                width:{xl:'100px',lg: '90px',md:'80px',sm:'70px',xs:'65px'},
                                fontSize: {xl:'8px',lg: '8px',md:'8px',sm:'7px',xs:'7px'},
                                fontWeight: 'bold',
                                color: '#DB4444',
                                borderColor: '#DB4444',
                                borderWidth:'2px',
                                padding:{xl:'10px',lg: '10px',md:'10px',sm:'6px',xs:'6px'},
                                '&:hover': {
                                    backgroundColor: '#DB4444', // Set the hover color here
                                    color: 'white',
                                    borderColor: '#DB4444',
                                    borderWidth:'2px',
                                },
                            }} variant="outlined">Buy Now</Button>
            <Box sx={{width:'10px'}}></Box>
            <Button sx={{
                                // paddingX:'20px',
                                // paddingY:'0px',
                                padding:{xl:'10px',lg: '10px',md:'10px',sm:'6px',xs:'6px'},
                                backgroundColor:'#DB4444',
                                width:{xl:'100px',lg: '90px',md:'80px',sm:'70px',xs:'65px'},
                                fontSize: {xl:'8px',lg: '8px',md:'8px',sm:'7px',xs:'7px'},
                                fontWeight: 'bold',
                                color: 'white',
                                borderWidth:'2px',
                                borderColor: '#DB4444', // Set the border color here
                                '&:hover': {
                                    backgroundColor:"white",
                                    color: '#DB4444',
                                    borderColor: '#DB4444',
                                    borderWidth:'2px',
                                },
                            }} variant="outlined">Add To Cart</Button>
        </Box>
          </Box>
            
        </Box>
      
    );
}
