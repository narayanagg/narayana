import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Banner extends React.Component {
  render() {
    return (
      <div>
        <img
          src="/Images/images.jpg"
          height="300"
          width="1500"
          style={{ width: "-webkit - fill - available" }}
        />
        <div>
          <Link to="/">Artists</Link>
        </div>
      </div>
    );
  }
}
