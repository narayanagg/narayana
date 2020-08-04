import React, { Component } from "react";

class Count extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    this.interval = setInterval(this.Counter, 1000);
  }
  //   componentWillUnmount() {
  //     clearInterval(this.interval);
  //   }
  Counter = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return <div>{this.state.count}</div>;
  }
}

export default Count;
