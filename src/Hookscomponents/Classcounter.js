import React, { Component } from "react";

class Classcounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  Count = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };
  render() {
    return (
      <div>
        <button className="btn btn-primary" onClick={this.Count}>
          counter {this.state.counter}
        </button>
      </div>
    );
  }
}

export default Classcounter;
