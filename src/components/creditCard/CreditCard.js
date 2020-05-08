import PaymentCard from 'react-payment-card-component'
import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import AddressItem from '../address/AddressItem';
export default () => {

  const [name, setName] = useState('');
  const [cvv, setCVV] = useState('');
  const [ex, setEx] = useState('');
  const [number, setNumber] = useState('4111 1111 1111 1111');
  const [ flip, setFlip ] = useState(false);
  return (
    <div>
    {console.log({ flip , name, ex, cvv})}
      <AddressItem label="Card Holder Name" id="name" value={name} onChange={(e) => {setName(e.target.value); setFlip(false)}} placeholder="" />
      <AddressItem label="Expiration Date" id="expiration" value={ex} onChange={(e) => {setEx(e.target.value); setFlip(false)}} placeholder="" />
      <AddressItem label="cvv" id="cvv" value={cvv} onChange={(e) => {setCVV(e.target.value); setFlip(true)}} placeholder="" />
      <AddressItem label="number" id="number" value={number} onChange={(e) => {e.target.value.length <17 && setNumber(e.target.value); setFlip(false)}} placeholder="" />
      <PaymentCard
        brand="Visa"
        number={number}
        cvv={cvv}
        holderName={name}
        expiration={ex}
        flipped={flip}
        bank={'default'}
      />
    </div>
  );
}
