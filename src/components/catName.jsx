import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import 'aos/dist/aos.css'; // Import the AOS styles
import AOS from 'aos'; // Import the AOS library


function CatName({ categoryHeading, productHeading }) {
  React.useEffect(() => {
    AOS.init();
  }, []);
  const [count, setCount] = useState(0);

  return (
    <Box sx={{  }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'start' }}>
        <Box sx={{ borderRadius: '4px', height: {xs: '25px', sm: '25px', md: '30px', lg: '40px' }, width: {xs: '14px', sm: '14px', md: '18px', lg: '20px' }, backgroundColor: '#DB4444', mr: '5px' }}>
        </Box>
        <Typography sx={{
          fontSize: {lg:'18px',md:'14px',sm:'12px',xs:'16px'},
          fontWeight: 'bolder',
          color: '#DB4444'
        }}>
          {categoryHeading}
        </Typography>
      </Box>
      <div style={{ height: '3px' }}></div>
      <Typography sx={{
        fontSize: {lg:'32px',md:'28px',sm:'22px',xs:'18px'},
        fontWeight: 'bold',
        color: 'black'
      }}>
        {productHeading}
      </Typography>
    </Box>
  );
}

export default CatName;
