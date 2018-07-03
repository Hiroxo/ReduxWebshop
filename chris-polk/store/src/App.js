import React, { Component } from 'react';
import Items from './Items.js';
import Cart from './cart.js';
import Checkout from './checkout.js';
import Header from './Header.js';
import './App.css';
import { Route, Switch } from 'react-router-dom';



const initialState = {
  shoppingList: [],
  quantity: 1
};



class App extends Component {

  constructor(props) {
    super(props);
    this.state = initialState;

  }

  reset = () => {
    this.setState({
      shoppingList: [],
    })
  }

  changeQuant = (e,item) => {
    this.setState({quantity: e.target.value});
    this.setState({currentItem: item});
  }

  addItemToCart = (e, itemToAdd) => {
    const { shoppingList } = this.state;
    itemToAdd.quantity = parseInt(this.state.quantity, 10);
    shoppingList.push(itemToAdd);

    this.setState({
      shoppingList,
    })
  }

    removeItem = (e,index) => {
      const { shoppingList } = this.state;
      if (index > -1) {
        shoppingList.splice(index,1);
      }
      this.setState({
        shoppingList,
      });

    if (e !== undefined) {
        e.preventDefault();
    }

  }

  render() {
    return (
      <div className="App">
        <Header />
          <Switch>
            <Route path='/cart' render = { () =>
                <Cart
                  cartItems={this.state.shoppingList}
                  removeItem={this.removeItem}
                  clearList={this.reset}
                />
            } />
              <Route path='/home' render = {() =>
                <Items
                addItemToCart = {this.addItemToCart}
                changeQuant= {this.changeQuant}
                />
            } />
            <Route path='/checkout' render ={ () =>
                <Checkout
                    shoppingList={this.state.shoppingList}
                    reset = {this.reset}
                />
            } />
          </Switch>
      </div>
    );
  }
}

export default App;
