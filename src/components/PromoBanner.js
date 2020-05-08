import React from 'react';
import  Markdown from 'react-markdown' ;
const PromoBanner  = ({ content }) => (
  <div className="div-container promo-banner-wrapper">
    <Markdown source={ content }/>
  </div>
)

export default PromoBanner