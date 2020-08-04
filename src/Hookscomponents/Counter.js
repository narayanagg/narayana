import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    document.title = `Clicked ${this.state.count} times`;
    console.log("didmount");
  }
  componentDidUpdate() {
    document.title = `Clicked ${this.state.count} times`;
    console.log("didupdate");
  }
  render() {
    return (
      <div>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}

export default Counter;
