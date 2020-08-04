import React, { Component } from "react";

class UserefTimer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 0,
      count: 9,
    };
  }
  interval;
  componentDidMount() {
    debugger;
    this.interval = setInterval(() => {
      this.setState({ timer: this.state.timer + 1 });
    }, 1000);
  }
  componentWillUnmount() {
    alert("unm");
    clearInterval(this.interval);
  }
  render() {
    return (
      <div>
        timer: {this.state.timer}
        <button onClick={() => clearInterval(this.interval)}>
          clear interval
        </button>
      </div>
    );
  }
}

export default UserefTimer;
