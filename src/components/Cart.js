import React, {useState, useEffect, useRef} from 'react';
import {connect} from 'react-redux';
import cx from 'classnames'
import MdClose from 'react-icons/lib/md/close';
import ArrowBack from 'react-icons/lib/md/arrow-back';
import dispatcher from '../components/tools/dispatcher';
import { toggleCart as toggle } from '../actions/cart';
import AddressForm from './address/AddressForm';
import CreditCard from './creditCard/CreditCard';
import history from './tools/history';
import { generateCheckout } from './tools/getStoreData';
import { useScrollBody } from '../hooks/scroll.hook';
const Cart = ({ cart, toggleCart, dispatch}) => {
  const [ step, setStep ] = useState(1);
  useScrollBody(toggleCart.cartOpned);
  const classWrappers = cx({
    'toggleCart': toggleCart.cartOpned,
    'c-cart_overlay_container': true,
  });
  const handlePurchase = () => {
    let windowReference = window.open();
    generateCheckout(cart).then(res => {
      res.status === 200 ? windowReference.location = res.data.checkoutCreate.checkout.webUrl : window.open('/', '_blank').focus();
    });
  }
  const handleMoveStepForward = () => { 
    return step === 1 ?
    setStep(2) :
    step === 2 ? 
    setStep(3) :
    dispatcher(dispatch, toggle).then( () => history.push('/checkout'))
  }
  const handleMoveStepBackward = () => { 
    return step === 3 ?
    setStep(2) :
    step === 2 ? 
    setStep(1) :
    setStep(1);
  }
  const renderStep = (stepToRender = 1) => {
    return (
        stepToRender === 1 ?
        Object.keys(cart).length ? 
          Object.entries(cart).map( ([, { image, title, frame, size, price, quantity, frameImage }]) => (
            <div className="c-cart-product-details">
              <img src={frameImage !== undefined ? frameImage.src : image} />
              <div className="c-cart-product-details-content">
                <p>{ title }</p>
                <div>
                <span>
                  <p> Frame: { frame }</p>
                </span>
                <span>
                  <p> Size: { size }</p>
                </span>
                </div>
                <span>
                  <p>{ price*quantity } CAD</p>
                </span>
                <span>
                  <p>{ quantity } Pcs</p>
                </span>
              </div>
            </div>
          )) : null 
          : stepToRender === 2 ?
          <div className="c-cart-billing-address">
            <p>Billing Address</p> 
            <AddressForm />
          </div> :
          stepToRender === 3 ? 
          <div className="c-cart-payment-method">
            <p>Payment</p>
            <CreditCard />
          </div> :
          null
    )
  }
  return ( 
    <div className={classWrappers}>
      { step === 1 ? <MdClose className="c-cart-close_button" onClick={() => dispatcher(dispatch, toggle)} /> : null}
      <div className="c-cart-title" > Your Cart </div>
        <div className="c-cart-products-details_container">
          {!Object.keys(cart).length && <div> Cart is Empty</div> }
          { renderStep(step) }
          { step !== 1 ? <ArrowBack onClick={() => handleMoveStepBackward() }/> : null}
        </div>
        { step === 1 && Object.keys(cart).length ? <div className="c-checkout"  onClick={() => handlePurchase() }> Continue to a secure checkout </div> : null }
        { step === 2 && Object.keys(cart).length ? <div className="c-checkout"  onClick={() => handleMoveStepForward() }> Payment </div> : null }
        { step === 3 && Object.keys(cart).length ? <div className="c-checkout"  onClick={() => handlePurchase() }> Purchase </div> : null }
    </div>
  )
}
const mapStateToProps = state => ({ cart : state.cart, toggleCart: state.toggleCart})

export default connect(mapStateToProps)(Cart)