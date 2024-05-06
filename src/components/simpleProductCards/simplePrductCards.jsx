import * as React from 'react';
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import Looks from '@mui/icons-material/Looks';
import { Link, useNavigate } from 'react-router-dom';
import { useData } from '../../context/myData';
import './simpleProductCards.css'


export default function SimpleProductCard(props) {
    const navigate = useNavigate();
    const { setProductData } = useData();

      const handleProductDetailsClick = async () => {
        await setProductData({
            "id":props.id,
            "name":props.name,
            "imageUrl":props.arrayImages[0],
            "price":props.price,
            "arrayImages":props.arrayImages,
            "sizes":props.sizes,
            "colors":props.colors,
        });
        navigate(`/product-details/${props.name}`);
      };
    return (
        <>
            <div className="mainProductCardContainer">
                <div className="img-sec">
                    <div style={{
                        backgroundImage:
                            `url('${props.url}')`,

                    }} className="mainProductDisplayImg">
                    </div>
                    <IconButton className='favouriteIconButton'>
                        <FavoriteIcon sx={{ height: { xl: '15px', lg: '25px', md: '25px', sm: '22px', xs: '20px' }, width: { xl: '15px', lg: '25px', md: '25px', sm: '22px', xs: '20px' }, }} />
                    </IconButton>
                    <Button onClick={handleProductDetailsClick} className='LookIconButton' variant="outlined">
                        <p>Add to cart</p>
                    </Button>
                    <div className='ratingTabBar' >
                        <img height={'15px'} width={'15px'} src="https://static.vecteezy.com/system/resources/previews/018/842/764/original/3d-star-icon-isolated-on-background-customer-rating-feedback-concept-3d-rendering-free-png.png" alt="" srcset="" />
                        <p>{props.rating}</p>


                    </div>
                </div>
                <div className="description-sec">
                    <div className="name-sec">
                        {props.name}
                    </div>
                    <div className="price-sec">
                        Rs {props.price}
                    </div>
                </div>
                <div className="description-sec2">
                    <div className="shortDescript" dangerouslySetInnerHTML={{ __html: props.description }}>
                        
                    </div>
                </div>
            </div>
        </>
    )
}