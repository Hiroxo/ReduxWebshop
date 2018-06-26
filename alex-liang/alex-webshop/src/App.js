import React, { Component } from 'react';
import shoppingcart from './shoppingcartsmall.png';
import './css/App.css';
import Product from './components/Product.js';
import products from './products.json';




class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      cartItems:[],
      quantity:1,
      currentItem:[]
    };
  }
  changeQuant = (e,item) => {

      this.setState({quantity:  e.target.value});
      this.setState({currentItem: item});
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
      this.setState({cartItems: this.state.cartItems.concat(itemToAdd)});

    if (e !== undefined){
      e.preventDefault();
    }
    //if (this.state.cartItems[0]!==undefined){
      //console.log(this.state.cartItems);
      //console.log(this.state.cartItems[(this.state.cartItems.length-1)]['item']['name']);
    //} else {
      //console.log('cartItems is undefined')
    //}

  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="App-cart" alt="cartpic">
            {Shoppingcart(this.state)}
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
        <div className="itemlist">
          <Checkout cartItems={this.state.cartItems}/>
        </div>
      </div>
    );
  }
}
export default App;

class Checkout extends Component{
  constructor(props){
    super(props)
    this.state ={
    };
  }
  render(){
    if (this.props.cartItems[0]!==undefined){
      console.log(this.props.cartItems);
      console.log(this.props.cartItems[(this.props.cartItems.length-1)]['item']['cost']);
      let totalCost=0;
      let i;
      for (i=0;i<(this.props.cartItems.length);i++){
        totalCost= totalCost+((this.props.cartItems[i]['item']['cost'])*this.props.cartItems[i]['quantity'])
      }
      let itemList = this.props.cartItems.map((cartItem) =>
        <div className='item' key={this.props.cartItems.indexOf(cartItem)}>
          <div className='item-name'>
            {cartItem.item.name}
          </div>
          <div className='item-cost'>
            ${cartItem.item.cost}
          </div>
          <div className='item-img'>
            <img src= {cartItem.item.imgurl}  alt="item-pic"/>
          </div>
          <div className='item-quant'>
            Quantity:{cartItem.quantity}
          </div>
        </div>
      );
      return(
        <div>
          <h1>Checkout List</h1>
          {itemList}
          <h2>Total cost = ${totalCost}</h2>
        </div>
      );
    } else {
      return('Aint nothing in your cart, buddy')
    }
  }
}
function Shoppingcart(props){
  return(
    <button className="App-cart" onClick={props.onClick}>
      <img src={shoppingcart} className="App-cartpic" alt="cartpic"/> {props.cartItems.length}
    </button>
  );
}
