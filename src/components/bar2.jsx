import React, { useEffect, useState } from 'react';
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import logo from '../assets/logo.png'
import user from '../assets/user.png'
import bell from '../assets/bell.png'
import deal from '../assets/deal.png'
import discount from '../assets/discount.png'
import event from '../assets/event.png'
import eventO from '../assets/eventO.png'
import gifts from '../assets/gifts.png'
import CustomizedInputBase from './searcBar1'
import ImageBanner from './banner'
import { Link , useNavigate} from "react-router-dom";
import { toggleVisibility } from "../stateManagement/slices/cartVisibilitySlice";
import { useDispatch, useSelector } from 'react-redux';
import { setHoveredWidget, resetHoveredWidget, selectHoveredWidget } from "../stateManagement/slices/navbarHoverSlice"
import FadeIn from "../components/animations1"
import { css, keyframes } from '@emotion/react'
import EventNotification from './eventsNotificationUi/eventNotificationUi';
import { animated, useSpring } from 'react-spring';
import CountryDropdown from './countriesDropdown';


const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    transform: translate3d(0, -30px, 0);
  }

  70% {
    transform: translate3d(0, -15px, 0);
  }

  90% {
    transform: translate3d(0,-4px,0);
  }
`

const pages = ["Home", "Categories", "Stores", "Deals & Coupons","Blogs"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];
const tabToRoute = {
  "Home": "",
  "Categories": 'categories',
  "Stores": 'all-stores',
  "Deals & Coupons": "coupon-deals",
  "Blogs":"blogs"
};

const products = [{

},{
  
},{
  
}]


function ResponsiveAppBar({ activePage, rotation = 10, timing = 2000, }) {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [isBooped, setIsBooped] = React.useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);

  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);

  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    console.log("handleCloseNavMenu");
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);

  };
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    dispatch(toggleVisibility());
  };
  const hoveredWidget = useSelector(selectHoveredWidget);

  const changeColor = (id) => {
    dispatch(setHoveredWidget(id));
  };

  const resetColor = () => {
    dispatch(resetHoveredWidget);
  };
  const style = useSpring({
    display: 'inline-block',
    backfaceVisibility: 'hidden',
    transform: isBooped
      ? `rotate(40deg)`
      : `rotate(0deg)`,
  });
  React.useEffect(() => {
    // Unchanged
  }, [isBooped, timing]);
  const trigger = () => {
    // Unchanged
  };
  const [hoveredValue, changeHoveredValue] = useState(null);


  return (

    <Box sx={{ right: '0', left: '0', width: '100%', }}>
      <Box sx={{ position: "static", backgroundColor: '#36454F', height: { xs: 0, md: 35, lg: 48 }, display: { xs: "none", md: "flex", lg: "flex" }, alignItems: "center", justifyContent: "center" }}>
        <Typography textAlign="center" sx={{ color: "white", fontSize: { xs: 0, md: 10, lg: 15 } }}>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</Typography>
        <Typography textAlign="center" sx={{ color: "white", fontSize: { xs: 0, md: 10, lg: 15 } }}>Shop Now</Typography>
        <Box sx={{width:'30px'}}></Box>
        <CountryDropdown/>
      </Box>
      
      <AppBar position="" sx={{ height: "100px", display: "flex", justifyContent: "center" }} color="">

        <Toolbar disableGutters>


          <Box
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              width: '10%',
              textAlign: 'center',
              display: "flex",
              justifyContent: "center"
            }}
          >
            <img src={logo} width={100} alt="" />
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <Button

                  key={page}
                  onClick={handleCloseNavMenu}
                  component={Link} // Use the Link component for routing
                  to={`/${tabToRoute[page]}`} // Use the mapped route name
                  sx={{
                    my: { md: 0 },
                    fontSize: { md: 12, lg: 14 },
                    color: activePage === page ? "primary.main" : "black",

                    display: "block",
                    fontWeight: 'bold'
                  }}
                >
                  {page}
                </Button>
              ))}
            </Menu>
          </Box>

          <Box
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img src={logo} width={100} alt="" />
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, flexDirection: "column", width: { xl: '60%', lg: '60%', md: '30%', } }}>
            <Box sx={{ mr: 2, display: { xs: "none", md: "flex" }, marginTop: '10px' }}> <CustomizedInputBase /></Box>

            <Box sx={{ mr: 2, display: { xs: "none", md: "flex" }, marginTop: '10px' }} >
              {pages.map((page, index) => (
                <Box
                  onMouseOver={() => changeColor(index)}

                  sx={{
                    borderBottom: activePage === page ? '2px Solid primary.main' : '2px Solid white',
                    transition: 'background-color 0.1s', // Add a transition for background-color
                    '&:hover': {
                      borderBottom: '2px Solid black', // Change the background color on hover
                    },
                  }}>
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    component={Link} // Use the Link component for routing
                    to={`/${tabToRoute[page]}`} // Use the mapped route name
                    sx={{
                      my: { md: 0 },
                      fontSize: { md: 10, lg: 12 },
                      color: activePage === page ? "primary.main" : "black",

                      display: "block",
                      fontWeight: 'bolder'
                    }}
                  >
                    {page}
                  </Button>
                </Box>
              ))}
            </Box>
          </Box>

          <Box sx={{
            width: { xl: '30%', lg: '30%', md: '35%', }, display: "flex",
            justifyContent: "center"
          }}>
            <Box sx={{ mr: 2, display: { xs: "none", md: "flex" }, width: { xl: '80%', lg: '300px', md: '260px', sm: '210px' } }}>
              <Box sx={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>

                <Box sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                }} >
                  <animated.span onMouseEnter={trigger} style={style}>
                    <Box sx={{
                      height: '45px',
                      width: '45px',
                      borderRadius: '45px',
                      backgroundColor: "primary.main",
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: 'rgba(100, 100, 111,0.4) 0px 7px 29px 0px',

                    }}>

                      <img src={bell} width={22} height={22} alt="" />
                    </Box>
                  </animated.span>
                  <h1 style={{ fontSize: '12px', fontWeight: 'bolder', marginTop: '5px' }}>Alerts</h1>
                </Box>
                <Box onClick={()=>{
                   navigate(`/all-deals`);
                }} sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                }} >
                  <Box sx={{
                    height: '45px',
                    width: '45px',
                    borderRadius: '45px',
                    backgroundColor: 'purple',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',

                    boxShadow: 'rgba(100, 100, 111,0.4) 0px 7px 29px 0px'
                  }}>
                    <img src={gifts} width={22} height={22} alt="" />

                  </Box>
                  <h1 style={{ fontSize: '12px', fontWeight: 'bolder', marginTop: '5px' }}>Deals</h1>
                </Box>
                <Box
                onClick={()=>{
                  navigate(`/all-coupons`)
                }}
                 sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                }}>
                  <Box sx={{
                    height: '45px',
                    width: '45px',
                    borderRadius: '45px',
                    backgroundColor: '#FFBF00',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: 'rgba(100, 100, 111,0.4) 0px 7px 29px 0px'
                  }}>
                    <img src={deal} width={22} height={22} alt="" />
                  </Box>
                  <h1 style={{ fontSize: '12px', fontWeight: 'bolder', marginTop: '5px' }}>Coupons</h1>
                </Box>
                <Box onMouseOut={() => {
                    changeHoveredValue(null)
                }} onMouseOver={() => {
                    changeHoveredValue(3)
                    console.log(hoveredValue);
                }} sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  position: 'relative'
                }}>
                  <Box  sx={{
                    height: '45px',
                    width: '45px',
                    borderRadius: '45px',
                    backgroundColor: 'orange',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: 'rgba(100, 100, 111,0.4) 0px 7px 29px 0px'
                  }}>
                    <img src={event} width={24} height={24} alt="" />
                  </Box>
                  <h1 style={{ fontSize: '12px', fontWeight: 'bolder', marginTop: '5px' }}>Events</h1>
                  <Box sx={{
                    display:hoveredValue===3?'block':'none',
                    height:products.length===1?'180px':products.length===2?'260px':'300px',
                    maxHeight:'300px',
                    width:'300px',
                    position:'absolute',
                    top:'65px',
                    right:"-10px",
                    backgroundColor:'white',
                    borderRadius:'10px',
                    transition:'display 2s ease-out',
                    boxShadow:'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
                    padding:'5px',
                    // display:'flex',
                    // flexDirection:'column',
                    zIndex:'12000',
                    overflowY:'scroll'
                  }}>
                  
                    <EventNotification dataList={products}/>
                    
                    {/* <EventNotification/>
                    <EventNotification/>
                    <EventNotification/>
                    <EventNotification/> */}
                  </Box>
                </Box>
                <Box sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                }}>
                  <Box sx={{
                    height: '45px',
                    width: '45px',
                    borderRadius: '45px',
                    backgroundColor: 'black',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: 'rgba(100, 100, 111,0.4) 0px 7px 29px 0px'
                  }}>
                    <img style={{
                      animation: `${bounce} 1s ease infinite`
                    }} src={user} width={22} height={22} alt="" />
                  </Box>
                  <h1 style={{ fontSize: '12px', fontWeight: 'bolder', marginTop: '5px' }}>Sign up</h1>
                </Box>


              </Box>

            </Box>
          </Box>



        </Toolbar>



      </AppBar>
    </Box>

  );
}
export default ResponsiveAppBar;




































