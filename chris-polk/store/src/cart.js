//cart.js
import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Cart extends Component{
  constructor(props){
    super(props)
    this.state ={
      cartItems:this.props.CartItems,
    };
  }
  render(){
    if (this.props.cartItems[0]!==undefined){
      let currentItems=this.props.cartItems;
      let totalCost=0;
      let i;
      for (i=0;i<(currentItems.length);i++){
        totalCost= totalCost+((currentItems[i]['product']['price'])*currentItems[i]['quantity']);
      }
      let itemList = currentItems.map((cartItem) =>
        <div className='Item' key={currentItems.indexOf(cartItem)}>
          <div className='item-name'>
            Item number:
            {(currentItems.indexOf(cartItem)+1)}<br></br>
            {cartItem.product.name}
          </div>
            <img className='item-img' src= {cartItem.product.imgUrl}  alt="item-pic"/>
            <p>
              Quantity: {cartItem.quantity}<br></br>
              Price per unit: ${cartItem.product.price}<br></br>
              Item Price: ${cartItem.quantity*cartItem.product.price}
            </p>
            <button onClick={(e)=>this.props.removeItem(e,currentItems.indexOf(cartItem))}>
              remove {cartItem.product.name} number  {(currentItems.indexOf(cartItem)+1)} from Cart
            </button>
        </div>
      );
      return(
        <div>
          <h1>Checkout List</h1>
          {itemList}
          <h2>Total cost : ${totalCost}</h2>
          <button className="checkout-button"> <Link to='/checkout'> Checkout </Link> </button>
          <button className="reset-button" onClick={(e) => this.props.clearList()}> Clear List! </button>

        </div>
      );
    } else {
      return('Your cart is Empty!');
    }
  }
}

export default Cart;
