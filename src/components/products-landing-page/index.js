import React, { useState } from 'react';
import { connect } from 'react-redux';
import { selectInitialRelatedProducts } from '../../selector/plp.selector';
import Filters from '../filters/';
import FiltersMob from '../filters/FiltersMob';
import Breadcrumps from '../Breadcrumps';
import dispatcher from '../tools/dispatcher';
import { dispatchRequestCollectionData } from '../../actions/collections';
import history from '../tools/history';
import { useScrollBody } from '../../hooks/scroll.hook';
import { cleanFilterString } from '../tools/product.api';
const Plp = ({ products=[], description, artist: title="", cursor, hasNextPage, dispatch }) => {
  
  useScrollBody(title)
  const handleLoadMore = () => {
    dispatcher(dispatch, dispatchRequestCollectionData, {dataType: 'collection',id: title, cursor,});
  }
  const handleProductClick = product => {
    history.push(`/collections/${title}/${product.title}`);
  }
  return (
  <div className="c-plp-container">
    <Filters />
    <FiltersMob />
    <div className="c-plp-products_wrapper">
      <Breadcrumps description={description} title={cleanFilterString(title)}/>
      <div className="c-plp-products-container">
        {products.length === 0 && <div>LOADING</div>}
        {products.map( (product, index) => (
          <div key={index} className="c-plp-product-container">
            <div className="c-plp-product-image" onClick={() => handleProductClick(product)}>
              {product.variants[0].compareAtPrice && <div className="c-plp-product-discounted-flag">Discount!</div>}
              <img className="c-plp-product-image_source" src={product.images[0].src}></img>
            </div>
            <div>{product.title}</div>
            <div className="c-plp-product-price-range">
              <div className="c-plp-product-price-range_from">CAD{product.priceRange.from}</div>
              <div className="c-plp-product-price-range_separetor"></div>
              <div className="c-plp-product-price-range_to">CAD{product.priceRange.to}</div>
            </div>
          </div>
        ))}
      </div>
      {hasNextPage && 
        <div className="c-plp-load-more-button_container">
          <button className="c-plp-load-more-button" onClick={ handleLoadMore }>
            Load More
          </button>
        </div>}
    </div>
  </div>
)}

const mapPropToState = state => ({...selectInitialRelatedProducts(state.route, state.collections)});
export default connect(mapPropToState)(Plp);