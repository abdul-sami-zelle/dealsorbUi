import React, { useEffect, useState } from 'react';
import '../../App.css'
import ResponsiveAppBar from '../../components/bar2'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CategoryDesign2 from '../../components/Product';
import { productData, responsive } from '../../components/data';
import { productData2, responsive2 } from '../../components/trendyProductData';
import { discountProdcts, discountProdctsResponsive } from '../../components/productData2';
import CatName from '../../components/catName';
import BasicGrid from '../../components/grid1';
import ProductCard1 from '../../components/widgets/productCard';
import Box from '@mui/material/Box';
import CouponProviders from '../../components/couponProviders';
import Banner1 from '../../components/banner1';
import Grid from '@mui/material/Grid';
import ClearanceList from '../../components/clearanceScen';
import Button from '@mui/material/Button';
import DiscountCard1 from '../../components/discountCard';
import Benefits from '../../components/benefits';
import Footer from '../../components/footer';
import MainPageSlider11 from '../mainPageSlider/mainPageSlider';
import { useSelector } from 'react-redux';
import { CloseRounded } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import CartItems from '../../components/cartUi/cartMain';
import { propTypes } from 'react-bootstrap/esm/Image';
import CategoryBanner from '../../3dSliderLandingPage/3dSilderLandingPage';
import FloatingButton from '../../components/cartUi/floatingButton';
import WhatsAppFloatingButton from '../../components/whatsappFloatingbutton';
import MobileViewCategories from '../../components/mobileViewCategories/mobileViewCategories';
import ProductCardResponsive2 from '../../components/ProductCardResponsive2/productCardResponsive';
import MobileViewProductsDesign1 from '../../components/mobileViewProductCard/mobileViewProductCard1';
import MobileViewCategoriesAnBestSale from '../../components/mobileViewCategoriesAndBestSale/mobileViewCategoriesAndBestSale';
import ExploreOurProducts from '../../components/exploreOurProducts/exploreOurProducts';
import CouponCard from '../../components/coupon1';
import App222 from '../../components/coupon22';
import MobileCoupon from '../../components/couponUi/mobileCoupon';
import MobileCouponSlider from '../../components/mobileCouponSlider/mobileCouponSlider';
import Cube from '../../components/cubeSwiper/cube';
import MobileCoupon2 from '../../components/couponUi/mobileCoupon2';
import Ocassions from '../../components/ocassionsComponent';
import MobileViewNewArrivals from '../../components/mobileViewNewArrivals/mobileViewNewArrivals';
import { useDispatch } from 'react-redux';
import { setHoveredWidget, resetHoveredWidget, selectHoveredWidget } from '../../stateManagement/slices/navbarHoverSlice';
import SEO from '../../SEO/mainSEO';
import AllCategories from '../../components/AllCategories/allCategories';
import CategoryBanner11 from '../../3dSl2/3dSl2';
import CouponCategories from '../../components/couponsCategories/couponsCategories';
import LatestProducts from '../../components/latestProducts/latestProducts';
import SimpleProductCard from '../../components/simpleProductCards/simplePrductCards';
import { selectLoadingState } from '../../stateManagement/slices/loadingSlice';
import CouponCodeModal from '../../components/Modals/couponCodeModal';

const products = [
  {
    id: 1,
    photo:
      "https://www.idealancy.pk/images/product_gallery/1672906597_oil_fliter_jug_1.jpg",
    name: "Furhaven Orthopedic",
    price: "19.99",
    description: "<p>Some text about the product..</p>",
    rating: "5.0",
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Adidas_logo.png",
    arrayImages: [
      "https://www.idealancy.pk/images/product_gallery/1672906597_oil_fliter_jug_1.jpg",
      "https://www.idealancy.pk/images/product_gallery/1672906597_oil_fliter_jug_2.jpg",
      "https://www.idealancy.pk/images/product_gallery/1672906597_oil_fliter_jug_3.jpg",
      "https://www.idealancy.pk/images/product_gallery/1672906597_oil_fliter_jug_4.jpg",
      "https://www.idealancy.pk/images/product_gallery/1672906597_oil_fliter_jug_5.jpg",
      "https://www.idealancy.pk/images/product_gallery/1672906597_oil_fliter_jug_6.jpg",

    ],
    colors: "",
    sizes: ""
  },
  {
    id: 2,
    photo:
      "https://www.idealancy.pk/images/product_gallery/md_1695119619_egg_pen_holder_1.jpg",
    name: "WATER BOTTLES",
    price: "21.99",
    description: "<p>Some text about the product..</p>",
    rating: "5.0",
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png",
    arrayImages: [
      "https://e7.pngegg.com/pngimages/459/171/png-clipart-amazon-com-aliexpress-app-store-shopping-app-android-text-logo-thumbnail.png",
      "https://e7.pngegg.com/pngimages/459/171/png-clipart-amazon-com-aliexpress-app-store-shopping-app-android-text-logo-thumbnail.png",
      "https://e7.pngegg.com/pngimages/459/171/png-clipart-amazon-com-aliexpress-app-store-shopping-app-android-text-logo-thumbnail.png",
      "https://e7.pngegg.com/pngimages/459/171/png-clipart-amazon-com-aliexpress-app-store-shopping-app-android-text-logo-thumbnail.png",
      "https://e7.pngegg.com/pngimages/459/171/png-clipart-amazon-com-aliexpress-app-store-shopping-app-android-text-logo-thumbnail.png",
      "https://e7.pngegg.com/pngimages/459/171/png-clipart-amazon-com-aliexpress-app-store-shopping-app-android-text-logo-thumbnail.png",
      "https://e7.pngegg.com/pngimages/459/171/png-clipart-amazon-com-aliexpress-app-store-shopping-app-android-text-logo-thumbnail.png",
      "https://e7.pngegg.com/pngimages/459/171/png-clipart-amazon-com-aliexpress-app-store-shopping-app-android-text-logo-thumbnail.png",
    ],
    colors: "",
    sizes: ""
  },
  {
    id: 3,
    photo:
      "https://www.idealancy.pk/images/product_gallery/md_1695037198_sink_faucet_1.jpg",
    name: "KITCHEN ACCESSORIES",
    price: "99.99",
    description: "<p>Some text about the product..</p>",
    rating: "5.0",
    brandLogo: "https://companieslogo.com/img/orig/600690.SS_BIG-07f22d57.png?t=1664511268",
    arrayImages: [
      "https://e7.pngegg.com/pngimages/459/171/png-clipart-amazon-com-aliexpress-app-store-shopping-app-android-text-logo-thumbnail.png",
      "https://e7.pngegg.com/pngimages/459/171/png-clipart-amazon-com-aliexpress-app-store-shopping-app-android-text-logo-thumbnail.png",
      "https://e7.pngegg.com/pngimages/459/171/png-clipart-amazon-com-aliexpress-app-store-shopping-app-android-text-logo-thumbnail.png",
      "https://e7.pngegg.com/pngimages/459/171/png-clipart-amazon-com-aliexpress-app-store-shopping-app-android-text-logo-thumbnail.png",
      "https://e7.pngegg.com/pngimages/459/171/png-clipart-amazon-com-aliexpress-app-store-shopping-app-android-text-logo-thumbnail.png",
      "https://e7.pngegg.com/pngimages/459/171/png-clipart-amazon-com-aliexpress-app-store-shopping-app-android-text-logo-thumbnail.png",
      "https://e7.pngegg.com/pngimages/459/171/png-clipart-amazon-com-aliexpress-app-store-shopping-app-android-text-logo-thumbnail.png",
      "https://e7.pngegg.com/pngimages/459/171/png-clipart-amazon-com-aliexpress-app-store-shopping-app-android-text-logo-thumbnail.png",
    ],
    colors: "",
    sizes: ""
  },
  {
    id: 4,
    photo:
      "https://www.idealancy.pk/images/product_gallery/md_1695113061_picnic_mat_1.jpg",
    name: "HOME IMPROVEMENT",
    price: "14.99",
    description: "<p>Some text about the product..</p>",
    rating: "5.0",
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png",
    arrayImages: [
      "https://e7.pngegg.com/pngimages/459/171/png-clipart-amazon-com-aliexpress-app-store-shopping-app-android-text-logo-thumbnail.png",
      "https://e7.pngegg.com/pngimages/459/171/png-clipart-amazon-com-aliexpress-app-store-shopping-app-android-text-logo-thumbnail.png",
      "https://e7.pngegg.com/pngimages/459/171/png-clipart-amazon-com-aliexpress-app-store-shopping-app-android-text-logo-thumbnail.png",
      "https://e7.pngegg.com/pngimages/459/171/png-clipart-amazon-com-aliexpress-app-store-shopping-app-android-text-logo-thumbnail.png",
      "https://e7.pngegg.com/pngimages/459/171/png-clipart-amazon-com-aliexpress-app-store-shopping-app-android-text-logo-thumbnail.png",
      "https://e7.pngegg.com/pngimages/459/171/png-clipart-amazon-com-aliexpress-app-store-shopping-app-android-text-logo-thumbnail.png",
      "https://e7.pngegg.com/pngimages/459/171/png-clipart-amazon-com-aliexpress-app-store-shopping-app-android-text-logo-thumbnail.png",
      "https://e7.pngegg.com/pngimages/459/171/png-clipart-amazon-com-aliexpress-app-store-shopping-app-android-text-logo-thumbnail.png",
    ],
    colors: "",
    sizes: ""
  },
];


const couponsMobileData = [
  {
    id: 1,
    url:
      "https://e7.pngegg.com/pngimages/459/171/png-clipart-amazon-com-aliexpress-app-store-shopping-app-android-text-logo-thumbnail.png",
    percent: "20",
    brand: "Bata Footwear",
    validTill: "October 2023",
  },
  {
    id: 2,
    url:
      "https://icms-image.slatic.net/images/ims-web/fb7adc81-c369-4fe8-b62e-7595b09c7741.png",
    percent: "30",
    brand: "Servis Footwear",
    validTill: "November 2023",
  },
  {
    id: 3,
    url:
      "https://play-lh.googleusercontent.com/NCra9cWctHUO_Ti5abE3xkGol2QaYfPTmjauc6CL2szSX3A8tAPNKZBRZoptISOk6Q",
    percent: "40",
    brand: "McDonald's",
    validTill: "December 2023",
  },
  {
    id: 4,
    url:
      "https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/mcdonalds.png?alt=media&token=3ef261c0-0949-4aeb-b6a3-8349bf5e3623",
    percent: "40",
    brand: "KFC",
    validTill: "December 2023",
  },
  {
    id: 5,
    url:
      "https://clipart-library.com/data_images/249057.jpg",
    percent: "40",
    brand: "Zameer Ansari",
    validTill: "December 2023",
  },
  {
    id: 6,
    url:
      "https://www.freepnglogos.com/uploads/mcdonalds-png-logo/mcdonalds-png-logo-simple-m-1.png",
    percent: "40",
    brand: "McDonald's",
    validTill: "December 2023",
  },
  {
    id: 7,
    url:
      "https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/mcdonalds.png?alt=media&token=3ef261c0-0949-4aeb-b6a3-8349bf5e3623",
    percent: "40",
    brand: "McDonald's",
    validTill: "December 2023",
  },
  {
    id: 8,
    url:
      "https://www.freepnglogos.com/uploads/mcdonalds-png-logo/mcdonalds-png-logo-simple-m-1.png",
    percent: "40",
    brand: "McDonald's",
    validTill: "December 2023",
  },
]




function MainLandingPage() {
  const [count, setCount] = useState(0)



  const [categoriesAll, setCategories] = useState([]);
 

  useEffect(() => {
    // Fetch data from your API endpoint
    fetch('https://coupon-backend-tau.vercel.app/api/v1/product-category/get-all-category')
      .then((response) => response.json())
      .then((data) => {
        // Set the store data in state
        setCategories(data.popularCategories);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const [enhanceProduct, setEnhanceProduct] = useState([]);

  useEffect(() => {
    // Fetch data from your API endpoint
    fetch('https://coupon-backend-tau.vercel.app/api/v1/enhance/get-all')
      .then((response) => response.json())
      .then((data) => {
        // Set the store data in state
        setEnhanceProduct(data.Enhance);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);



  const [bestSelling, setBestSelling] = useState([]);

  useEffect(() => {
    // Fetch data from your API endpoint
    fetch('https://coupon-backend-tau.vercel.app/api/v1/simple-product/get-all-products')
      .then((response) => response.json())
      .then((data) => {
        // Set the store data in state
        setBestSelling(data.product);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);


  const [lastestProducts, setlastestProducts] = useState([]);

  useEffect(() => {
    // Fetch data from your API endpoint
    fetch('https://coupon-backend-tau.vercel.app/api/v1/simple-product/get-all-products')
      .then((response) => response.json())
      .then((data) => {
        // Set the store data in state
        setlastestProducts(data.latestProduct);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);


  const product = categoriesAll.map((item) => (
    <CategoryDesign2
      name={item.name}
      url={item.url}
      price=""
      description={item.description}
      product_no={item.product_no}
      rating={item.rating}
    />
  ));




  const product22 = bestSelling.map((item) => (
    <SimpleProductCard
      id={item._id}
      name={item.name}
      url={item.photo}
      price={item.simpleProductData.salePrice}
      description={item.description}
      rating="2.6"
      brandLogo=""
      arrayImages={item.photos}
      colors=""
      sizes=""
    />
  ));
  const product23 = discountProdcts.map((item) => (
    <DiscountCard1
      name={item.name}
      url={item.imageurl}
      rating={item.rating}
      discount={item.discount}
    />
  ));

  const dispatch = useDispatch();
  const isVisible = useSelector((state) => state); // Assuming your visibilitySlice is the root reducer

  const handleButtonClick = () => {
    const visibilityState = useSelector((state) => state.visibility);

    console.log('Visibility State:', visibilityState);
  };

  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  // Update the screen height whenever the window is resized
  const updateScreenHeight = () => {
    setScreenHeight(window.innerHeight);
  };

  useEffect(() => {
    // Add a listener for the "resize" event
    window.addEventListener('resize', updateScreenHeight);

    // Clean up the listener when the component unmounts
    return () => {
      window.removeEventListener('resize', updateScreenHeight);
    };
  }, []);

  const hoveredWidget = useSelector(selectHoveredWidget);

  const changeColor = (id) => {
    dispatch(setHoveredWidget(id));
  };

  const resetColor = () => {
    dispatch(resetHoveredWidget);
  };

  const isLoading = useSelector(selectLoadingState);



  return (
    <>
    
    
    <div className='mainClass1'>
      {/* <div style={{backgroundColor:"red",opacity:'40%',height:`${screenHeight}px`,width:"100%",position:'absolute', zIndex:'9999'}}>
      </div> */}
      <Box>

        {/* SEARCH ENGINE OPTIMIZATION */}
        <SEO
          title='DealsOrb'
          description='Beginner friendly page for learning React Helmet.'
          name='Dealsorb'
          type='article' />
        {/* SEARCH ENGINE OPTIMIZATION TAG ENDS HERE*/}
        <ResponsiveAppBar activePage="Home" />
        <CartItems />
        {/* <AllCategories/> */}
        {/* <CategoryBanner /> */}
        <CategoryBanner11 />
        <div className="mobViewContentLandingPage1">
          <MobileViewCategories />
          <Box >
            <MobileViewProductsDesign1 dataList={products} />
          </Box>
          <Box>
            <MobileCouponSlider couponDataMobile={couponsMobileData} />
          </Box>
          <Box >
            <MobileViewCategoriesAnBestSale dataList={products} />
          </Box>
          <Box sx={{ marginX: '15px' }}>
            <MobileViewNewArrivals />
          </Box>
          <Box >
            <ExploreOurProducts dataList={products} />
          </Box>
          <Box>
            <Cube />
          </Box>
        </div>


        {/* <CarouselSlider22/> */}
        {/* <MainCouponLandingPage/>  */}
        {/* <MainStorePage/> */}

        <Box sx={{ marginX: '30px' }}>

          <div onClick={handleButtonClick} className="webViewCategories">
            <div style={{ height: '30px' }}></div>
            <CatName categoryHeading="Categories" productHeading="Popular Categories" />
            <div style={{ height: '30px' }}></div>
            <Carousel responsive={responsive}>
              {product}
            </Carousel>
            <div style={{ height: '60px' }}></div>
            <CatName categoryHeading="Products" productHeading="Latest Products" />
            <div style={{ height: '30px' }}></div>
            <LatestProducts latest_products={lastestProducts} />
            <div style={{ height: '30px' }}></div>
            <Box sx={{ display: 'flex', alignItems: '', justifyContent: 'space-between' }}>
              <CatName categoryHeading="This Month" productHeading="Clearance Sale" />
              <Button sx={{ height: '40px', backgroundColor: '#DB4444', paddingX: { lg: '50px', md: '40px', sm: '30px', xs: '20px' } }}>
                <Box sx={{ color: 'white', fontWeight: 'bold' }}>
                  See All
                </Box>
              </Button>
            </Box>
            <div style={{ height: '30px' }}></div>
            <ClearanceList />
            <div style={{ height: '60px' }}></div>
            <div style={{ height: '30px' }}></div>
            <CatName categoryHeading="Stores" productHeading="Coupon Providers" />
            <div style={{ height: '30px' }}></div>
            <CouponProviders />
          </div>
          <div style={{ height: '30px' }}></div>
          <div className="webViewCategories">
            <div style={{ height: '60px' }}></div>
            <CatName categoryHeading="Categories" productHeading="Best Selling Products" />
            <div style={{ height: '30px' }}></div>
            <Carousel responsive={responsive2}>
              {product22}
            </Carousel>
            <div style={{ height: '60px' }}></div>
            <CatName categoryHeading="Featured" productHeading="New Arrivals" />
            <div style={{ height: '30px' }}></div>
            <BasicGrid />

            <div style={{ height: '60px' }}></div>
            <CatName categoryHeading="Today's" productHeading="Summer Discount" />
            <div style={{ height: '30px' }}></div>
            <Carousel responsive={discountProdctsResponsive}>
              {product23}
            </Carousel>
            <div style={{ height: '60px' }}></div>

            <Ocassions />



          </div>
          <div style={{ height: '40px' }}></div>
          {enhanceProduct.length>0 && <Banner1 title={enhanceProduct[0].title} subtitle={enhanceProduct[0].subTitle} img={enhanceProduct[0].image} startDate={enhanceProduct[0].startDate} endDate={enhanceProduct[0].endDate} url={enhanceProduct[0].link}/>}
          <div className="webViewCategories">



          </div>
          <div style={{ height: '60px' }}></div>
          <Grid container >
            <Grid item lg={1}>

            </Grid>
            <Grid item lg={10}>
              <Benefits />
            </Grid>
            <Grid item lg={1}>

            </Grid>
          </Grid>

          <Box>

          </Box>
          <div style={{ height: '30px' }}></div>


          {/* <ShowableProductDetails/> */}


        </Box>



        <div style={{ height: '30px' }}></div>
        <Footer />
        <FloatingButton />
        <WhatsAppFloatingButton />
      </Box>
    </div>
    {isLoading?<CouponCodeModal    />:<div></div>}
    </>
  )
}
export default MainLandingPage


