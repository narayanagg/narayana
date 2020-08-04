import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Artists extends React.Component {
  render() {
    return (
      <div>
        Artists page
        <Link to="/">Artists</Link>
      </div>
    );
  }
}
