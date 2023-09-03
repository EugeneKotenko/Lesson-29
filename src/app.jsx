import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  increment = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  decrement = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  reset = () => {
    this.setState({ counter: 0 });
  };

  render() {
    return (
      <div className="container">
        <h1>Counter</h1>
        <div className="counter">
          <button id="decrement-btn" onClick={this.decrement}>
            -
          </button>
          <p id="counter-value">{this.state.counter}</p>
          <button id="increment-btn" onClick={this.increment}>
            +
          </button>
        </div>
        <button id="reset" onClick={this.reset}>
          reset
        </button>
      </div>
    );
  }
}

export default Counter;
