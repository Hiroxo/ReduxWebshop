//Header.js
import React, {Component} from 'react';
import { Link } from 'react-router-dom';



class Header extends Component{
  constructor (props) {
      super (props);
      this.state = {

      }
  }


  render () {
    return (
      <header className="App-header">
        <div className= "head-bar" >
          <Link to= '/home'> Home </Link>
          <Link to= '/cart'> Cart </Link>
        </div>
        <h1 className="App-title">A Store For Chris Polk II's Certain "Nicknames"</h1>
      </header>
    );
  }
}






export default Header;
