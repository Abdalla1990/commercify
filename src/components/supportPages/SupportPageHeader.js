import React from 'react';
import { map } from 'ramda';
import { useScrollBody } from '../../hooks/scroll.hook';
// import { adaptFeaturedContent } from '../../adapters/featuredContent.adapter';
const adaptFeaturedContent = map( featuredContent => featuredContent.fields);
const SupportPageHeader = ({headerBackground, textContent, featuredContent}) => {
  const headerStyle = {
    backgroundColor: headerBackground,
    width:'100%',
    height: '200px',
    position: 'relative',
  }
  useScrollBody();
  console.log({ headerBackground })
  const content = featuredContent ? adaptFeaturedContent(featuredContent) : [];
  // console.log({ content })
  return ( 
    <div className="div-container home-wrapper">
      <div className="div-container home-wrapper">
        <p className='c-support-header-title'>{textContent}</p>
        {!!content.length &&
          <div lassName="div-container home-wrapper">
            <img src={content[0].file.url} />
          </div>}
          {!content.length && headerBackground && <div lassName="div-container home-wrapper" style={headerStyle}>
          </div>}
      </div>
    </div>
  );
}

export default SupportPageHeader;