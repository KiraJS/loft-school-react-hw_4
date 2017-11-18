import React, { Component } from "react";
import "./Switcher.css";

// Для работы этой компоненты нужно использовать методы React.Children.toArray
// Для работы этой компоненты нужно использовать методы React.Children.toArray
// а так же работать с child.type.name и child.type.displayName

class Switcher extends Component {
  state = {
    selectedChild: 0
  };
  handleChangeChild = event => {
    const id = Number(event.target.getAttribute('data-id'));
    this.setState({ selectedChild: id });
  };
  render() {
    const children = React.Children.toArray(this.props.children);

    return (
      <div className="component-wrapper">
        <ul className="component-list">
          {children.map((item, index) => {
            return (
              <li
                className="component-list__name"
                onClick={this.handleChangeChild}
                data-id={index}
                key={index}
              >
                {item.type.displayName || item.type.name}
              </li>
            )
          })}
        </ul>
        {children[this.state.selectedChild]}
      </div>
    );
  }
}

export default Switcher;
