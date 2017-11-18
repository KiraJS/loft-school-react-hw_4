import React, { Component } from 'react';

class CardNumberInput extends Component {
  constructor(props) {
    super(props);

    this.state = { number: this.format(props.cardNumber) };
  }

  format = value => {
    if(!value) return ''
    const str = value.toString()
    const numbers = str.split('');
    let formatedCardNumber = '';
    numbers.forEach((number, index) => {
      formatedCardNumber += number;
      if ((index + 1) % 4 === 0) {
        formatedCardNumber += ' ';
      }
    });
    return formatedCardNumber;
  };

  normalize = str => {
    return str.replace(/[' ']/g, '');
  };

  componentWillReceiveProps(nextProps) {
    this.setState({ number: this.format(nextProps.cardNumber) });
  }

  handleChange = event => {
    this.props.onChange(this.normalize(event.target.value));
  };

  render() {
    return (
      <input
        type="text"
        value={this.state.number}
        onChange={this.handleChange}
      />
    );
  }
}

export default CardNumberInput;
