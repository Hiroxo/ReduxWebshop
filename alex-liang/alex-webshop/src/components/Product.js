import React, {Component} from 'react';
//import products from './../products.json';



class Product extends Component{
  constructor(props){
    super(props);
    this.state={


    }
  }
  addItemsToCart(item,quant){
    var i;
    for (i=0;i<quant;i++){
      this.props.addItemToCart({item})
    }
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
          <button onClick={(e)=>this.props.addItemToCart({item})}>
            Add {item.name} to Cart
          </button>
        </div>
        <div className='item-quant'>
          <form>
            <label>
              Quantity:
              <input type="text" name="quantity" />
            </label>
            <input type="submit" value="Submit to cart?"/>
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
