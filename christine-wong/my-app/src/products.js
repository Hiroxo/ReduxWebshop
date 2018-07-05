import React, { Component } from 'react';
//import products from './products.json';

class Products extends Component {
  constructor(props){
    super(props);
    this.state={
    }
  }

  render() {
    let productList = this.props.products.map((product) =>
    <div className="gallery">
      <br></br>
      <div className='product' key={product.id}>
          <div className='productName'>
            {product.name}
          </div>
          <br></br>
          <div className='productPrice'>
            ${product.price}
          </div>
          <br></br>
          <div className='productImage'>
            <img src={product.image} alt="productPic" />
            <br></br>
            <br></br>
                <button onClick={(e)=>this.props.addItemstoCart({product})}>
                  ADD this item to cart
                </button>
                <button onClick={(e)=>this.props.removeItemsfromCart({product})}>
                  REMOVE this item from cart (doesn't work rn)
                </button>
          </div>
        <br></br>
        <br></br>
      </div>
    </div>
  );
    return(
      <div>{productList}</div>
    );
  }
}
export default Products;
