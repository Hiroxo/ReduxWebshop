import React, {Component} from 'react';
//import products from './../products.json';



class Product extends Component{
  constructor(props){
    super(props);
    this.state={
    };
  }
  render() {
    let itemList =
    this.props.products.map((item) =>
      <div className='Item' key={item.id}>
        <div className='Item-name'>
          {item.name}
        </div>
        <div className='Item-cost'>
          ${item.cost}
        </div>

          <img src={item.imgurl} className='Item-img' alt="item-pic"/>
          <button onClick={(e)=>this.props.addItemToCart(e,{item})}>
            Add {item.name} to Cart
          </button>
        <div className='Item-quant'>
          <form onSubmit={(e)=>this.props.addItemToCart(e,{item})}>
            <label>
              Quantity:
            </label>
            <input type="number" className='Quantity' onChange={
              (e) => this.props.changeQuant(e,{item})
            }/>
            <input type="submit" value="Add Amount To Cart"/>
          </form>
        </div>
      </div>
    );
    return(
      <div className="Item-list">
        <h1>Cool Items For Sale!</h1>
        <div className="Item-list-flex">
          {itemList}
        </div>
      </div>
    );
  }
}
export default Product;
