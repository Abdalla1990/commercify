import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Breadcrumps = ({ route, title, description}) => (
  <div className="c-breadcreamps-container">
    <div className="c-breadcrumps_urls-container">
      <Link className="c-breadcrumps_url-element" to="/" > Home </Link>
      <Link className="c-breadcrumps_url-element" to={route} > { route.toLowerCase() } </Link>
    </div>
    <h1>{title}</h1>
    <h2>{description}</h2>
  </div>
)

const mapPropToState = state => ({ route :state.route });
export default connect(mapPropToState)(Breadcrumps);