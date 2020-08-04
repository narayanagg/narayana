import React, { Component } from "react";
import { connect } from "react-redux";

class Appone extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.getproducts}> get products</button>
        {JSON.stringify(this.props.Products)}
      </div>
    );
  }
}

const send = (dispatch) => {
  return {
    getproducts: () => {
      dispatch({ type: "RECORDS" });
    },
  };
};
const receive = (state) => {
  return {
    Products: state.Products,
  };
};

export default connect(receive, send)(Appone);
