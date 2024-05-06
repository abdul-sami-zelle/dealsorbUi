import React, { useEffect, useState, useRef } from 'react';
import './cartMain.css'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import { useSelector, useDispatch } from "react-redux";
import {  getCartTotal,
  removeItem,
  decreaseItemQuantity,
  increaseItemQuantity, } from '../../stateManagement/slices/cartSlice';

function CartProductView() {

    const [count, setCount] = useState(0);

    const incrementCounter = () => {
      setCount(prevCount => prevCount + 1);
    };
  
    const decrementCounter = () => {
      if (count > 0) {
        setCount(prevCount => prevCount - 1);
      }
    };

    const { cart, totalQuantity, totalPrice } = useSelector(
      (state) => state.allCart
    );
  
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getCartTotal());
    }, [cart]);

    return(
        <div className="cartItems">
            <div className="imgCartItem">
              <img src="https://dealsorb.com/wp-content/uploads/2022/03/Fire-TV-Stick-Lite-with-latest-Alexa-Voice-Remote-Lite-no-TV-controls-HD-streaming-device.png" height="110px" width="110px" alt="" srcset="" />
            </div>
            <div className="contentCartItem">
                <h1>
                    Fire Tv Stick Live Fire Tv123 Stickyu Live
                </h1>
                <h2>
                    3 x Rs.1200 = Rs.3600
                </h2>
            <Box sx={{ display: 'flex', alignItems: 'center'  }}>
              <Box sx={{backgroundColor:"#DB4444", height: '30px', width: '30px', borderRadius: '5px 0px 0px 5px', borderLeft: '1px solid #DB4444',borderTop: '1px solid #DB4444',borderBottom: '1px solid #DB4444' ,borderRight: '0px solid #DB4444',display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={incrementCounter}>
                <AddIcon sx={{color:'white'}} />
              </Box>
             
              <Box sx={{ height: '30px', width: '30px', borderRadius: '0px', borderTop: '2px solid #DB4444',borderBottom:'2px solid #DB4444', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                <Typography sx={{ fontWeight: 'bold', fontSize: '15px', color: 'black',cursor:'pointer' }}>
                  {count}
                </Typography>

              </Box>
              
              <Box sx={{ backgroundColor:"#DB4444", height: '30px', width: '30px', borderRadius: '0px 5px 5px 0px', borderLeft: '0px solid #DB4444',borderTop: '1px solid #DB4444',borderBottom: '1px solid #DB4444' ,borderRight: '1px solid #DB4444', display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={decrementCounter}>
                <RemoveIcon sx={{color:'white'}}  />
              </Box>
            </Box>
            </div>
        </div>
    )
}

export default CartProductView;