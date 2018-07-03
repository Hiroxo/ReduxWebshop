import React, { Component } from 'react';
import '../css/App.css';
import Product from '../components/Product.js';
import About from '../components/About.js';
import Thankyou from '../components/Thankyou.js';
import Checkout from '../components/Checkout.js';
import NoMatch from '../components/NoMatch.js';
import Header from '../components/Header.js';
import TotalCost from '../components/TotalCost.js'
import { Redirect, Route, Switch } from "react-router-dom";
import creditCardNums from '../creditCardNumbers.json';
import products from '../products.json';


let initialQuant={};
  products.map((item) =>
    initialQuant[item.name] = 0
  )

class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      cartItems:[],
      quantity:initialQuant,
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
    this.setState({
      totalCost:TotalCost(this.state.cartItems)
    });
  }
  changeQuant = (e,item) => {
      let quant = parseInt(e.target.value,10);
      let name = item.item.name;
      let {quantity} = this.state;
      quantity[name] = quant
      this.setState({quantity,});
  }
  addItemToCart = (e,itemToAdd) => {
    e.preventDefault();
    if (this.state.quantity[itemToAdd.item.name]>0 &&
    this.state.quantity[itemToAdd.item.name] ===
    parseInt(this.state.quantity[itemToAdd.item.name],10)) {
      itemToAdd.quantity = this.state.quantity[itemToAdd.item.name];
      let {cartItems} = this.state;
      cartItems.push(itemToAdd);
      this.setState({
        cartItems,
      });
      this.setState({
        totalCost:TotalCost(this.state.cartItems)
      });
    } else {
      alert('check your quantity')
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
                quantity={this.state.quantity}
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
                email={this.state.Email}
                resetValidation={this.resetValidation}
                totalCost={this.state.totalCost}
              />
            }/>
            <Route path='*' component={NoMatch} />
          </Switch>
        </div>
    );
  }
}




export default App;
