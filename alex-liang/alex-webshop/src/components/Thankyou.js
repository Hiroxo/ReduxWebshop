import React, { Component } from 'react';

class Thankyou extends Component {
  render () {
    return (
      <div className="Item-list">
        <h2>
          Thank you for your AWESOME PATRONAGE!! <br></br>
          Your total this time was ${this.props.totalCost}
        </h2>
        <div>
          A confirmation receipt has been sent to {this.props.email}
        </div>
        <div className="Fine-Print">Not really</div>
      </div>
    )
  }
}

export default Thankyou;
