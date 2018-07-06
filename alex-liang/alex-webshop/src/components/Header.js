import React from 'react';
import '../css/Header.css';
import shoppingCart from '../shoppingcartsmall.png';
import { Link } from "react-router-dom";

const ShoppingCart = props => {
  const onRemove = (e,index) => {
    e.preventDefault();
    props.removeItem(index);
  }
  let totalCost = 0;
  let i;
  for (i=0;i<(props.cartItems.length);i++){
    totalCost= totalCost+((props.cartItems[i]['cost'])*props.cartItems[i]['quantity'])
  }
  let currentItems =props.cartItems
  let itemList = currentItems.map((cartItem) =>
  <div className='Cart-Item' key={props.cartItems.indexOf(cartItem)}>
      Item number:{(currentItems.indexOf(cartItem)+1)}<br></br>
      {cartItem.name} Quantity: {cartItem.quantity}<br></br>
      Price per unit: ${cartItem.cost}<br></br>
      Item Price: ${cartItem.quantity*cartItem.cost}<br></br>
      <button onClick={(e)=>onRemove(e,currentItems.indexOf(cartItem))}>
        Remove {cartItem.name} from Cart
      </button>
  </div>
)
  return(
    <div className="App-header">
      <div className="App-nav" alt="cartpic">
        <Link to='/About' className="Header-Link">About</Link>
        <Link to='/Products' className="Header-Link">Products Page</Link>
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
