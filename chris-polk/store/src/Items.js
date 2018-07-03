//Items.js
import React, {Component} from 'react';
import products from './products.json';
//import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const options = [1,2,3,4,5];
//const defaultOption = options[0];

class Items extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selection: options[0]
    };

    this.onSelect = this.onSelect.bind(this);
  }

  onSelect(e,option) {
      this.setState(option.label);
  }

  render() {
      const theSelection = products.map((product) =>
        <div key= {product.id} >
          <h2> {product.name} </h2>
          <img className='item-img' src= {product.imgUrl}  alt="item-pic"/>
          <p className= "price"> ${product.price} </p>
          <div className="product-desc"> {product.desc} </div>
          <button onClick= {(e) => this.props.addItemToCart(e,{product})}>
             Add {product.name}
           </button> <br/>
             <label className= "normal-text"> Quantity: </label>
            { /* <Dropdown  options={options} onChange={(e) => this.props.changeQuant(e, {product})} value = {selection} placeholder= "Select an option" />
             <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" /> */}
             <input type="datalist" name='quantity' value={this.state.quantity}
               onChange={(e) => this.props.changeQuant(e, {product}) }/>
               <button onClick={(e) => this.props.addItemToCart(e,{product})}> Add {product.name} to cart </button>
        </div>
      );

    return (
      <div className= "store">
        {theSelection}

      </div>

    );
  }
}


export default Items;
