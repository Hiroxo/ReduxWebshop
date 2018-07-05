import React, { Component } from 'react';
//import {Router, Route, Link, Switch} from "react-router-dom";

class Checkout extends Component{
  constructor(props){
    super(props)
    this.state ={
      cartItems: this.props.cartItems,
    }
  }
  render(){
    let paymentInfo = (
      <div className="PaymentForm">
        <h3>Payment Billing Information</h3>
        <div className="FormItem">
          <label>Name: </label>
            <input type="name"
              className="FormName"
              name="Name"
              placeholder="Firstname Lastname"
            />
        </div>
        <div className="FormItem">
          <label>Address: </label>
            <input type="string"
              className="FormAddress"
              name="Address"
              placeholder="1234 SE Example Street"
            />
        </div>
        <div className="FormItem">
          <label>City: </label>
            <input type="string"
              className="FormCity"
              name="City"
            />
        </div>
        <div className="FormItem">
          <label>State: </label>
            <input type="string"
              className="FormState"
              name="State"
            />
        </div>
        <div className="FormItem">
          <label>Zip Code: </label>
            <input type="number"
              className="FormZip"
              name="ZipCode"
            />
        </div>
        <div className="FormItem">
          <label>Email: </label>
            <input type="email"
              className="FormEmail"
              name="Email"
              placeholder="example123@example.com"
            />
        </div>
        {/*
        <button type="submit" className="Submit">
          Submit Checkout
        </button>
        */}
      </div>
    )
      return (
        <div>
          <div className="checkout">
            <h1>Ready to Checkout</h1>
            <br></br>
            <h2>Total Cost: ${this.props.totalPrice(this.props.cartItems)}</h2>
            <p>Please enter your credit card number: </p>
            <input id="num"></input>
            <button onClick={()=>creditCard()}>Submit</button>
            <p id="string"></p>
            <br></br>
            {paymentInfo}
            <button onClick={()=>confirmationMessage()}>Submit Checkout</button>
            <br></br>
            <br></br>
          </div>
            <br></br>
            <br></br>
            <div className="thankyou">
              <p id="thankyou"></p>
            </div>
            <br></br>
            <br></br>
        </div>
      );
    }
  }
export default Checkout;

function creditCard(){
  let ccn;
  let text;
  ccn = document.getElementById("num").value;
  console.log(ccn);
  if(ccn == 4242424242424242 || ccn == 5555555555554444 || ccn == 378282246310005){
    console.log("Valid");
    text = "Whooo, it's a valid credit card number!";
  }
  else {
    console.log("Invalid");
    text = "Sorry, invalid input. Try again.";
  }
  document.getElementById("string").innerHTML = text;
}

function confirmationMessage() {
  let message = "Thank you for your purchase! Your order has been accepted. ";
  let thankyou;
  thankyou = message;
  document.getElementById("thankyou").innerHTML = thankyou;
}
