import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';
import './categoryDesign2.css'
import {useNavigate } from 'react-router-dom';

export default function CategoryDesign2(props) {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const handleNavigate = (categoryValue) => {
        // Navigate to the desired route with the category parameter
        navigate(`/categories/${categoryValue}`);
      };
  return (
    <Box className='mainCategoryContainer'
      sx={{
        height: '210px',
        width: '160px',
        backgroundColor: 'red',
        backgroundImage: `url('${props.url}')`,
        backgroundSize: 'cover',
        borderRadius: '7px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        transition: '1s',
        boxShadow: '0 4px 6px 0 rgba(0, 0, 0, 0.2)',
      }}
    >
      <Box className='hoveredCategorySubContainer'
        sx={{
          height: '40px',
          width: '140px',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          borderRadius: '7px',
          transition: '0.5s',
          margin: '10px',
          boxShadow: '0 6px 8px 0 rgba(0, 0, 0, 0.2)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          alignItems:'center',

          '&:hover': {
            height: '120px', // Change height on hover
            width: '140px',  // Change width on hover
          },
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Typography sx={{ fontSize: '12px', color: 'white', textAlign: 'center', fontWeight: 'bold' }}>
          {props.name}
        </Typography>
        {/* Conditionally render content based on hover state */}
        {isHovered && (
          <Box>
            <Box sx={{
              display: 'flex',
              flexDirection:'row',
              maxWidth:'100%',
              justifyContent:'space-between'
              
            }}>
              <Box sx={{
                display: 'flex',
                
              }}>
                <img height={'15px'} width={'15px'} src="https://cdn3d.iconscout.com/3d/premium/thumb/product-5806313-4863042.png" alt="" srcset="" />
                <Typography sx={{ fontSize: '10px', color: 'white', textAlign: 'center', fontWeight: 'bold' }}>
                  Total Products
                </Typography>
              </Box>
              <Typography sx={{ fontSize: '10px', color: 'white', textAlign: 'center', fontWeight: 'bold' }}>
                {props.product_no}
              </Typography>
            </Box>
            <Box sx={{
              display: 'flex',
              flexDirection:'row',
              maxWidth:'100%',
              justifyContent:'space-between'
            }}>
              <Box sx={{
                display: 'flex',
             
              }}>
                <img height={'15px'} width={'15px'} src="https://static.vecteezy.com/system/resources/previews/018/842/764/original/3d-star-icon-isolated-on-background-customer-rating-feedback-concept-3d-rendering-free-png.png" alt="" srcset="" />
                <Typography sx={{ fontSize: '10px', color: 'white', textAlign: 'center', fontWeight: 'bold' }}>
                  Category Rating
                </Typography>
              </Box>
              <Typography sx={{ fontSize: '10px', color: 'white', textAlign: 'center', fontWeight: 'bold' , marginLeft:'5px' }}>
              {props.rating}
              </Typography>
            </Box>
            

            <Button onClick={() => handleNavigate(props.name)} sx={{height:'25px',backgroundColor:'#DB4444',paddingX:'20px' ,marginY:'10px', '&:hover': {
           backgroundColor:'black',
          
          },}}>
            <Box sx={{color:'white',fontWeight:'semi-bold'}}>
            See All
            </Box>
            </Button>
          </Box>

         
        )}
       
      </Box>
    </Box>
  );
}
