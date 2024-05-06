import React from 'react';
import { Grid } from '@mui/material';
import ProductCard1 from '../widgets/productCard';
import './latestProducts.css'
import SimpleProductCard from '../simpleProductCards/simplePrductCards';


const products = [
    {
      id: 1,
      photo:
        "https://www.idealancy.pk/images/product_gallery/1672906597_oil_fliter_jug_1.jpg",
      name: "Furhaven Orthopedic",
      price: "19.99",
      description: "<p>Some text about the product..</p>",
      rating:"5.0",
      brandLogo:"https://upload.wikimedia.org/wikipedia/commons/2/24/Adidas_logo.png",
      arrayImages:[
        "https://www.idealancy.pk/images/product_gallery/1672906597_oil_fliter_jug_1.jpg",
        "https://www.idealancy.pk/images/product_gallery/1672906597_oil_fliter_jug_2.jpg",
        "https://www.idealancy.pk/images/product_gallery/1672906597_oil_fliter_jug_3.jpg",
        "https://www.idealancy.pk/images/product_gallery/1672906597_oil_fliter_jug_4.jpg",
        "https://www.idealancy.pk/images/product_gallery/1672906597_oil_fliter_jug_5.jpg",
        "https://www.idealancy.pk/images/product_gallery/1672906597_oil_fliter_jug_6.jpg",
    
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
      description: "<p>Some text about the product..</p>",
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
      description: "<p>Some text about the product..</p>",
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
      description: "<p>Some text about the product..</p>",
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
      id: 5,
      photo:
        "https://www.idealancy.pk/images/product_gallery/md_1695113061_picnic_mat_1.jpg",
      name: "HOME IMPROVEMENT",
      price: "14.99",
      description: "<p>Some text about the product..</p>",
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
      id: 6,
      photo:
        "https://www.idealancy.pk/images/product_gallery/md_1695113061_picnic_mat_1.jpg",
      name: "HOME IMPROVEMENT",
      price: "14.99",
      description: "<p>Some text about the product..</p>",
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
        id: 1,
        photo:
          "https://www.idealancy.pk/images/product_gallery/1672906597_oil_fliter_jug_1.jpg",
        name: "Furhaven Orthopedic",
        price: "19.99",
        description: "<p>Some text about the product..</p>",
        rating:"5.0",
        brandLogo:"https://upload.wikimedia.org/wikipedia/commons/2/24/Adidas_logo.png",
        arrayImages:[
          "https://www.idealancy.pk/images/product_gallery/1672906597_oil_fliter_jug_1.jpg",
          "https://www.idealancy.pk/images/product_gallery/1672906597_oil_fliter_jug_2.jpg",
          "https://www.idealancy.pk/images/product_gallery/1672906597_oil_fliter_jug_3.jpg",
          "https://www.idealancy.pk/images/product_gallery/1672906597_oil_fliter_jug_4.jpg",
          "https://www.idealancy.pk/images/product_gallery/1672906597_oil_fliter_jug_5.jpg",
          "https://www.idealancy.pk/images/product_gallery/1672906597_oil_fliter_jug_6.jpg",
      
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
        description: "<p>Some text about the product..</p>",
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
        description: "<p>Some text about the product..</p>",
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
        description: "<p>Some text about the product..</p>",
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
        id: 5,
        photo:
          "https://www.idealancy.pk/images/product_gallery/md_1695113061_picnic_mat_1.jpg",
        name: "HOME IMPROVEMENT",
        price: "14.99",
        description: "<p>Some text about the product..</p>",
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
        id: 6,
        photo:
          "https://www.idealancy.pk/images/product_gallery/md_1695113061_picnic_mat_1.jpg",
        name: "HOME IMPROVEMENT",
        price: "14.99",
        description: "<p>Some text about the product..</p>",
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
        id: 1,
        photo:
          "https://www.idealancy.pk/images/product_gallery/1672906597_oil_fliter_jug_1.jpg",
        name: "Furhaven Orthopedic",
        price: "19.99",
        description: "<p>Some text about the product..</p>",
        rating:"5.0",
        brandLogo:"https://upload.wikimedia.org/wikipedia/commons/2/24/Adidas_logo.png",
        arrayImages:[
          "https://www.idealancy.pk/images/product_gallery/1672906597_oil_fliter_jug_1.jpg",
          "https://www.idealancy.pk/images/product_gallery/1672906597_oil_fliter_jug_2.jpg",
          "https://www.idealancy.pk/images/product_gallery/1672906597_oil_fliter_jug_3.jpg",
          "https://www.idealancy.pk/images/product_gallery/1672906597_oil_fliter_jug_4.jpg",
          "https://www.idealancy.pk/images/product_gallery/1672906597_oil_fliter_jug_5.jpg",
          "https://www.idealancy.pk/images/product_gallery/1672906597_oil_fliter_jug_6.jpg",
      
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
        description: "<p>Some text about the product..</p>",
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
        description: "<p>Some text about the product..</p>",
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
        description: "<p>Some text about the product..</p>",
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
        id: 5,
        photo:
          "https://www.idealancy.pk/images/product_gallery/md_1695113061_picnic_mat_1.jpg",
        name: "HOME IMPROVEMENT",
        price: "14.99",
        description: "<p>Some text about the product..</p>",
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
        id: 6,
        photo:
          "https://www.idealancy.pk/images/product_gallery/md_1695113061_picnic_mat_1.jpg",
        name: "HOME IMPROVEMENT",
        price: "14.99",
        description: "<p>Some text about the product..</p>",
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



  const LatestProducts = ({latest_products}) => {
    return (
      <>
      <div className='clearanceLarge'>
      <Grid container  rowSpacing={5} sx={{ marginX: '10px' }}>
        {latest_products.map((item, index) => (
          <Grid item key={index} xs={6} sm={3} md={2.4} lg={2} xl={2}>
            <SimpleProductCard
              name={item.name}
              url={item.photo}
              price={item.simpleProductData.salePrice}
              description={item.description}
              rating={item.rating}
              brandLogo={item.brandLogo}
              arrayImages={item.photos}
              colors=""
              sizes=""
            />
          </Grid>
        ))}
      </Grid>
      </div>
      <div className='clearanceMedium'>
      <Grid container  rowSpacing={2} columnSpacing={0}  sx={{ marginX: '10px' }}>
        {latest_products.map((item, index) => (
          <Grid item key={index} xs={6} sm={4} md={3} lg={2} xl={2}>
            <SimpleProductCard
              name={item.name}
              url={item.photo}
              price={item.simpleProductData.salePrice}
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
      </div>
      </>
    );
  };
  
  export default LatestProducts;
  