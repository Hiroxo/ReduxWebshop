import React from 'react';
import '../css/Header.css';
import shoppingCart from '../shoppingcartsmall.png';
import { Link } from "react-router-dom";

const ShoppingCart = props => {
  let totalCost = 0;
  let i;
  for (i=0;i<(props.cartItems.length);i++){
    totalCost= totalCost+((props.cartItems[i]['item']['cost'])*props.cartItems[i]['quantity'])
  }
  let currentItems =props.cartItems
  let itemList = currentItems.map((cartItem) =>
  <div className='Cart-Item' key={props.cartItems.indexOf(cartItem)}>
      Item number:{(currentItems.indexOf(cartItem)+1)}<br></br>
      {cartItem.item.name} Quantity: {cartItem.quantity}<br></br>
      Price per unit: ${cartItem.item.cost}<br></br>
      Item Price: ${cartItem.quantity*cartItem.item.cost}<br></br>
      <button onClick={(e)=>props.removeItem(e,currentItems.indexOf(cartItem))}>
        Remove {cartItem.item.name} from Cart
      </button>
  </div>
)
  return(
    <div className="App-header">
      <div className="App-nav" alt="cartpic">
        <Link to='/About' className="Header-Link">About</Link>
        <Link to='/Products' className="Header-Link">Cool Stuff For Sale!</Link>
        <div className="App-cart">
          <Link to='/Checkout'>
            <button>
              <img src={shoppingCart} className="App-cartpic" alt="cartpic"/>
              {props.cartItems.length}
            </button>
          </Link>
          <div className="Cart-list">
            <div className="Item-list">
              {itemList}<br></br>
              Total Checkout: ${totalCost}
            </div>
          </div>
        </div>
      </div>
      <h1 className="App-title">Welcome to Alex's Cool Shop </h1>
      where you can definitely buy stuff
    </div>
  );
}
export default ShoppingCart
