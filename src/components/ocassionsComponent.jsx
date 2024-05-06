import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import App22 from './picker1'
import WebCube from './cubeSwiper/webViewCubeSwiper';
import CatName from './catName';
import OcassionProductCard from './ocassionsProductCard/ocassionProductcard1';


const products = [
  {
      id: 1,
      photo:
        "https://www.idealancy.pk/images/product_gallery/md_1695211691_wollar_storage_bag_7.jpg",
      name: "Furhaven Orthopedic",
      price: "19.99",
      description: "Some text about the product..",
      rating:"5.0",
      brandLogo:"https://upload.wikimedia.org/wikipedia/commons/2/24/Adidas_logo.png",
      arrayImages:[
        "https://e7.pngegg.com/pngimages/459/171/png-clipart-amazon-com-aliexpress-app-store-shopping-app-android-text-logo-thumbnail.png",
        "https://e7.pngegg.com/pngimages/459/171/png-clipart-amazon-com-aliexpress-app-store-shopping-app-android-text-logo-thumbnail.png",
        "https://e7.pngegg.com/pngimages/459/171/png-clipart-amazon-com-aliexpress-app-store-shopping-app-android-text-logo-thumbnail.png",
        "https://e7.pngegg.com/pngimages/459/171/png-clipart-amazon-com-aliexpress-app-store-shopping-app-android-text-logo-thumbnail.png",
        "https://e7.pngegg.com/pngimages/459/171/png-clipart-amazon-com-aliexpress-app-store-shopping-app-android-text-logo-thumbnail.png",
        "https://e7.pngegg.com/pngimages/459/171/png-clipart-amazon-com-aliexpress-app-store-shopping-app-android-text-logo-thumbnail.png",
        "https://e7.pngegg.com/pngimages/459/171/png-clipart-amazon-com-aliexpress-app-store-shopping-app-android-text-logo-thumbnail.png",
        "https://e7.pngegg.com/pngimages/459/171/png-clipart-amazon-com-aliexpress-app-store-shopping-app-android-text-logo-thumbnail.png",
      ],
      colors:"",
      sizes:""
    },
    {
      id: 2,
      photo:
        "https://www.idealancy.pk/images/product_gallery/md_1695119619_egg_pen_holder_1.jpg",
      name: "WATER BOTTLES",
      price: "21.99",
      description: "Some text about the product..",
      rating:"5.0",
      brandLogo:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png",
      arrayImages:[
        "https://e7.pngegg.com/pngimages/459/171/png-clipart-amazon-com-aliexpress-app-store-shopping-app-android-text-logo-thumbnail.png",
        "https://e7.pngegg.com/pngimages/459/171/png-clipart-amazon-com-aliexpress-app-store-shopping-app-android-text-logo-thumbnail.png",
        "https://e7.pngegg.com/pngimages/459/171/png-clipart-amazon-com-aliexpress-app-store-shopping-app-android-text-logo-thumbnail.png",
        "https://e7.pngegg.com/pngimages/459/171/png-clipart-amazon-com-aliexpress-app-store-shopping-app-android-text-logo-thumbnail.png",
        "https://e7.pngegg.com/pngimages/459/171/png-clipart-amazon-com-aliexpress-app-store-shopping-app-android-text-logo-thumbnail.png",
        "https://e7.pngegg.com/pngimages/459/171/png-clipart-amazon-com-aliexpress-app-store-shopping-app-android-text-logo-thumbnail.png",
        "https://e7.pngegg.com/pngimages/459/171/png-clipart-amazon-com-aliexpress-app-store-shopping-app-android-text-logo-thumbnail.png",
        "https://e7.pngegg.com/pngimages/459/171/png-clipart-amazon-com-aliexpress-app-store-shopping-app-android-text-logo-thumbnail.png",
      ],
      colors:"",
      sizes:""
    },
    {
      id: 3,
      photo:
        "https://www.idealancy.pk/images/product_gallery/md_1695037198_sink_faucet_1.jpg",
      name: "KITCHEN ACCESSORIES",
      price: "99.99",
      description: "Some text about the product..",
      rating:"5.0",
      brandLogo:"https://companieslogo.com/img/orig/600690.SS_BIG-07f22d57.png?t=1664511268",
      arrayImages:[
        "https://e7.pngegg.com/pngimages/459/171/png-clipart-amazon-com-aliexpress-app-store-shopping-app-android-text-logo-thumbnail.png",
        "https://e7.pngegg.com/pngimages/459/171/png-clipart-amazon-com-aliexpress-app-store-shopping-app-android-text-logo-thumbnail.png",
        "https://e7.pngegg.com/pngimages/459/171/png-clipart-amazon-com-aliexpress-app-store-shopping-app-android-text-logo-thumbnail.png",
        "https://e7.pngegg.com/pngimages/459/171/png-clipart-amazon-com-aliexpress-app-store-shopping-app-android-text-logo-thumbnail.png",
        "https://e7.pngegg.com/pngimages/459/171/png-clipart-amazon-com-aliexpress-app-store-shopping-app-android-text-logo-thumbnail.png",
        "https://e7.pngegg.com/pngimages/459/171/png-clipart-amazon-com-aliexpress-app-store-shopping-app-android-text-logo-thumbnail.png",
        "https://e7.pngegg.com/pngimages/459/171/png-clipart-amazon-com-aliexpress-app-store-shopping-app-android-text-logo-thumbnail.png",
        "https://e7.pngegg.com/pngimages/459/171/png-clipart-amazon-com-aliexpress-app-store-shopping-app-android-text-logo-thumbnail.png",
      ],
      colors:"",
      sizes:""
    },
    {
      id: 4,
      photo:
        "https://www.idealancy.pk/images/product_gallery/md_1695113061_picnic_mat_1.jpg",
      name: "HOME IMPROVEMENT",
      price: "14.99",
      description: "Some text about the product..",
      rating:"5.0",
      brandLogo:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png",
      arrayImages:[
        "https://e7.pngegg.com/pngimages/459/171/png-clipart-amazon-com-aliexpress-app-store-shopping-app-android-text-logo-thumbnail.png",
        "https://e7.pngegg.com/pngimages/459/171/png-clipart-amazon-com-aliexpress-app-store-shopping-app-android-text-logo-thumbnail.png",
        "https://e7.pngegg.com/pngimages/459/171/png-clipart-amazon-com-aliexpress-app-store-shopping-app-android-text-logo-thumbnail.png",
        "https://e7.pngegg.com/pngimages/459/171/png-clipart-amazon-com-aliexpress-app-store-shopping-app-android-text-logo-thumbnail.png",
        "https://e7.pngegg.com/pngimages/459/171/png-clipart-amazon-com-aliexpress-app-store-shopping-app-android-text-logo-thumbnail.png",
        "https://e7.pngegg.com/pngimages/459/171/png-clipart-amazon-com-aliexpress-app-store-shopping-app-android-text-logo-thumbnail.png",
        "https://e7.pngegg.com/pngimages/459/171/png-clipart-amazon-com-aliexpress-app-store-shopping-app-android-text-logo-thumbnail.png",
        "https://e7.pngegg.com/pngimages/459/171/png-clipart-amazon-com-aliexpress-app-store-shopping-app-android-text-logo-thumbnail.png",
      ],
      colors:"",
      sizes:""
    },
];



export default function Ocassions() {
  return (
    <Box sx={{ padding: '40px', backgroundColor: "#F5F5F5", borderRadius: '10px', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px', }}>
      <Grid container spacing={2} justifyContent="center" >
        <Grid lg={4} md={12} sm={12}>
          <Grid lg={12}>
            <CatName categoryHeading="Ocassions" productHeading="Ocassions" />
          </Grid>
          <Box>
            <div style={{ height: '30px' }}>

            </div>
            <WebCube />
          </Box>
        </Grid>

        <Grid lg={8} md={12} sm={12}>

          <Grid container>
            <Grid lg={6} md={6} sm={12}>
              <Grid lg={12}>
                <CatName categoryHeading="Ocassions" productHeading="Best Deals & Coupons" />
              </Grid>
              <Grid lg={12} md={12}>
                <App22 />
              </Grid>
              <Grid lg={12} md={12}>
                <App22 />
              </Grid>
              <Grid lg={12} md={12}>
                <App22 />
              </Grid>

            </Grid>
            <Grid lg={6} md={6} sm={12}>
              <Grid lg={12}>
                <CatName categoryHeading="Ocassions" productHeading="Products" />
              </Grid>
              <Grid lg={10}>
              <Grid container rowSpacing={{lg:1.5, xs: 1, sm: 2, md: 1 }} columnSpacing={{lg:0, xs: 1, sm: 2, md: 1.5 }}>
      {products.map((item, index) => (
        <Grid item key={index} xs={6} sm={4} md={6} lg={6}>
          <OcassionProductCard
            name={item.name}
            url={item.photo}
            price={item.price}
            description={item.description}
            rating={item.rating}
            brandLogo={item.brandLogo}
            arrayImages={item.arrayImages}
            colors=""
            sizes=""
          />
        </Grid>
      ))}
    </Grid>
              </Grid>

           



            </Grid>
          </Grid>
        </Grid>

      </Grid>
    </Box>
  )
}









