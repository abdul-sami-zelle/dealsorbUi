import React, { useState } from 'react';
import './sideBar.css';
import CatName from '../components/catName';

const SidebarPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
    console.log(!isOpen);
  };

  return (

 <>
 <div onClick={togglePopup} style={{
    height:isOpen?'100vh':'0vh',
    display:isOpen?'flex':'none',
    backgroundColor:isOpen?'rgba(0, 0, 255, 0.5)':'',
    position: 'fixed', // Change to 'fixed'
    top: '0', // Add this
    left: '0', // Add this
    right: '0', // Add this
    bottom: '0', // Add this
    zIndex: isOpen ? '1' : '-1',
    position:'relative'

 }}>

 </div>
 <div  className={'whole'}>
    
    <div className={`sidebar-popup ${isOpen ? 'open' : ''}`}>
      
      <div className="popup-content">
        <p>This is the content of the sidebar popup.</p>
        <button onClick={togglePopup}>Close</button>
      </div>
    </div>
   <div>
   
   </div>
   <div className="toggle-button">
   <CatName categoryHeading="Featured" productHeading="New Arrivals"/>
    <CatName categoryHeading="Featured" productHeading="New Arrivals"/>
    <CatName categoryHeading="Featured" productHeading="New Arrivals"/>
    <button onClick={togglePopup} >
        Toggle Sidebar
        
      </button>
   </div>
    
 </div>
 </>
  );
};

export default SidebarPopup;
