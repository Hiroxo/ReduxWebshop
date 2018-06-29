import React, { Component } from 'react';
import './css/App.css';
import Product from './components/Product.js';
import products from './products.json';
import About from './components/About.js';
import Thankyou from './components/Thankyou.js';
import Checkout from './components/Checkout.js';
import Header from './components/Header.js';
import { Redirect, Route, Switch } from "react-router-dom";
import creditCardNums from './creditCardNumbers.json';

class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      cartItems:[],
      quantity:1,
      currentItem:[],
      totalCost:0,
      Email:'',
      Address:'',
      State:'',
      ZipCode:'',
      creditCardNumber:0,
      validation:false,
      creditCardError:null
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
      let currentItems = this.state.cartItems
      let { totalCost } = this.state;
      let i;
      for (i=0;i<(currentItems.length);i++){
        totalCost= totalCost+((currentItems[i]['item']['cost'])*currentItems[i]['quantity'])
      }
      this.setState({
        totalCost,
      });
    } else {
      alert('check your quantity')
    }
    if (e !== undefined){
      e.preventDefault();
    }
  }
  updateUserInfo = (e) => {
    e.preventDefault();
    this.setState ({
      [e.target.name] : e.target.value
    })
  }
  validate = (e,items) => {
    e.preventDefault();
    let i;
    for (i=0;i<creditCardNums.length;i++){
      if (parseInt(this.state.creditCardNumber,10) === creditCardNums[i]) {
        this.setState ({validation: true});
        this.setState ({cartItems:[]});
        this.setState ({creditCardError:''});
      } else {
        this.setState ({validation:false});
        this.setState ({creditCardError:'Your Credit Card Number is Invalid'});
      }
    }
  }
  resetValidation = () => {
    if (this.state.validation){
      this.setState({validation:false});
    }
  }
  render() {
    return (
      <div className="App">
        <Header
          cartItems={this.state.cartItems}
          removeItem={this.removeItem}
        />
          <Switch>
            <Route path='/Products' render={() =>
              <Product
                changeQuant={this.changeQuant}
                addItemToCart={this.addItemToCart}
                products={products}
              />
            }/>
            <Route path='/Checkout' render={() => !this.state.validation ? (
              <Checkout
                cartItems={this.state.cartItems}
                removeItem={this.removeItem}
                updateUserInfo={this.updateUserInfo}
                validate={this.validate}
                creditCardError={this.state.creditCardError}

              />
            ) : (
              <Redirect push to="/Success"/>)
            }/>
            <Route path='/About' component={About}/>
            <Route path='/Success' render={() =>
              <Thankyou
                totalCost={this.state.totalCost}
                email={this.state.email}
                resetValidation={this.resetValidation}

              />
            }/>

          </Switch>
        </div>
    );
  }
}
export default App;
