import React from 'react';
import {connect} from 'react-redux';
import cx from 'classnames'
import history from './tools/history';
import Cart from './Cart';
const Checkout = ({ cart, dispatch}) => {
  const classWrappers = cx({
    'c-pdp-container': true,
  });

  return ( 
    <div className={classWrappers}>
      Thanks for shopping with us. an email has been sent containg your order details.
    </div>
  )
}


const mapStateToProps = state => ({ cart : state.cart })

export default connect(mapStateToProps)(Checkout)