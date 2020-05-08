import React from 'react';
import { buildPromoProps } from '../adapters/promo.adapter';
import Cart from 'react-icons/lib/io/ios-cart';
import FeaturedContent from './FeaturedContent';

const PromoStory  = (props) =>{
  const {cta, title, image, vertical, featuredContent } = buildPromoProps(props);
  return ( 
    <div className="div-container promo-and-featured-wrapper core-element">
      <div className="promo-wrapper">
        <div className="c-promo__container">
          <div className="c-promo__cta-container">
            {title && 
              <div className="c-promo__title-container">
                <h1 className="c-promo__title" >{title}</h1>
                {cta && 
                  <div className="c-promo__cta">
                    <a href={cta.url}>{cta.text} <Cart className="c-header_svg"/></a>
                  </div>
                  
                }
              </div>}
          </div>
          <div className="c-promo_image-wrapper">
            {image && 
              <div className="c-promo_image-container">
                <img className="c-promo__image" src={image.url} />
              </div>
            }
          </div>
        </div>
        <div className="c-promo-vertical__container">
          <div className="c-promo_image-wrapper">
            {vertical && vertical.image &&
              <div className="c-promo_image-container">
                <img className="c-promo__image" src={vertical.image.url} />
              </div>
            }
          </div>
          <div className="c-promo__cta-container">
            {vertical && vertical.cta && 
              <div className="c-promo__cta">
                <a href={vertical.cta.url}>{vertical.cta.text} <Cart className="c-header_svg"/></a>
              </div>}
          </div>
        </div>
      </div>
      <FeaturedContent featuredContent={featuredContent}/>
    </div>
  )
}

export default PromoStory