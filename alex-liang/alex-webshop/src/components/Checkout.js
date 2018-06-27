import React, { Component } from 'react';


class Checkout extends Component{
  constructor(props){
    super(props)
    this.state ={
      cartItems:this.props.cartItems,
    };
  }
  render(){
    if (this.props.cartItems[0]!==undefined){
      console.log(this.props.cartItems);
      console.log(this.props.cartItems[(this.props.cartItems.length-1)]['item']['cost']);
      let currentItems=this.props.cartItems
      let totalCost=0;
      let i;
      for (i=0;i<(currentItems.length);i++){
        totalCost= totalCost+((currentItems[i]['item']['cost'])*currentItems[i]['quantity'])
      }
      let itemList = currentItems.map((cartItem) =>
        <div className='Item' key={currentItems.indexOf(cartItem)}>
          <div className='item-name'>
            Item number:
            {(currentItems.indexOf(cartItem)+1)}<br></br>
            {cartItem.item.name}
          </div>
            <img className='item-img' src= {cartItem.item.imgurl}  alt="item-pic"/>
            <p>
              Quantity: {cartItem.quantity}<br></br>
              Price per unit: ${cartItem.item.cost}<br></br>
              Item Price: ${cartItem.quantity*cartItem.item.cost}
            </p>
            <button onClick={(e)=>this.props.removeItem(e,currentItems.indexOf(cartItem))}>
              remove {cartItem.item.name} number  {(currentItems.indexOf(cartItem)+1)} from Cart
            </button>
        </div>
      );
      return(
        <div>
          <h1>Checkout List</h1>
          {itemList}
          <h2>Total cost = ${totalCost}</h2>

        </div>
      );
    } else {
      return('Aint nothing in your cart, buddy')
    }
  }
}
export default Checkout
