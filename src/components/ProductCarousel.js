import React,{ useState, useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const RenderImage = ({ src }) => (
  <div>
    <img  className="c-pdp-display-image" src={src} />
  </div>
)

const ProductCarousel = ({images, onChange, selectedItem}) => {
  return (
    <Carousel
      showArrows={true}
      showStatus={false}
      showThumbs={false}
      useKeyboardArrows={true}
      swipeable={true}
      emulateTouch={true}
      infiniteLoop={true}
      selectedItem={selectedItem}
      onChange={onChange}
      >
      {
        images.map( image => RenderImage(image))
      }
      
    </Carousel>
        
  )
} 
export default ProductCarousel;
