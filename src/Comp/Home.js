import React, { Component } from "react";
import Banner from "./Banner";
import axios from "axios";
import Artistslist from "./Artistslist";
import { withRouter } from "react-router-dom";
class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      artists: [],
    };
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      console.log(res);
      this.setState({
        artists: res.data,
      });
    });
  }
  changed = () => {
    this.props.history.push("/Artists/3");
    console.log(this.props);
  };
  render() {
    return (
      <div>
        <button onClick={this.changed}>Click me</button>
        <Banner />
        <Artistslist Artists={this.state.artists} />
      </div>
    );
  }
}
export default Home;
