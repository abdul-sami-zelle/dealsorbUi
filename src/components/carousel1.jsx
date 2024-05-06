import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import pic1 from '../assets/1.jpg';

import pic2 from '../assets/2.jpg';
import pic3 from '../assets/3.jpg';
import Box from '@mui/material/Box';
import '/dealsorb/src/components/carousel.css';
import EkoshHeader from '../components/text2';
import Grid from '@mui/material/Grid';
import 'aos/dist/aos.css';
import AOS from 'aos';
import Text4 from '../components/text4';
import '/dealsorb/src/App.css'

function ControlledCarousel() {
  const [index, setIndex] = useState(0);
  const [showHeader, setShowHeader] = useState(false);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
    setShowHeader(false);
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    if (index === 2) {
      setShowHeader(true);
    }
  }, [index]);

  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect} interval={10000}>
        <Carousel.Item>
          <div>
            <Box sx={{ height: {lg:"600px",md:"500px",sm:"400px",xs:"300px"}, width: '100%' }}>
            <Box  sx={{
              position:'absolute',
              top:"30px",
              left:"30%",
              right:"30%"
            }}>
              <div data-aos="fade-down" data-aos-duration="2000">
              <Text4/>
              </div>
              {/* <h1 data-aos="fade-up" data-aos-duration="2000">UPTO 30% OFF ON ALL FURNITURE PRODUCTS</h1> */}
     </Box>
              <img className='carouselImg'  height="600px" width='100%' src={pic1} alt="" />
              <EkoshHeader />
            </Box>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div data-aos="fade-up">
          <Box sx={{ height: {lg:"600px",md:"500px",sm:"400px",xs:"300px"}, width: '100%' }}>
              <img className='carouselImg' height="600px" width='100%' src={pic2} alt="" />
            </Box>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div>
          <Box sx={{ height: {lg:"600px",md:"500px",sm:"400px",xs:"300px"}, width: '100%' }}>
              <img className='carouselImg' height="600px" width='100%' src={pic3} alt="" />
            </Box>
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default ControlledCarousel;
