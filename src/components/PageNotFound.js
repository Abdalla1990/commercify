import React, { useEffect, useCallback } from 'react';
import { adaptFeaturedContent } from '../adapters/featuredContent.adapter';
import Done from 'react-icons/lib/md/done';
import cx from 'classnames';
export default (props) => {

  // const FeaturedContent = props.contents ? adaptFeaturedContent([ {  fields:  { contents: props.contents }} ]) : featuredContent;
  const isDynamicPageContent = !!props.contents;
  const wrapperClasses = cx('c-not-found-page', {
    'c-promo-featured-content-wrapper': !isDynamicPageContent,
    'c-featured-content-wrapper': isDynamicPageContent,
  });
  return(
    <div className={wrapperClasses}>
      <div className="c-promo-featured-content_container">
        <div className="c-promo-featured-content_content center">
          <React.Fragment>
            <div className="c-promo-featured-content_item title"> OOPS WE CANT FIND YOUR REQUESTED PAGE </div>
            <div className="c-promo-featured-content_item description"> WE APOLOGIZE FOR THE INCONVIENANCE </div>
          </React.Fragment>
        </div>
      </div>
    </div>
  )
}