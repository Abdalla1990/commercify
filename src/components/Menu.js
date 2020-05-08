import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Search from 'react-icons/lib/md/search';
import Arrow from 'react-icons/lib/md/arrow-drop-down';
import { artistsList, aspectsList } from '../selector/plp.selector';
import { cleanFilterString } from './tools/product.api';

class Menu  extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        activeTab : "none",
        artists : artistsList,
        catalog : aspectsList,
        help : ["Printing Sizes", "Return Policy", "Usage Policy", "Privacy Policy", "About Us", "Contact Us"],
        categories : []
      }
      this.menuRef = React.createRef();
    }
    handleScroll = e => {
      console.log({e})
    }
    componentDidMount() {
      document.addEventListener('scroll', this.handleScroll);
      
    }
    componentWillUnmount() {
      document.removeEventListener('scroll', this.handleScroll);
    }
    componentDidUpdate() {
        const subcategoryContainerDOM = document.getElementById('subcategory');
        if(this.state.activeTab !== 'none') {
          const activeTabContainerDOM = document.getElementById(this.state.activeTab);
          if (activeTabContainerDOM !== undefined ) {
            const rec = activeTabContainerDOM.getBoundingClientRect();
            subcategoryContainerDOM.style = `display: inline; left: ${rec.left - 250}px;`
          }
        } else {
          subcategoryContainerDOM.removeAttribute('style');
        }
    }
    handleMouseOver = key => this.handleMenuItemClick(key);
    handleMouseLeave = () => this.handleMenuItemClick();
    render(){
			return ( 
      <div ref={this.menuRef} className="c-menu">
        <div className="c-menu-container">
          <Link to="/" className="c-logo">
            <img src="/Logo.png"></img>
          </Link>
{          //<div className="c-menu-search__container">
            //<Search className="c-header_svg" />
          //</div>
}
          <div className="c-menu-wrapper" >
            <Link to="/" className="page-container black" onMouseOver= {this.handleMouseOver}>Home</Link>
            <Link to="/" className="page-container" onMouseOver= {this.handleMouseOver}>Upload Images</Link>
            <Link to="/" className="page-container" onMouseOver= {this.handleMouseOver}>Prices</Link>
            <div className="category-container">
              <div 
                id="artists" 
                onClick={key => this.handleMenuItemClick(key)}
                onMouseOver= {this.handleMouseOver}
                // onMouseLeave={this.handleMouseLeave}
              > Artists </div>
              <Arrow/> 
            </div>
            <div className="category-container">
              <div 
                id="catalog"
                onClick={key => this.handleMenuItemClick(key)}
                onMouseOver= {this.handleMouseOver}
                // onMouseLeave={this.handleMouseLeave}
              > Categories </div>
              <Arrow/> 
            </div>
            <div className="category-container">
              <div 
                id="help"
                onClick={key => this.handleMenuItemClick(key)}
                onMouseOver= {this.handleMouseOver}
                // onMouseLeave={this.handleMouseLeave}
              > Help </div>
              <Arrow/> 
            </div>
            
          </div>
          <div id="subcategory" className="c-menu-subcategory__container"
            onMouseOver= { () => this.handleMouseOver(this.state.activeTab)}
            onMouseLeave={ this.handleMouseLeave }
          >
            {
              this.state[this.state.activeTab] && 
              this.state[this.state.activeTab].length &&
              this.state.activeTab !== 'help' &&
              this.state[this.state.activeTab].map((artist, index) => <Link key={index} to={`/collections/${artist}`} className="c-menu-subcategory-item">{cleanFilterString(artist)}</Link>)
            }
            {
              this.state.activeTab === 'help' &&
              this.state[this.state.activeTab].map((helpItem, index) => <Link key={index} to={`/${helpItem}`} className="c-menu-subcategory-item">{cleanFilterString(helpItem)}</Link>)
            }
          </div>
        </div>
      </div>
			)
    }

    handleMenuItemClick = key => {
      if( key === undefined ) {
        this.setState(() =>({activeTab: "none"}));
      } else if ( key.target.nodeName === "DIV" ) {
        const selectedTab = key.target.id;
        this.setState((prevState) =>
          selectedTab === prevState.activeTab ?
          ({activeTab: "none"}) :
          ({activeTab: selectedTab}));
      }
    }
}

export default connect()(Menu)