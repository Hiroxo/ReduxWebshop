import React, { Component } from 'react';
//import logo from './logo.svg';
//import piano from './public/digital.piano.jpg';
//import violin from './public/violin.jpg';
import './App.css';
import shoppingcart from './cart.png';
import Products from './products.js';
import products from './products.json';

class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      cartItems: [],
      itemsAdd: []
    };
  }

  addItemstoCart = (itemsAdd) => {
    this.setState({cartItems: this.state.cartItems.concat(itemsAdd)});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Christine's Second-Hand Music Shop</h1>
          <h2 className="App-caption">where you can buy cool music stuff</h2>
        </header>
        <div className="App-cart" alt="cartpic">
          {ShoppingCart(this.state)}
          {console.log(this.state.cartItems)}
        </div>
        <p className="App-intro">
          This unique music store consists of used instruments and music tools.
          If you don't want to buy a brand new item, this is for you!
          It's a great way to save money and get something of a good quality.
          Choose products that you want it added to your cart.
        </p>

        <div className="productList">
            <Products addItemstoCart={this.addItemstoCart} products={products}/>
        </div>
      </div>
    );
  }
}

export default App;

function ShoppingCart(props){
  return(
    <button className="App-cart" onClick={()=>{if(confirm('Proceed to checkout')){console.log(this.props.cartItems)};}}>
      <img src={shoppingcart} className="cartPic" alt="cartpic" />
      {props.cartItems.length}
    </button>
  );
}

//{props.onClick}

function popupWindow(){
  if(confirm("Proceed to checkout?")){
    console.log(this.props.cartItems);
  }
  else{
    console.log('end program');
  }

//  document.getElementById("prompt").innerHTML = prompt;
}
