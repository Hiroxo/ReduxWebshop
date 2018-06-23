//Items.js
import React, {Component} from 'react';
import products from './products.json';


class Items extends Component {
  render() {
      const theSelection = products.map((product) =>
        <div key= {product.id} >
          <h2> {product.name} </h2>
          <p> {product.price} </p>
        </div>
      );
      
    return (
      <div>
        {theSelection}
      </div>

    );
  }
}


export default Items;
