import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import "./3dSliderLandingPage.css";
import Button from '@mui/material/Button';



const couponsData = [
    {
        id: 1,
        name: "Modern Kitchen Interior",
        description:"Dealsorb offers an extensive selection of modern kitchen interior parts to complement its wide range of products. From sleek cabinet handles and drawer pulls to innovative storage solutions and cutting-edge lighting fixtures, our collection is designed to enhance the functionality and aesthetics of your kitchen...",
        brandLogo:"https://plus.unsplash.com/premium_photo-1682377521566-f70ac8abe597?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
        tagLine:"Dealsorb offers an extensive selection of modern"
      },
      {
        id: 2,
        name: "Electronics",
        description:"Dealsorb is your ultimate destination for electronic goods at unbeatable prices. We offer a wide range of top-quality electronics, from the latest gadgets to home appliances and tech accessories. Our commitment to affordability ensures you can stay up-to-date with technology without straining your budget...",
        brandLogo:"https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
        tagLine:"Dealsorb offers an extensive selection of modern"
      },
      {
        id: 3,
        name: "Furniture",
        description:"Quality pieces at affordable prices. At Furniture Haven, we provide a wide array of stylish and durable furniture options to transform your living space. Our commitment to affordability means you can enhance your home's ambiance without overspending. Explore our extensive collection today, and discover...",
        brandLogo:"https://plus.unsplash.com/premium_photo-1684338795288-097525d127f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
        tagLine:"Dealsorb offers an extensive selection of modern"
      },
      {
        id: 4,
        name: "Health and Beauty",
        description:"Affordable Health and Beauty Solutions. At our emporium, we offer an extensive range of health and beauty products to help you look and feel your best. Our dedication to affordability ensures that self-care remains accessible to everyone. Explore our selection today and discover quality...",
        brandLogo:"https://img.freepik.com/free-photo/healthy-food-medical-equipment_23-2148108966.jpg?w=1060&t=st=1695361359~exp=1695361959~hmac=897feaa0b75d1d82371a87e3d68ee3d6055d0f680ec933099f1605105179a464",
        tagLine:"Dealsorb offers an extensive selection of modern"
      },
      {
        id: 5,
        name: "Groceries",
        description:"Affordable Essentials for Every Home. Grocery Haven is your go-to destination for quality groceries at reasonable prices. We provide a wide selection of fresh produce, pantry staples, and household necessities...",
        brandLogo:"https://img.freepik.com/free-photo/variety-organic-vegetables-supermarket_53876-138173.jpg?w=1060&t=st=1695361232~exp=1695361832~hmac=fd0cb4cf183a5205ebe5fb9f9cd48f7d73ce070275cf83066dbe560d324e9e75",
        tagLine:"Dealsorb offers an extensive selection of modern"
      },   
];

function CategoryBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);




  const handleSlideChange = (event) => {
    const selectedSlide = parseInt(event.target.value);
    setCurrentSlide(selectedSlide);
  };

  const getWrappedIndex = (index) => {
    return (index + 5) % 5;
  };

  useEffect(() => {
    let intervalId;
  
    clearInterval(intervalId);
  
    intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 5);
    }, 4000);
  
    return () => clearInterval(intervalId);
  }, [currentSlide]);



  return (
   <div className="main3dCarouselBg">
         <div className="mainClassPage3dSlider">
     
     <section id='content3dSlider'>
       <h1>{couponsData[currentSlide]?.name}</h1>
         <p>{couponsData[currentSlide]?.description}</p>
         <h2>{couponsData[currentSlide]?.tagLine}</h2>
         <Button  sx={{backgroundColor:'white',color:'rgba(16,80,126,1)',paddingX:{lg:'20px',sm:'16px',xs:'20px'},paddingY:{lg:'10px',sm:'8px',xs:'12px'}}}>See Details</Button>
       </section>
       <section id="carousel">
         {couponsData.slice(0, 5).map((item, index) => {
           return (
             <React.Fragment key={item._id}>
               <input
                 type="radio"
                 name="slider"
                 id={`s${index + 1}`}
                 value={index}
                 onChange={handleSlideChange}
                 checked={currentSlide === index}
               />
               <label
                 htmlFor={`s${index + 1}`}
                 id={`slider${index + 1}`}
                 className={`
               ${currentSlide === index ? "currentSlide" : ""}
                ${
                  getWrappedIndex(currentSlide + 3) === index ? "lastSlide" : ""
                } 
                ${
                  getWrappedIndex(currentSlide + 4) === index
                    ? "secLastSlide"
                    : ""
                } 
                ${getWrappedIndex(currentSlide + 1) === index ? "secSlide" : ""} 
                ${
                  getWrappedIndex(currentSlide + 2) === index ? "firstSlide" : ""
                } 
                `}
               >
                 <div className="colum">
                   <img
                     src={item.brandLogo}
                     alt={item.name}
                     onClick={()=> {
                      
                     }}
                     style={{ userSelect: "none" }}
                   />
                  
                 </div>
                 
               </label>
             </React.Fragment>
           );
         })}
       </section>
 
     </div>
   </div>
  );
}

export default CategoryBanner;