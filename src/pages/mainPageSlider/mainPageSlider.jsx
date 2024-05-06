import React from 'react';
import './mainPageSlider.css';
import Button from '@mui/material/Button';

function MainPageSlider11() {
  return (

    <div className="mainClassPage3dSlider">
        <section id='content3dSlider'>
            <h1>
               Modern Kitchen Interior 
            </h1>
            <p>
            Dealsorb offers an extensive selection of modern kitchen interior parts to complement its wide range of products. From sleek cabinet handles and drawer pulls to innovative storage solutions and cutting-edge lighting fixtures, our collection is designed to enhance the functionality and aesthetics of your kitchen...
            </p>
            <Button sx={{backgroundColor:'white',color:'rgba(16,80,126,1)',paddingX:'20px',paddingY:'10px'}}>See Details</Button>
        </section>
        <section id='carousel'>
            <input type="radio" name="slider" id="s1"/>
            <input type="radio" name="slider" id="s2"/>
            <input type="radio" name="slider" id="s3" checked />
            <input type="radio" name="slider" id="s4"/>
            <input type="radio" name="slider" id="s5"/>
            <label htmlFor="s1" id="slider1">
            <div className="colum">
                <img  src="https://plus.unsplash.com/premium_photo-1684338795288-097525d127f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" alt="" width="100%" height="100%"/>
                
                
            </div>
            </label>
            <label htmlFor="s2" id="slider2">
            <div className="colum">
                <img src="https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" alt="" width="100%" height="100%"/>
                
                
            </div>
            </label>
            <label htmlFor="s3" id="slider3">
            <div className="colum">
                <img src="https://plus.unsplash.com/premium_photo-1682377521566-f70ac8abe597?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" alt="" width="100%" height="100%"/>
                
               
            </div>
            </label>
            <label htmlFor="s4" id="slider4">
            <div className="colum">
                <img src="https://images.unsplash.com/photo-1417716146732-918825b83fa0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="" width="100%" height="100%"/>
                
              
            </div>
            </label>
            <label htmlFor="s5" id="slider5">
            <div className="colum">
                <img src="https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80" alt="" width="100%" height="100%"/>
                
              
            </div>
            </label>
        
        </section>
    </div>
    
    

   
  );
}

export default MainPageSlider11;
