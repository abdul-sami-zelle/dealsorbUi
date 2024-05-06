import React from 'react';
import Box from '@mui/material/Box';
import App222 from './coupon22'; 

const EkoshHeader = () => {
  const headerStyles = {
    textTransform: 'uppercase',
    backgroundImage: 'linear-gradient(-225deg, black 0%, #1A9BF7 29%, black 67%, #1A9BF7 100%)',
    backgroundSize: 'auto auto',
    backgroundClip: 'border-box',
    backgroundSize: '200% auto',
    color: '#fff',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textFillColor: 'transparent',
    animation: 'textclip 6s linear infinite',
    display: 'inline-block',
    fontSize: '50px',
    fontWeight:'bolder',
    fontFamily:'laterfont'
  };

  return (
    <Box sx={{position:'absolute',right:'8%', width:'30%', mt:'2%' }}>
      <Box >
     
          <h3 className="animate-charcter" style={headerStyles}>
           Unbeatable Deals Await You!
          </h3>
       
      </Box>
      <style>
        {`
        @keyframes textclip {
          to {
            background-position: 200%;
          }
        }
        `}
      </style>
      <App222/>
    </Box>
  );
};

export default EkoshHeader;
