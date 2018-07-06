import React, { Component } from 'react';
import products from './../products.json';
const checkNum = (number) => {
  if (isNaN(number)) {
    return ('')
  } else {
    return(number)
  }
}

let initialQuant={};
  products.map((item) =>
    initialQuant[item.name] = 0
  );

class Product extends Component {
  constructor(props){
    super(props)
    this.state ={
      quantity:initialQuant,
    };
  }
  onAdd = (e,item) =>{
    e.preventDefault();
    if (this.state.quantity[item.item.name]>0 &&
    this.state.quantity[item.item.name] ===
    parseInt(this.state.quantity[item.item.name],10)){

      this.props.addItemToCart(item,this.state.quantity[item.item.name]);
    } else {
      alert('check your quantity')
    }
  }
  changeQuant = (e,item) => {
      let quant = parseInt(e.target.value,10);
      let name = item.item.name;
      let {quantity} = this.state;
      quantity[name] = quant
      this.setState({quantity,});
    }
  render(){
    let itemList = products.map((item) =>
      <div className='Item' key={item.id}>
        <div className='Item-name'>
          {item.name}
        </div>
        <div className='Item-cost'>
          ${item.cost}
        </div>
          <img src={item.imgurl} className='Item-img' alt="item-pic"/>
          {/*}<button onClick={(e)=>this.onAdd(e,{item})}>
            Add {item.name} to Cart
          </button>*/}
        <div className='Item-quant'>
          <form onSubmit={(e)=> this.onAdd(e,{item})}>
            <label>
              Quantity:
            </label>
            <input type='number' className='Quantity'
              value={checkNum(this.state.quantity[item.name])}
              onChange={(e) => this.changeQuant(e,{item})}
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
}
export default Product;
