import React from 'react';
import {connect} from 'react-redux';
import Phone from 'react-icons/lib/md/phone';
import Email from 'react-icons/lib/md/email';
import CartIcon from 'react-icons/lib/io/ios-cart';
import { toggleCart } from '../actions/cart';
import dispatcher from './tools/dispatcher';

class Header  extends React.Component{
    constructor(props){
			super(props);
    }

    render(){
      const { dispatch, cartItems } = this.props;
      console.log({ cartItems })
			return ( 
        <div className="c-header">
          <div className="c-header_container">
            <ul className="c-header_account--container">
              <li href="/">
                <p>My Account</p>
              </li>
              <li href="/"> 
                <p>New User</p>
              </li>
              <li href="/"> 
                <p>Track Orders</p>
              </li>
              <li className="cart-container" href="/">
                <CartIcon className="c-header_svg" />
                <div className="c-header-cart-items-container" onClick={() => dispatcher(dispatch, toggleCart)}><p>{ cartItems } </p> Items</div> 
              </li>
            </ul>
            <ul className="c-header_contact--container">
              <li> 
                <Phone className="c-header_svg" />
                <div>+14389228758</div> 
              </li>
              <li> 
                <Email className="c-header_svg" /> 
                <div>info@barigallery.com</div>
              </li>
            </ul>
          </div>
				</div>
			)
    }
}

const mapPropToState = state => {
  return ({
    cartItems : Object.keys(state.cart).length,
  })
}
export default connect(mapPropToState)(Header)