import React, { Component } from "react";
export default class Param extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
      console.log(this.props.match.params.id)
    return <div>param Comp not found</div>;
  }
}
