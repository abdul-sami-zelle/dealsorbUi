import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import "./3dSl2.css";
import Button from '@mui/material/Button';
import AllCategories from "../components/AllCategories/allCategories";
import CouponCategories from "../components/couponsCategories/couponsCategories";


const couponsData = [
    {
        id: 1,
        name: "Modern Kitchen Interior",
        description:"Dealsorb offers an extensive selection of modern kitchen interior parts to complement its wide range of products. From sleek cabinet handles and drawer pulls to innovative storage solutions and cutting-edge lighting fixtures, our collection is designed to enhance the functionality and aesthetics of your kitchen...",
        brandLogo:"https://icms-image.slatic.net/images/ims-web/70a9d9f1-3868-49cb-84ef-82e89ba53e55.jpg",
        tagLine:"Dealsorb offers an extensive selection of modern"
      },
      {
        id: 2,
        name: "Electronics",
        description:"Dealsorb is your ultimate destination for electronic goods at unbeatable prices. We offer a wide range of top-quality electronics, from the latest gadgets to home appliances and tech accessories. Our commitment to affordability ensures you can stay up-to-date with technology without straining your budget...",
        brandLogo:"https://icms-image.slatic.net/images/ims-web/4f58aa8c-19dc-49d9-8d1a-0cfe39885c05.jpeg_1200x1200.jpg",
        tagLine:"Dealsorb offers an extensive selection of modern"
      },
      {
        id: 3,
        name: "Furniture",
        description:"Quality pieces at affordable prices. At Furniture Haven, we provide a wide array of stylish and durable furniture options to transform your living space. Our commitment to affordability means you can enhance your home's ambiance without overspending. Explore our extensive collection today, and discover...",
        brandLogo:"https://icms-image.slatic.net/images/ims-web/c3b36c87-5b83-4cf6-9699-499edf672b3c.jpeg",
        tagLine:"Dealsorb offers an extensive selection of modern"
      },
      {
        id: 4,
        name: "Health and Beauty",
        description:"Affordable Health and Beauty Solutions. At our emporium, we offer an extensive range of health and beauty products to help you look and feel your best. Our dedication to affordability ensures that self-care remains accessible to everyone. Explore our selection today and discover quality...",
        brandLogo:"https://icms-image.slatic.net/images/ims-web/226313c6-4507-443e-b06d-901775ab83d2.jpg",
        tagLine:"Dealsorb offers an extensive selection of modern"
      },
      {
        id: 5,
        name: "Groceries",
        description:"Affordable Essentials for Every Home. Grocery Haven is your go-to destination for quality groceries at reasonable prices. We provide a wide selection of fresh produce, pantry staples, and household necessities...",
        brandLogo:"https://icms-image.slatic.net/images/ims-web/48eeb4e6-e573-416f-873f-84a4f52496c6.jpg",
        tagLine:"Dealsorb offers an extensive selection of modern"
      },   
];

function CategoryBanner11() {
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
         <div className="mainClassPage3dSlider">
     
     <section id=''>
       <AllCategories/>
       </section>
       <section id="carousel">
          <div className="banner1">
            <img src="https://ae01.alicdn.com/kf/Ha7b4f2e46ba74d57aeb4034b0ed1b670x/222x22.png_.webp" alt="" srcset="" />
            <img src="https://ae01.alicdn.com/kf/Ha7b4f2e46ba74d57aeb4034b0ed1b670x/222x22.png_.webp" alt="" srcset="" />
            <img src="https://ae01.alicdn.com/kf/Ha7b4f2e46ba74d57aeb4034b0ed1b670x/222x22.png_.webp" alt="" srcset="" />
          </div>
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
       <section id=''>
       <CouponCategories/>
       </section>
     </div>

  );
}

export default CategoryBanner11;