//checkout.js

import React from "react";
//import {Link} from 'react-router-dom';

class Checkout extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          shoppingList: this.props.shoppingList,
          user: "",
          cards: ["4242424242424242", "5555555555554444", "378282246310005"]
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({user: e.target.value});
    }

    compare (a,b) {
        var user = a;
        var cards = b;
        console.log(user);
        console.log(cards);

        if (cards.indexOf(user) > -1) {
            alert("Thanks for you purchase!");
            this.setState(this.props.reset);
        } else if (cards.indexOf(user === -1)) {
          alert("Please enter a valid redit card number...");
        }

    }

    handleSubmit = (e) => {
      e.preventDefault();

      this.compare(this.state.user, this.state.cards);
    }

    render () {

        var currentItems = this.state.shoppingList;
        let totalCost=0;
        var i;
        for (i=0;i<(currentItems.length);i++){
          totalCost= totalCost+((currentItems[i]['product']['price'])*currentItems[i]['quantity']);
        }

        return(
          <div className="checkOut">
              <h2> Checkout </h2>
              <h2>Your total is: ${totalCost}</h2>
              <form onSubmit={this.handleSubmit}>
                  <label>
                    Input card # here:
                    <input type="text" maxLength="16" value={this.state.value} onChange={this.handleChange} />
                  </label> <br />
                  <input type="submit" />
              </form>
          </div>
        );
    }
}

export default Checkout;
