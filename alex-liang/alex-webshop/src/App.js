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
      quantity:1,
      currentitem:[]

    };
  }
  changeQuant = (e,item) => {
    this.setState({quantity:  e.target.value});
    this.setState({currentitem: item});
    alert("quantity = " + e.target.value);
  }
  addItemsToCart = (e,item) => {
    /*
    var i;
    for (i=0;i<this.state.quantity;i++){
      this.addItemToCart(item);
      alert('adding item: ' + (i+1) );
    };
    e.preventDefault();
  */}
  addItemToCart = (e,itemToAdd) => {
    itemToAdd.quantity=parseInt(this.state.quantity,10);
    this.setState({cartitems: this.state.cartitems.concat(itemToAdd)});
    if (e !== undefined){
      e.preventDefault();
    }
    console.log(JSON.stringify(this.state.cartitems))

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
           <Product
             addItemsToCart={this.addItemsToCart}
             changeQuant={this.changeQuant}
             addItemToCart={this.addItemToCart}
             products={products} />
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
