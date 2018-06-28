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
      <div className='Item' key={item.id}>
        <div className='Item-name'>
          {item.name}
        </div>
        <div className='Item-cost'>
          ${item.cost}
        </div>
        <div className='Item-img'>
          <img src= {item.imgurl}  alt="item-pic"/>
          <button onClick={(e)=>this.props.addItemToCart(e,{item})}>
            Add {item.name} to Cart
          </button>
        </div>
        <div className='Item-quant'>
          <form onSubmit={(e)=>this.props.addItemToCart(e,{item})}>
            <label>
              Quantity:
            </label>
            <input type="number" name='quantity'  onChange={
              (e) => this.props.changeQuant(e,{item})
            }/>
            <input type="submit" value="Add Item To Cart"/>
          </form>
        </div>
      </div>
    );
    return(
      <div className="Item-list">
        <h1>Cool Items For Sale!</h1>
        {itemList}
      </div>
    );
  }
}
export default Product;
