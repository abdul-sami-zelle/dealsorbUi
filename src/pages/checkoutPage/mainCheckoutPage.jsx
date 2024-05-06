import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleVisibility } from '../../stateManagement/slices/cartVisibilitySlice';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Check from '@mui/icons-material/Check';
import SettingsIcon from '@mui/icons-material/Settings';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import VideoLabelIcon from '@mui/icons-material/VideoLabel';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { CloseRounded } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import RemoveIcon from '@mui/icons-material/Remove';
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {
  getCartTotal, removeItem,
  decreaseItemQuantity,
  increaseItemQuantity,
} from '../../stateManagement/slices/cartSlice';
import Grid from '@mui/material/Grid';
import './mainCheckoutPage.css'
// import '../../components/cartUi/cartMain.css'
import Close from '@mui/icons-material/Close';
import Footer from '../../components/footer';
import { createTheme } from '@mui/material/styles';
import ResponsiveAppBar from '../../components/bar2';








export default function MainCheckOutPage1() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isTabsFixed, setIsTabsFixed] = useState(false);

  const indexOfLastItem = currentPage * 1;
  const indexOfFirstItem = indexOfLastItem - 9;

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const navbarHeight = 0;
    const sliderHeight = 60;

    if (scrollPosition > 100) {
      setIsTabsFixed(true);
    } else {
      setIsTabsFixed(false);
    }
  };
  const [activeStep, setActiveStep] = React.useState(0);
  const dispatch = useDispatch();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const tabs = [
    {
      id: 1,
      title: 'Your Cart',
      content: 'See what\'s in your cart.',
      imageSrc: 'https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/carts.png?alt=media&token=8c63f282-75e2-4861-a2bd-614d21825946',
      activeImageSrc: 'https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/whiteCart.png?alt=media&token=120389bb-3022-4294-9484-0c8f15eb6670',
      class1: 'seeCart',
      class2: 'tabsMainCart_icon',
      class3: 'tabsMainCart_icon_a',
      class4: 'seeCart_content',

    },
    {
      id: 2,
      title: 'Checkout',
      content: 'Add your Checkout Details',
      imageSrc: 'https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/quote.png?alt=media&token=f69407c2-9fc3-4394-8b3d-cb86aecec01c',
      activeImageSrc: 'https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/detailsWhite.png?alt=media&token=046682c9-12ce-47d9-bf84-4e9d1a192331',
      class1: 'checkOut_details',
      class2: 'tabsMainCheckout_icon',
      class3: 'tabsMainCheckout_icon_a',
      class4: 'checkOut_details_content',
    },
    {
      id: 3,
      title: 'Order Place',
      content: 'Ensure Your Order Placing',
      imageSrc: 'https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/orderCompleted.png?alt=media&token=071747d1-54ff-4c10-9dc5-a16eed03b8f5',
      activeImageSrc: 'https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/checkout.png?alt=media&token=6bdbc9d4-dff7-4e69-8f91-f85e81746aef',
      class1: 'orderPlaced',
      class2: 'tabsMainorderplaced_icon',
      class3: 'tabsMainorderplaced_icon_a',
      class4: 'orderPlaced_content',
    },
  ];
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  const changeTab = (newTab) => {
    setActiveTab(newTab);
  };





  const { cart, totalQuantity, totalPrice } = useSelector(
    (state) => state.allCart
  );



  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Scroll to the top of the page on component mount
    window.scrollTo(0, 0);  
  }, []);
  return (
    <div className="main">
      <ResponsiveAppBar/>
      <Grid container>
        <Grid items lg={1} md={1} sm={1} xs={1}>

        </Grid>
        <Grid items lg={10} md={10} sm={10} xs={10}>
          <>
            <div className="checkoutContainer">



<div className="selectorMainContainerCheckout desktopView">
                {tabs.map((tab) => (
                  <div
                    key={tab.id}
                    // className={`tab ${activeTab === tab.id ? 'active' : ''}` }
                    className='tabb22'
                    style={{  backgroundColor: activeTab === tab.id ? '#1A9BF7' : 'white' }}
                    onClick={() => handleTabClick(tab.id)}
                  >
                    <div
                      className={`${tab.class1}`}
                    >
                      <div

                        className={`${tab.class2}`}
                        style={{ display: activeTab === tab.id ? 'none' : 'block' }}
                      >
                        <img
                          src={tab.imageSrc}
                          alt=""
                        />
                      </div>
                      <div
                        className={`${tab.class3}`}
                        style={{ display: activeTab === tab.id ? 'block' : 'none' }}
                      >
                        <img
                          src={tab.activeImageSrc}
                          alt=""
                        />
                      </div>
                      <div className='distance2' style={{ width: '10px' }}></div>
                      <div
                        className={`${tab.class4}`}
                      >
                        <h1 style={{ color: activeTab === tab.id ? 'white' : 'black' }}>
                          {tab.title}
                        </h1>
                        <p style={{ color: activeTab === tab.id ? 'white' : 'black' }}>{tab.content}</p>
                      </div>
                    </div>
                  </div>
                ))}

              </div>
            <div className={`tabs-wrapper ${isTabsFixed ? "fixed" : ""}`}>
             <Grid >
                 <Grid>
                   <div className="selectorMainContainerCheckout">
                {tabs.map((tab) => (
                  <div
                    key={tab.id}
                    // className={`tab ${activeTab === tab.id ? 'active' : ''}` }
                    className='tabb22'
                    style={{  backgroundColor: activeTab === tab.id ? '#1A9BF7' : 'white' }}
                    onClick={() => handleTabClick(tab.id)}
                  >
                    <div
                      className={`${tab.class1}`}
                    >
                      <div

                        className={`${tab.class2}`}
                        style={{ display: activeTab === tab.id ? 'none' : 'block' }}
                      >
                        <img
                          src={tab.imageSrc}
                          alt=""
                        />
                      </div>
                      <div
                        className={`${tab.class3}`}
                        style={{ display: activeTab === tab.id ? 'block' : 'none' }}
                      >
                        <img
                          src={tab.activeImageSrc}
                          alt=""
                        />
                      </div>
                      <div className='distance2' style={{ width: '10px' }}></div>
                      <div
                        className={`${tab.class4}`}
                      >
                        <h1 style={{ color: activeTab === tab.id ? 'white' : 'black' }}>
                          {tab.title}
                        </h1>
                        <p style={{ color: activeTab === tab.id ? 'white' : 'black' }}>{tab.content}</p>
                      </div>
                    </div>
                  </div>
                ))}

              </div>
                 </Grid>
             </Grid>
            </div>
              
              <div>
                <div style={{ height: '30px' }}></div>
                <div className="cartSection2" style={{marginBottom:'30px'}}>
                 
                    <style>
                      {`
      div::-webkit-scrollbar {
        width: 12px; /* Adjust the width as needed */
      }

      div::-webkit-scrollbar-thumb {
        background-color: #1A9BF7;
        border-radius:15px;
      }
    `}
                    </style>
                    {activeTab === 1 ?
                      <div className="cartItemSection2" >
                        <div>
                          {
                            cart?.map((data) => (
                              <div className="checkout_cartItems">

                                <div style={{ display: "flex" }}>
                                  <div className="imageBoundary">
                                      <img src={data.imageurl} height="80px" width="80px" alt="" srcset="" />
                                  </div>
                                  <div className="checkout_contentCartItem">
                                    <h1>
                                      {data.name}
                                    </h1>
                                    <h2>
                                      it is the short description of the product you bought.
                                      {/* {data.quantity} x Rs.{data.price} = Rs.{data.quantity * data.price} */}
                                    </h2>
                                    <span>
                                    <h2>
                                      Qty: {data.quantity} item(s)
                                      {/* {data.quantity} x Rs.{data.price} = Rs.{data.quantity * data.price} */}
                                    </h2>
                                    </span>
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                      <Box sx={{ backgroundColor: "#DB4444", height: {lg:'30px',md:'30px',sm:'25px',xs:'25px'}, width: {lg:'30px',md:'30px',sm:'25px',xs:'25px'}, borderRadius: '5px 0px 0px 5px', borderLeft: '1px solid #DB4444', borderTop: '1px solid #DB4444', borderBottom: '1px solid #DB4444', borderRight: '0px solid #DB4444', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                                        onClick={() =>
                                          dispatch(increaseItemQuantity(data.id))}>
                                        <AddIcon sx={{ color: 'white' }} />
                                      </Box>

                                      <Box sx={{ height: {lg:'30px',md:'30px',sm:'25px',xs:'25px'}, width: {lg:'30px',md:'30px',sm:'25px',xs:'25px'}, borderRadius: '0px', borderTop: '2px solid #DB4444', borderBottom: '2px solid #DB4444', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                                        <Typography sx={{ fontWeight: 'bold', fontSize: '15px', color: 'black', cursor: 'pointer' }}>
                                          {data.quantity}
                                        </Typography>

                                      </Box>

                                      {data.quantity > 1 ? <Box sx={{ backgroundColor: "#DB4444", height: {lg:'30px',md:'30px',sm:'25px',xs:'25px'}, width:{lg:'30px',md:'30px',sm:'25px',xs:'25px'}, borderRadius: '0px 5px 5px 0px', borderLeft: '0px solid #DB4444', borderTop: '1px solid #DB4444', borderBottom: '1px solid #DB4444', borderRight: '1px solid #DB4444', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                                        onClick={() =>
                                          dispatch(decreaseItemQuantity(data.id))}>
                                        <RemoveIcon sx={{ color: 'white' }} />
                                      </Box> : <Box sx={{ backgroundColor: "#DB4444", height: {lg:'30px',md:'30px',sm:'25px',xs:'25px'}, width: {lg:'30px',md:'30px',sm:'25px',xs:'25px'}, borderRadius: '0px 5px 5px 0px', borderLeft: '0px solid #DB4444', borderTop: '1px solid #DB4444', borderBottom: '1px solid #DB4444', borderRight: '1px solid #DB4444', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                                        onClick={() => dispatch(removeItem(data.id))}>
                                        <RemoveIcon sx={{ color: 'white' }} />
                                      </Box>}
                                    </Box>
                                  </div>
                                </div>
                                <IconButton onClick={() => dispatch(removeItem(data.id))} color="primary" sx={{ height: '30px', width: '30px' }}>
                                  <Close />
                                </IconButton>
                              </div>
                            ))
                          }
                        </div>
                      </div> : activeTab === 2 ?
                        <div className='checkoutForm cartItemSection2'>


                          <fieldset>
                            <legend>

                              Express Checkout

                            </legend>
                            <div className="expressCheckoutHeading">

                              <div style={{ height: '15px' }}></div>
                              <div className="cardMethods">
                                <div className="cardMainBody">
                                  <img src="https://cdn-icons-png.flaticon.com/128/349/349221.png" height='40px' width='40px' alt="" srcset="" />

                                </div>
                                <div className="cardMainBody" style={{ backgroundColor: "#34495E" }}>
                                  <img src="https://cdn-icons-png.flaticon.com/128/349/349230.png" height='40px' width='40px' alt="" srcset="" />

                                </div>
                                <div className="cardMainBody" style={{ backgroundColor: "#306FC5" }}>
                                  <img src="https://cdn-icons-png.flaticon.com/128/349/349228.png" height='40px' width='40px' alt="" srcset="" />

                                </div>
                                <div className="cardMainBody" style={{ backgroundColor: "#FFF" }}>
                                  <img src="https://cdn-icons-png.flaticon.com/128/6124/6124998.png" height='40px' width='40px' alt="" srcset="" />

                                </div>
                              </div>

                            </div>
                          </fieldset>

                          <div style={{ height: '15px' }}></div>
                          <Grid container>
                            <Grid item lg={5.5}>
                              <div style={{ width: '100%', height: '1px', backgroundColor: 'black', marginTop: '12px' }}>

                              </div>
                            </Grid>
                            <Grid item lg={1}>
                              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                OR
                              </div>
                            </Grid>
                            <Grid item lg={5.5}>
                              <div style={{ width: '100%', height: '1px', backgroundColor: 'black', marginTop: '12px' }}>

                              </div>
                            </Grid>

                          </Grid>
                          <div style={{ height: '15px' }}></div>
                          <div className="contactInfo">
                            <div className="section1CI">
                              <h1>
                                Contact Information
                              </h1>
                              <p>
                                Already have an account
                                <span style={{
                                  color: 'black',
                                  fontWeight: "bold",
                                  fontSize: '12px'
                                }}>
                                  Log in
                                </span>
                              </p>
                            </div>

                            <div className="section2CI">
                              <input type="text" class="signup-text-input" placeholder='abc@xyz.com' />
                              <div className="checkBoxEmail">
                                <input type="checkbox" name="checkbox-checked" checked />
                                <p className='emailNoti'>Email me with News and Offers</p>
                              </div>
                            </div>
                          </div>
                          <div style={{ height: '15px' }}></div>


                          <div className="shippingAddress">
                            <div className="section1SA">
                              <h1>
                                Shipping Address
                              </h1>

                            </div>
                            <Grid container spacing={2}>
                              <Grid item lg={12} sm={6} xs={12}>
                                <div className="section2SA">
                                  <input type="text" class="signup-text-input" placeholder='Country/Region' />
                                </div>
                              </Grid>
                              <Grid item lg={6} sm={6} xs={12}>
                                <div className="section3SA">
                                  <input type="text" class="" placeholder='First Name' />
                                </div>
                              </Grid>
                              <Grid item lg={6} sm={6} xs={12}>
                                <div className="section3SA">
                                  <input type="text" class="" placeholder='Last Name' />
                                </div>
                              </Grid>
                              <Grid item lg={12} sm={6} xs={12}>
                                <div className="section4SA">
                                  <input type="text" class="signup-text-input" placeholder='Address' />
                                </div>
                              </Grid>
                              <Grid item lg={12} sm={6} xs={12}>
                                <div className="section5SA">

                                  <input type="text" class="signup-text-input" placeholder='Apt./Floor./Suite.' />

                                </div>
                              </Grid>
                              <Grid item lg={4} sm={6} xs={12}>
                                <div className="section6SA">
                                  <input type="text" class="" placeholder='City' />
                                </div>
                              </Grid>
                              <Grid item lg={4} sm={6} xs={6}>
                                <div className="section6SA">
                                  <input type="text" class="" placeholder='State' />
                                </div>
                              </Grid>
                              <Grid item lg={4} sm={6} xs={6}>
                                <div className="section6SA">
                                  <input type="text" class="" placeholder='Postal Code' />
                                </div>
                              </Grid>
                            </Grid>





                          </div>
                        </div> : activeTab === 3 ? 
                        <div  className="summaryOrderConfirm">
                            <Grid container>
                            <Grid item lg={12} md={12} sm={12} xs={12}>
                                    <div className="summaryOrderConfirmSummaryIcon">
                                    <img src="https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/summary.png?alt=media&token=ada1b865-82df-4c24-8c01-9fd87ec1fdb6" alt="" srcset="" />
                                    </div>
                                </Grid>
                            <Grid item lg={12} md={12} sm={12} xs={12}>
                                    <div className="summaryOrderConfirmSummary">
                                       <h1>
                                       Summary
                                       </h1>
                                    </div>
                                </Grid>
                                <Grid item lg={12} md={12} sm={12} xs={12}>
                                    <div className="summaryOrderConfirmName">
                                       <h1>
                                       Name Of the Order Placer
                                       </h1>
                                    </div>
                                </Grid>
                                <Grid item lg={12} md={12} sm={12} xs={12}>
                                    <div className="summaryOrderConfirmAddress">
                                       <h1>
                                       Address of the order placer ufhfjfhjfjhf fyufuy buyfy b uvhj  hv jhvvjh jhv n
                                       </h1>
                                    </div>
                                </Grid>
                                <Grid item lg={4} md={4} sm={4} xs={12}>
                                    <div className="summaryOrderConfirmOtherDataH">
                                       <h1>
                                       Total Items
                                       </h1>
                                       <h2>
                                       20 Items
                                       </h2>
                                    </div>
                                </Grid>
                                <Grid item lg={4} md={4} sm={4} xs={12}>
                                    <div className="summaryOrderConfirmOtherDataH summaryOrderConfirmOtherDataCenter">
                                       <h1>
                                       Total Amount
                                       </h1>
                                       <h2>
                                       $165
                                       </h2>
                                    </div>
                                </Grid>
                                <Grid item lg={4} md={4} sm={4} xs={12}>
                                    <div className="summaryOrderConfirmOtherDataH">
                                       <h1>
                                       Payment Method
                                       </h1>
                                       <h2>
                                       Using Card
                                       </h2>
                                    </div>
                                </Grid>
                                <Grid item lg={4.5} md={4.5} sm={4.5} xs={12}></Grid>
                                <Grid item lg={3} md={3} sm={12} xs={12}>
                                <Button
                          onClick={() => {}}
                          sx={{
                            marginTop:'20px',
                            width: "100%",
                            padding: "10px",
                            marginBottom: "3px",
                            borderRadius: "0px",
                            backgroundColor: '#1A9BF7',
                            transition: 'transform 0.3s ease',
                            '&:hover': {
                              transform: 'scale(1.1)',
                              transformOrigin: 'center',
                              backgroundColor: '#1A9BF7'
                            },
                          }}>
                          <div className="label_Button">
                            Confirm Order
                          </div>
                        </Button>
                                </Grid>
                                <Grid item lg={1}></Grid>
                            </Grid>
                        </div>
                                                  : null}


                  <div className="distance1">

                  </div>
                  {activeTab === 3 ? <div className="">




{/* this is rightmost section of summary */}



                  </div> : <div className="cartPricingSection2">
                    <div className="cartPricingSection2a">
                      <div style={{ height: "10px" }}></div>
                      <div className="mainHeadingSection2">
                        <img src="https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/summary.png?alt=media&token=ada1b865-82df-4c24-8c01-9fd87ec1fdb6" alt="" srcset="" />
                        <div style={{ width: '5px' }}></div>
                        <h1>Summary</h1>
                      </div>
                      <div style={{ height: "10px" }}></div>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div style={{ height: '0.5px', width: '100%', backgroundColor: 'grey' }}></div>
                      </div>
                      <div style={{ height: "15px" }}></div>
                      <h2 style={{ color: 'grey', fontSize: '14px' }}>
                        Apply Coupone
                      </h2>
                      <div className="coupon_input">
                        <input className='cartPricingCoupon' type="text" />
                        <Button sx={{

                          padding: "5.5px",
                          marginBottom: "3px",
                          borderRadius: "0px",
                          backgroundColor: '#1A9BF7',
                          transition: 'transform 0.3s ease',
                          '&:hover': {
                            backgroundColor: '#1A9BF7'
                          },
                        }}> <div className="label_Button">
                            Apply
                          </div></Button>
                      </div>
                      <div style={{ height: "15px" }}></div>
                      <div className="cartPricingSectionDetails">
                        <h2>
                          Sub Total
                        </h2>
                        <h3>
                          Rs.{totalPrice}
                        </h3>
                      </div>
                      <div style={{ height: "15px" }}></div>
                      <div className="cartPricingSectionDetails">
                        <h2>
                          Total Items
                        </h2>
                        <h3>
                          {cart.length} item(s)
                        </h3>
                      </div>
                      <div style={{ height: "15px" }}></div>
                      <div className="cartPricingSectionDetails">
                        <h2>
                          Tax
                        </h2>
                        <h3>
                          10%
                        </h3>
                      </div>
                      <div style={{ height: "15px" }}></div>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div style={{ height: '0.5px', width: '100%', backgroundColor: 'grey' }}></div>
                      </div>
                      <div style={{ height: "15px" }}></div>
                      <div className="orderTotal">
                        <h2>
                          Order Total
                        </h2>
                        <h3>
                          Rs.{totalPrice}
                        </h3>
                      </div>
                      <div style={{ height: "15px" }}></div>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: "center" }}>
                        <Button
                          onClick={() => changeTab(activeTab + 1)}
                          sx={{

                            width: "90%",
                            padding: "10px",
                            marginBottom: "3px",
                            borderRadius: "0px",
                            backgroundColor: '#1A9BF7',
                            transition: 'transform 0.3s ease',
                            '&:hover': {
                              transform: 'scale(1.1)',
                              transformOrigin: 'center',
                              backgroundColor: '#1A9BF7'
                            },
                          }}>
                          <div className="label_Button">
                            Proceed To Checkout
                          </div>
                        </Button>
                      </div>
                    </div>
                  </div>

                  }

                </div>
              </div>



            </div>

          </>
        </Grid>
        <Grid items lg={1} md={1} sm={1} xs={1}>

        </Grid>
      </Grid>
      <footer>
        <Footer />
      </footer>
    </div>

  );
}


