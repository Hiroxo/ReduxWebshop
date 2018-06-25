import React, { Component } from 'react';
import shoppingcart from './shoppingcartsmall.png';
import './css/App.css';
import Product from './components/Product.js';
import products from './products.json';




class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      cartitems:[],
      itemToAdd:[]
    };
  }
  addItemToCart = (itemToAdd) => {
    this.setState({cartitems: this.state.cartitems.concat(itemToAdd)});
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="App-cart" alt="cartpic">
            {Shoppingcart(this.state)}
            {console.log(this.state.cartitems)}
          </div>
          <h1 className="App-title">Welcome to Alex's Cool Shop </h1> where you can definitely buy stuff
        </div>
        <div className="itemlist">
           <Product addItemToCart={this.addItemToCart} products={products}/>
        </div>
      </div>
    );
  }
}
export default App;


function Shoppingcart(props){
  return(
    <button className="App-cart" onClick={props.onClick}>
      <img src={shoppingcart} className="App-cartpic" alt="cartpic"/> {props.cartitems.length}
    </button>
  );
}
