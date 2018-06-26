import React, {Component} from 'react';
//import products from './../products.json';



class Product extends Component{
  constructor(props){
    super(props);
    this.state={
    };
  }
  render() {
    let itemList = this.props.products.map((item) =>
      <div className='item' key={item.id}>
        <div className='item-name'>
          {item.name}
        </div>
        <div className='item-cost'>
          ${item.cost}
        </div>
        <div className='item-img'>
          <img src= {item.imgurl}  alt="item-pic"/>
          <button onClick={(e)=>this.props.addItemToCart(e,{item})}>
            Add {item.name} to Cart
          </button>
        </div>
        <div className='item-quant'>
          <form onSubmit={(e)=>this.props.addItemToCart(e,{item})}>
            <label>
              Quantity:
            </label>
            <input type="number" name='quantity' value={this.state.quantity} onChange={
              (e) => this.props.changeQuant(e,{item})
            }/>
            <input type="submit" value="Add Item To Cart"/>
          </form>
        </div>
      </div>
    );
    return(
      <div>{itemList}
      </div>

    );
  }
}
export default Product;
