import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setBigImage } from '../stateManagement/slices/imageSlice';


const ImageSwitcher = ({ images, initialBigImageSrc }) => {
    const bigImageSrc = useSelector((state) => state.image.bigImageSrc);
    const dispatch = useDispatch();
  
    useEffect(() => {
      if (initialBigImageSrc) {
        dispatch(setBigImage(initialBigImageSrc));
      }
    }, [dispatch, initialBigImageSrc]);
  
    const handleThumbnailClick = (newImageSrc) => {
      dispatch(setBigImage(newImageSrc));
    };
  
    return (
      <div>
        <div id="imageContainer">
          <img id="bigImage" src={bigImageSrc} alt="Big Image" />
        </div>
        
        <div id="thumbnailContainer">
          {images.map((imageSrc, index) => (
            <img
              key={index}
              className="thumbnail"
              src={imageSrc}
              alt={`Thumbnail ${index + 1}`}
              onClick={() => handleThumbnailClick(imageSrc)}
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default ImageSwitcher;


