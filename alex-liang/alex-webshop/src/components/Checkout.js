import React from 'react';

const Checkout = props => {
  const onRemove = (e,index) => {
    e.preventDefault();
    props.removeItem(index);
  }
  if (props.cartItems[0]!==undefined){
    let currentItems=props.cartItems
    let totalCost=0;
    let i;
    for (i=0;i<(currentItems.length);i++){
      totalCost= totalCost+((currentItems[i]['cost'])*currentItems[i]['quantity'])
    }
    let itemList = currentItems.map((cartItem) =>
      <div className='Item' key={currentItems.indexOf(cartItem)}>
        <div className='Item-name'>
          Item number:
          {(currentItems.indexOf(cartItem)+1)}<br></br>
          {cartItem.name}
        </div>
          <img className='Item-img' src= {cartItem.imgurl}  alt="item-pic"/>
          <p>
            Quantity: {cartItem.quantity}<br></br>
            Price per unit: ${cartItem.cost}<br></br>
            Item Price: ${cartItem.quantity*cartItem.cost}
          </p>
          <button onClick={(e)=>onRemove(e,currentItems.indexOf(cartItem))}>
            Remove {cartItem.name} number  {(currentItems.indexOf(cartItem)+1)} from Cart
          </button>
      </div>
    );

    let checkoutForm = (
      <div className="Checkout-Form">
        <h2>Payment Information </h2>
        <form className="Form" onSubmit={(e) => {
          props.validate(e,{currentItems});
        }}>
          <div className="Form-Item">
            <label>Email:</label>
            <input type="email"
              className="Form-Input"
              name="Email"
              placeholder="You.are@awesome.com"
              onChange={(e)=>props.updateUserInfo(e)}
            />
          </div>
          <div className="Form-Item">
            <label>Address:</label>
            <input type="string"
              className="Form-Input"
              name="Address"
              placeholder="You live here"
              onChange={(e)=>props.updateUserInfo(e)}
            />
          </div>
          <div className="Form-Item">
            <label>State:</label>
            <input type="string"
              className="Form-Input"
              name="State"
              onChange={(e)=>props.updateUserInfo(e)}
            />
          </div>
          <div className="Form-Item">
            <label>Zip Code:</label>
            <input type="number"
              className="Form-Input"
              name="ZipCode"
              onChange={(e)=>props.updateUserInfo(e)}
            />
          </div>
          <div className="Form-Item">
            <label>Credit Card Number:</label>
            <input type="number"
              className="Form-Input"
              name="creditCardNumber"
              onChange={(e)=>props.updateUserInfo(e)}
            />
          </div>
          <div className="Form-Item">
            <button type="submit" className="Submit">
              Checkout
            </button>
          </div>
          <div className="Form-Item">
            <div className="Error-Message">
              {props.creditCardError}
            </div>
          </div>
        </form>
      </div>
    )
    return(
      <div className="Item-list">
        <h1>Checkout List</h1>
        <div className="Item-list-flex">

          {itemList}
        </div>
        <h2>Total Price = ${totalCost}</h2>
        {checkoutForm}
      </div>
    );
  } else {
    return(
      <div className="Item-list">
        <h1>Ain't nothing in your cart, buddy</h1>
      </div>
    )
  }

}
export default Checkout
