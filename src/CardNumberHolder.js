import React, { Component } from "react";
import CardNumberInput from "./CardNumberInput";

class CardNumberHolder extends Component {
  static displayName = "CardNumber";

  state = {
    cardNumber: ""
  };

  handleChange = cardNumber => {
    this.setState({ cardNumber });
  };

  render() {
    return (
      <div className="component-wrapper">
        <CardNumberInput
          cardNumber={this.state.cardNumber}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default CardNumberHolder;
