import React from 'react';
import { Link } from 'react-router-dom';
const Categories  = props => {
    
  const { title, description, featuredContent } = props ;
  return ( 
    <div className="div-container core-element ">
      <div className="c-categories-featured-content-wrapper">
      { title && <div className="c-categories-title"> <h1>{ title }</h1> </div> }
      { description && <div className="c-categories-description"  ><p>{description}</p></div>}
      <div className="c-categories-tiles__container">
        { featuredContent.map( ({ title, imageUrl, url }, index) => 
          (<Link to={url} className="c-categories-tile" key={index}>
            <img className="c-categories-tile_image" src={imageUrl} alt={title}/>
            <div className="c-categories-tile_title"> {title} </div> 
          </Link>) 
          )
        }
      </div>
      </div>
    </div>
  )
}



export default Categories;