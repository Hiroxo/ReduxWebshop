//Items.js
import React, {Component} from 'react';
import products from './products.json';

class Items extends Component {

  constructor(props) {
    super(props);
    this.state= {
    };
  }

  render() {
      const theSelection = products.map((product) =>
        <div key= {product.id} >
          <h2> {product.name} </h2>
          <p className= "price"> {product.price} </p>
          <button onClick= {(e) => this.props.addItemToCart(e,{product})}>
             Add {product.name}
           </button> <br/>
           <form onSubmit={(e) => this.props.addItemToCart(e,{product})}>
             <label className= "normal-text"> Quantity: </label>
             <input type="datalist" name='quantity' value={this.state.quantity}
               onChange={(e) => this.props.changeQuant(e, {product}) }/>
               <input type="submit" value= 'ADD'/>
           </form>
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
