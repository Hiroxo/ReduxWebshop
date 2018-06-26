import React, { Component } from 'react';
import Items from './Items.js';
import Cart from './cart.js';
import './App.css';

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
    });

    if (e !== undefined) {
        e.preventDefault();
    }

    if(this.state.shoppingList[0] !== undefined) {
      console.log(this.state.shoppingList);
    } else {
      alert('shoppingList is undefined')
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button className= "purchase"> Purchase! </button>
          <h1 className="App-title">A Store For Certain "Nicknames"</h1>
        </header>
        <div>
          <Items
            addItemToCart = {this.addItemToCart}
            changeQuant= {this.changeQuant}
            />
          <Cart />
        </div>
          <div className="clearIt">
          <button onClick= {this.reset}>
              Clear List!
           </button>
          </div>
      </div>
    );
  }
}

export default App;
