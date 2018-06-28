import React, { Component } from 'react';





class Checkout extends Component{
  constructor(props){
    super(props)
    this.state ={
      cartItems:this.props.cartItems,



    };
  }
  updateCNN = (e) => {
    this.setState({CNN : parseInt(e.target.value,10)})
  }

  render(){
    if (this.props.cartItems[0]!==undefined){
      let currentItems=this.props.cartItems
      let totalCost=0;
      let i;
      for (i=0;i<(currentItems.length);i++){
        totalCost= totalCost+((currentItems[i]['item']['cost'])*currentItems[i]['quantity'])
      }
      let itemList = currentItems.map((cartItem) =>
        <div className='Item' key={currentItems.indexOf(cartItem)}>
          <div className='Item-name'>
            Item number:
            {(currentItems.indexOf(cartItem)+1)}<br></br>
            {cartItem.item.name}
          </div>
            <img className='Item-img' src= {cartItem.item.imgurl}  alt="item-pic"/>
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

      let checkoutForm = (
        <div className="Checkout-Form">
          <form className="Form" onSubmit={(e) => {
            this.props.validate(e,{currentItems});
            
          }}>
            <h2>Payment Information </h2>

            <div className="Form-Item">
              <label>Email:</label>
              <input type="email"
                className="Form-Email"
                name="Email"
                placeholder="You.are@awesome.com"
                onChange={(e)=>this.props.updateUserInfo(e)}
              />
            </div>
            <div className="Form-Item">
              <label>Address:</label>
              <input type="string"
                className="Form-Address"
                name="Address"
                placeholder="I live here"
                onChange={(e)=>this.props.updateUserInfo(e)}
              />
            </div>
            <div className="Form-Item">
              <label>State:</label>
              <input type="string"
                className="Form-State"
                name="State"
                onChange={(e)=>this.props.updateUserInfo(e)}
              />
            </div>
            <div className="Form-Item">
              <label>Zip Code:</label>
              <input type="number"
                className="Form-ZipCode"
                name="ZipCode"
                onChange={(e)=>this.props.updateUserInfo(e)}
              />
            </div>
            <div className="Form-Item">

              <label>Credit Card Number:</label>
              <input type="number"
                className="Form-CreditCardNum"
                name="creditCardNumber"
                onChange={(e)=>this.props.updateUserInfo(e)}
              />
            </div>
            <button type="submit" className="Submit">
              Checkout
            </button>
            <div className="Error-Message">{this.props.creditCardError}</div>

          </form>
        </div>
      )
      return(
        <div className="Item-list">
          <h1>Checkout List</h1>
          {itemList}
          <h2>Total Price = ${totalCost}</h2>
          {checkoutForm}
        </div>
      );
    } else {
      return(
        <div className="Item-list">
          <h1>Aint nothing in your cart, buddy</h1>
        </div>
      )
    }
  }
}
export default Checkout
