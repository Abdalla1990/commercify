import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectFilters } from '../../selector/plp.selector'
import { cleanFilterString } from '../tools/product.api';

const RenderFilters = filters => filters.map( filter => {
  return (
    <div className="c-filters-links">
      <Link to={`/collections/${filter.artist}`}>
        {cleanFilterString(filter.artist)}
      </Link>
    </div>
  );
});

const Filters = ({ filters }) => (
  <div className="c-filters-wrapper desktop">
    <div className="c-filters-container">
    <h1>Filters</h1>
      {filters.artists && filters.artists.length &&
        <div>
        <p className="c-filters-title">Artists</p>
          {RenderFilters(filters.artists)}
        </div>
        
      }
      {
        filters.aspect_ratios && filters.aspect_ratios.length && 
        <div>
        <p className="c-filters-title">Aspect Ratios</p>
          {RenderFilters(filters.aspect_ratios)}
        </div>
      }
    </div>
  </div>
)

const mapPropToState = state => ({filters : selectFilters(state.route, state.collections)});
export default connect(mapPropToState)(Filters);