import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Search from 'react-icons/lib/md/search';
import Arrow from 'react-icons/lib/md/arrow-drop-down';
import Hamburger from 'react-icons/lib/md/menu';
import { artistsList, aspectsList } from '../selector/plp.selector';
import cx from 'classnames';
import CartIcon from 'react-icons/lib/io/ios-cart';
import { toggleCart } from '../actions/cart';
import dispatcher from './tools/dispatcher';

const generateWrapperClasses = title => cx('category-container', 'bold', {
  inactive: title.indexOf('Sub') !== -1,
})

class Menu  extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        menuToggled: false,
        activeTab : "none",
        Artists: artistsList,
        Categories : aspectsList,
        Help : ["Printing Sizes", "Return Policy", "Usage Policy", "Privacy Policy", "About Us", "Contact Us"],
      }
    }
    
    renderCategoryContainer = title => (
      <div
        className={generateWrapperClasses(title)}
        onClick={ () => this.handleMenuItemClick(title)}
      >
        <div>
          {title} 
        </div>
        <Arrow/> 
      </div>
    )

    closeMenu = () => this.setState(()=>({ menuToggled: false }));

    renderMenu = () =>( 
      <div className="c-menu-mob-items-wrapper" >
        <Link to="/" className="page-container black" onMouseOver= {this.handleMouseOver}>Home</Link>
        <Link to="/" className="page-container" onMouseOver= {this.handleMouseOver}>Upload Pic</Link>
        <Link to="/" className="page-container" onMouseOver= {this.handleMouseOver}>Prices</Link>
        <Link to="/" className="page-container" onMouseOver= {this.handleMouseOver}>Blog</Link>
        {
          this.renderCategoryContainer('Artists')
        }
        {
          this.isCorrectCategory('Artists') && 
          this.state.Artists.map(title => 
            <Link 
              onClick={this.closeMenu} 
              key={title} to={`/collections/${title}`} 
              className="c-menu-subcategory-item">{title.toLowerCase()}
            </Link>)
        }
        {
          this.renderCategoryContainer('Categories')
        }
        {
          this.isCorrectCategory('Categories') && 
          this.state.Categories.map(title => 
            <Link 
              onClick={this.closeMenu} 
              key={title} to={`/collections/${title}`} 
              className="c-menu-subcategory-item">{title.toLowerCase()}
            </Link>)
        }
        {
          this.renderCategoryContainer('Help')
        }
        {
          this.isCorrectCategory('Help') && 
          this.state.Help.map(title => 
            <Link 
              onClick={this.closeMenu} 
              key={title} to={`/help/${title}`} 
              className="c-menu-subcategory-item">{title.toLowerCase()}
            </Link>)
        }
      <Link to="/" className="page-container" onMouseOver= {this.handleMouseOver}>My Account</Link>
      <Link to="/" className="page-container" onMouseOver= {this.handleMouseOver}>New User</Link>
      <Link to="/" className="page-container" onMouseOver= {this.handleMouseOver}>Track Order</Link>
      </div>);

    toggleMenu = () => { console.log(" heey i am toggled ") ;this.setState((prevState)=>({ menuToggled: !prevState.menuToggled}))};
    isCorrectCategory = title => this.state.activeTab === title
    render(){
      const { menuToggled } = this.state;
      const { renderMenu, toggleMenu } = this;
      const { dispatch, cartItems } = this.props;
      console.log({ cartItems })
			return ( 
        <div className="c-menu-mob-wrapper">
          <div className="c-menu-mob-container">
            <Link to="/" className="c-logo">
              <img src="/Logo.png"></img>
            </Link>
            <li className="cart-container" href="/">
                <CartIcon className="c-header_svg" />
                <div className="c-header-cart-items-container" onClick={() => dispatcher(dispatch, toggleCart)}><p>{ cartItems } </p> Items</div> 
            </li>
            <div className="c-menu-mob-icons">
              <Hamburger onClick={() => toggleMenu()}/>
            </div>
          </div>
          { menuToggled && 
            <div className="c-main-menu-container" >
              { renderMenu() }
            </div>
          }
				</div>
			)
    }

    handleMenuItemClick = title => {
      if( title === undefined ) {
        this.setState(() =>({activeTab: "none"}));
      } else {
        const selectedTab = title;
        this.setState((prevState) =>
          selectedTab === prevState.activeTab ?
          ({activeTab: "none"}) :
          ({activeTab: selectedTab,
          }));
      }
    }
}

const mapPropToState = state => {
  return ({
    cartItems : Object.keys(state.cart).length,
  })
}
export default connect(mapPropToState)(Menu);