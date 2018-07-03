import React from 'react';
//import products from './../products.json';
const checkNum = (number) => {
  if (isNaN(number)) {
    return ('')
  } else {
    return(number)
  }
}

const Product = props => {
    let itemList = props.products.map((item) =>
      <div className='Item' key={item.id}>
        <div className='Item-name'>
          {item.name}
        </div>
        <div className='Item-cost'>
          ${item.cost}
        </div>
          <img src={item.imgurl} className='Item-img' alt="item-pic"/>
          {/*<button onClick={(e)=>props.addItemToCart(e,{item})}>
            Add {item.name} to Cart
          </button>*/}
        <div className='Item-quant'>
          <form onSubmit={(e)=> props.addItemToCart(e,{item})}>
            <label>
              Quantity:
            </label>
            <input type='number' className='Quantity'
              value={checkNum(props.quantity[item.name])}
              onChange={(e) => props.changeQuant(e,{item})}
            />
            <input type="submit" value={"Add " + item.name + " To Cart"}/>
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
export default Product;
