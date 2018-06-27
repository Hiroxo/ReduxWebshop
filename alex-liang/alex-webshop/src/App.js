import React, { Component } from 'react';
import './css/App.css';
import Product from './components/Product.js';
import products from './products.json';
import Checkout from './components/Checkout.js';
import Header from './components/Header.js';


class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      cartItems:[],
      quantity:1,
      currentItem:[],
    };
  }
  removeItem = (e,index) => {
    let {cartItems} = this.state;
    if (index>-1){
      cartItems.splice(index,1);
    }
    this.setState({
      cartItems,
    });
  }
  changeQuant = (e,item) => {
      this.setState({quantity:parseInt(e.target.value,10)});
      this.setState({currentItem: item})
  }
  addItemToCart = (e,itemToAdd) => {
    if (this.state.quantity>0 && this.state.quantity===parseInt(this.state.quantity,10)) {
      itemToAdd.quantity = this.state.quantity;
      let {cartItems} = this.state;
      cartItems.push(itemToAdd);
      this.setState({
        cartItems,
      });
    } else {
      alert('check your quantity')
    }
    if (e !== undefined){
      e.preventDefault();
    }
  }
  render() {
    return (
      <div className="App">
            <Header
              cartItems={this.state.cartItems}
              removeItem={this.removeItem}
            />
        <div className="Item-list">
           <Product
             changeQuant={this.changeQuant}
             addItemToCart={this.addItemToCart}
             products={products} />
        </div>
        <div className="Item-list">
          <Checkout
            cartItems={this.state.cartItems}
            removeItem={this.removeItem}
          />
        </div>
      </div>
    );
  }
}
export default App;
