import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import Home from './Home.js';
import About from './About.js';
import Products from './products.js';
import Checkout from './Checkout.js';
import { Route, Switch } from "react-router-dom";
import shoppingcart from './cart.png';
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

  removeItemsfromCart = (itemsAdd) => {
      this.setState({cartItems: this.state.cartItems.splice(itemsAdd)});
  }

  render() {
    return (
      <div className="App">
        <Header
          cartItems={this.state.cartItems}
          //removeItem={this.removeItem}
        />
        <div className="App-cart" alt="cartpic">
          {ShoppingCart(this.state)}
          {console.log(this.state.cartItems)}
        </div>
        <Switch>
          <Route path='/Home' component={Home} />
          <Route path='/About' component={About} />
          <Route path='/Products' render={() =>
            <div className="productList">
              <br></br>
                <Products addItemstoCart={this.addItemstoCart}
                  removeItemsfromCart={this.removeItemsfromCart}
                  products={products}
                  totalPrice={totalPrice}/>
            </div>
          }/>
          <Route path='/Checkout' render={() =>
            <Checkout
            cartItems={this.state.cartItems}
            totalPrice={totalPrice} />
        }/>
        </Switch>
      </div>
    );
  }
}
export default App;

function ShoppingCart(props){
  return(
    <div className="dropdown">
      <button className="App-cart" onClick={()=>popupWindow(props)}>
        <img src={shoppingcart} className="cartPic" alt="cartpic" />
        {props.cartItems.length}
      </button>
      <div className ="dropdown-content">
        <p>Click cart to see list</p>
      </div>
    </div>
  );
}

function totalPrice(props){
  var total = 0;
  var i;
  for(i=0; i < props.length; i++){
    total += props[i]['product']['price'];
  }
  console.log(total);
  return total;
}

function totalNames(props){
  var fullList = "You have bought: ";
  var i;
  for(i=0; i < props.cartItems.length; i++){
    fullList += props.cartItems[i]['product']['name'] + " | ";
  }
  console.log(fullList);
  return fullList;
}

function popupWindow(props){
    alert(totalNames(props) + "| Go to the CHECKOUT Tab above to finish your purchase.");
}
