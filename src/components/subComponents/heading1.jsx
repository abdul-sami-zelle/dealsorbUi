import { useState, useEffect } from 'react';
import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import 'aos/dist/aos.css'; // Import the AOS styles
import AOS from 'aos'; // Import the AOS library

export default function Heeading1(){
    React.useEffect(() => {
        AOS.init();
      }, []);
    return (
     <div data-aos="fade-up" >
          <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
     </div>
    )}