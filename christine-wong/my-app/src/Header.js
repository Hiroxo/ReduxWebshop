import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Header extends Component{
  constructor(props){
    super(props)
    this.state ={
      
    }
  }

  render(){
    return(
      <header className="App-header">
        <div className="header">
          <Link to='/Home'>___HOME___</Link>
          <Link to='/About'>___ABOUT___</Link>
          <Link to='/Products'>___PRODUCTS___</Link>
          <Link to='/Checkout'>___CHECKOUT___</Link>
        </div>
        <br></br>
        <h1 className="App-title">Welcome to Christine's Second-Hand Music Shop</h1>
        <h2 className="App-caption">where you can definitely buy cool music things</h2>
      </header>
    );
  }
}
export default Header;
