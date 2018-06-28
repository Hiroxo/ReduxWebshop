import React, { Component } from 'react';
import '../css/Header.css';
import shoppingCart from '../shoppingcartsmall.png';
import { Link} from "react-router-dom";


class ShoppingCart extends Component{
  constructor(props){
    super(props)
    this.state ={
      isMouseInside:false,
    };
  }
  mouseEnter = () => {
    this.setState({ isMouseInside: true });
  }
  mouseLeave = () => {
    this.setState({ isMouseInside: false });
  }
  shoppingList = () => {
    let totalCost=0;
    let i;
    for (i=0;i<(this.props.cartItems.length);i++){
      totalCost= totalCost+((this.props.cartItems[i]['item']['cost'])*this.props.cartItems[i]['quantity'])
    }
    let currentItems =this.props.cartItems
    let itemList = currentItems.map((cartItem) =>
    <div className='Item' key={this.props.cartItems.indexOf(cartItem)}>
        Item number:{(currentItems.indexOf(cartItem)+1)}<br></br>
        {cartItem.item.name} Quantity: {cartItem.quantity}<br></br>
        Price per unit: ${cartItem.item.cost}<br></br>
        Item Price: ${cartItem.quantity*cartItem.item.cost}<br></br>
        <button onClick={(e)=>this.props.removeItem(e,currentItems.indexOf(cartItem))}>
          Remove {cartItem.item.name}. Item number: {(currentItems.indexOf(cartItem)+1)} from Cart
        </button>
    </div>
    )
    return(
          <div className="Item-list">
            {itemList}<br></br>
            Total Checkout: ${totalCost}
          </div>
    );
  }

  render(){
    return(
      <div className="App-header">
        <div className="App-nav" alt="cartpic">
          <Link to='/About'>About</Link>
          <Link to='/Products'>Cool Stuff For Sale!</Link>
          <div className="App-cart" onMouseLeave={this.mouseLeave}>
            <Link to='/Checkout'>
            <button  onMouseEnter={this.mouseEnter} >
              <img src={shoppingCart} className="App-cartpic" alt="cartpic"/>
              {this.props.cartItems.length}
            </button>
            </Link>
            <div className="Cart-list">
              {this.state.isMouseInside ? <div>{this.shoppingList()}</div> : null}
            </div>
          </div>

        </div>

        <h1 className="App-title">Welcome to Alex's Cool Shop </h1>
        where you can definitely buy stuff
      </div>
    );
  }
}
export default ShoppingCart
