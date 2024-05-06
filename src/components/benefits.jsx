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


export default function Benefits() {
    const mainStyle = {
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    }
    const circleStyle = {
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        backgroundColor: 'grey',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center', 
      };
      const subcircleStyle = {
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        backgroundColor: 'black',
        display:'flex',
        alignItems:'center',
        justifyContent:'center', 
      };
      const mainHeading ={
        color:'black',
        fontSize:{lg:'20px',md:'18px',sm:'15px',xs:'12px'},
        fontWeight:'semibold',
        marginY:'10px'
      };
      const subHeading ={color:'black',fontSize:'14px',fontWeight:'regular'};
    return (
        <Box>
          <Grid  container spacing={4}>
            <Grid item lg={4} md={4} sm={12} xs={12}>
                <Box sx={mainStyle} >
                    <Box sx={circleStyle}>
                      <Box sx={subcircleStyle}>
                        <img src="https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/icon-delivery.png?alt=media&token=ed1f5eaa-212c-41d8-be3c-d6717e8e3ac4" height='40px' width='40px' alt="" srcset="" />
                      </Box> 
                    </Box>
                    <Typography sx={mainHeading}>
                    FREE AND FAST DELIVERY
                    </Typography>
                    <Typography sx={subHeading}>
                    Free delivery for all orders over $140
                    </Typography>
                </Box>
            </Grid>
            <Grid item lg={4} md={4} sm={12} xs={12}>
            <Box sx={mainStyle} >
            <Box sx={circleStyle}>
                      <Box sx={subcircleStyle}>
                        <img src="https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/Icon-Customer%20service.png?alt=media&token=e402d578-b648-4a28-beea-226177fd4d24" height='40px' width='40px' alt="" srcset="" />
                      </Box> 
                    </Box>
                    <Typography sx={mainHeading}>
                    FREE AND FAST DELIVERY
                    </Typography>
                    <Typography sx={subHeading}>
                    Free delivery for all orders over $140
                    </Typography>
                </Box>
            </Grid>
            <Grid item lg={4} md={4}  sm={12} xs={12}>
            <Box sx={mainStyle} >
            <Box sx={circleStyle}>
                      <Box sx={subcircleStyle}>
                        <img src="https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/Icon-secure.png?alt=media&token=7fd13ce6-a8d2-4be6-9db3-502136f1bea9" height='40px' width='40px' alt="" srcset="" />
                      </Box> 
                    </Box>
                    <Typography sx={mainHeading}>
                    FREE AND FAST DELIVERY
                    </Typography>
                    <Typography sx={subHeading}>
                    Free delivery for all orders over $140
                    </Typography>
                </Box>
            </Grid>
          </Grid>
        </Box>
      
    );
}
