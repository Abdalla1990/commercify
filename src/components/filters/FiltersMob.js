import React, {useState, useCallback} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectFilters } from '../../selector/plp.selector'
import ArrowDown from 'react-icons/lib/md/arrow-drop-down';


const FiltersMob = ({ filters }) => {
  const RenderFilters = useCallback(filters => filters.map( filter => 
    (
      <div className="c-filters-links" onClick={() => toggleFilters(false)}>
        <Link to={`/collections/${filter.artist}`}>
          {filter.artist.toLowerCase()}
        </Link>
      </div>
    )
  ), []);

  const [filtersToggled, toggleFilters] = useState(false);
  return (
  <div className="c-filters-wrapper mobile">
    <div className="c-filters-container">
    <div onClick={() => toggleFilters(!filtersToggled)} >
      <h1>Filters</h1>
      <ArrowDown />
    </div>
    
      {filters.artists && filters.artists.length && filtersToggled &&
        <div>
        <p className="c-filters-title">Artists</p>
          {RenderFilters(filters.artists)}
        </div>
        
      }
      {
        filters.aspect_ratios && filters.aspect_ratios.length && filtersToggled &&
        <div>
        <p className="c-filters-title">Aspect Ratios</p>
          {RenderFilters(filters.aspect_ratios)}
        </div>
      }
    </div>
  </div>
)}

const mapPropToState = state => ({filters : selectFilters(state.route, state.collections)});
export default connect(mapPropToState)(FiltersMob);