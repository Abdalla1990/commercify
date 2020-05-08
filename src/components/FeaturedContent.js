import React, { useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { adaptFeaturedContent } from '../adapters/featuredContent.adapter';
import Heaphone from 'react-icons/lib/md/headset-mic';
import Done from 'react-icons/lib/md/done';
import Shield from 'react-icons/lib/fa/shield';
import cx from 'classnames';
export default ({ featuredContent , ...props}) => {

  const FeaturedContent = props.contents ? adaptFeaturedContent([ {  fields:  { contents: props.contents }} ]) : featuredContent;
  const isDynamicPageContent = !!props.contents;
  const wrapperClasses = cx({
    'c-promo-featured-content-wrapper': !isDynamicPageContent,
    'c-featured-content-wrapper': isDynamicPageContent,
  });
  return(
    <div className={wrapperClasses}>
      {FeaturedContent && FeaturedContent.length &&
        FeaturedContent[0].map(({ title, description, iconName, imageUrl, url }, index) => (
          <div key={index} className="c-promo-featured-content_container">
          { console.log( { url , iconName, isDynamicPageContent})}
            { iconName && 
              iconName === 'shield' ? 
              <Shield className="icon" /> : 
              iconName === 'headphone' ? 
              <Heaphone className="icon" /> : 
              iconName === 'done' &&
              <Done className="icon" />
            }
            <div className="c-promo-featured-content_content">
              { imageUrl && <img src={imageUrl} /> }
              { isDynamicPageContent ? 
              <div>
                <div className="c-promo-featured-content_item title"> { title }  </div>
                <div className="c-promo-featured-content_item description">
                  <p> { description }  </p>
                  { url && <div className='c-add-to-cart'> <Link to={url}> {iconName} </Link> </div>}
                </div>
              </div>
              :
              <React.Fragment>
                <div className="c-promo-featured-content_item title"> { title }  </div>
                <div className="c-promo-featured-content_item description"> { description } </div>
              </React.Fragment>
              }
            </div>
          </div>)
        )
      }
    </div>
  )
}