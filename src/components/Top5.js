import React from 'react';
import {connect} from 'react-redux';
import { buildTop5Props, fetchMatchingTitles } from '../adapters/top5.adapter';
import { Link } from 'react-router-dom';
import Categories from './Cateories';
class Top5  extends React.Component {
    constructor(props){
			super(props);
    }
    render(){
      const { title, featuredContent,  description } = this.props && buildTop5Props(this.props);
      return featuredContent.length && featuredContent.length > 5 ?
        <Categories  title={title} description={description} featuredContent={featuredContent}/> : 
      ( 
        <div className="div-container full-background core-element">
          <div className="c-top-5-featured-content-wrapper">
          { title && <div className="c-top-5-title"> <h1>{ title }</h1> </div> }
          <div className="c-top-5-tiles__container">
            { featuredContent.map( ({ title, imageUrl, url }, index) => 
              (<Link to={url} className="c-top-5-tile" key={index}>
                <img className="c-top-5-tile_image" src={imageUrl} alt={title}/>
                <div className="c-top-5-tile_title"> {title} </div> 
              </Link>) 
              )
            }
          </div>
          
          </div>
				</div>
			)
    }
}

const mapStateToProps = state => ({
  collections : state.collections
})

export default connect(mapStateToProps)(Top5)