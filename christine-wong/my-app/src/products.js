import React, { Component } from 'react';
//import products from './products.json';


class Products extends Component {
  constructor(props){
    super(props);
    this.state={

    }
  }

/* addItemstoCart(product, num){
    var i;
    for(i=0; i < num; i++){
      this.props.addItemstoCart({product})
    }
  }
*/
  render() {
    let productList = this.props.products.map((product) =>
      <div className='product' key={product.id}>
        <div className='productName'>
          {product.name}
        </div>
        <div className='productPrice'>
          ${product.price}
        </div>
        <div className='productImage'>
          <img src={product.image} alt="productPic" />
        <button onClick={(e)=>this.props.addItemstoCart({product})}>
          Add this to cart
        </button>
      </div>
        <p>

        </p>
      </div>
  );
  return(
    <div>{productList}</div>
  );
    /*const productGrid = products.map((product) =>
      <div key={product.id}>
        <h1>{product.name}</h1>
        <img src={product.image} />
        <p>{product.price}</p>
        <button onClick={(e)=>this.props.addItemstoCart({product})}>
            Add to cart
        </button>
      </div>
    );
    return (
        <div>
          {productGrid}
        </div>
    );
  }
  */
  }
}
export default Products;
