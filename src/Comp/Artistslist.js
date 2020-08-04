import React, { Component } from "react";

export default class Artistslist extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.Artists);
    return (
      <div>
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th>id</th>
                <th>Title</th>
                <th>Completed</th>
              </tr>
            </thead>
            <tbody>
              {this.props.Artists.map((element, index) => (
                <tr key={element.id}>
                  <td>{element.id}</td>
                  <td>{element.title}</td>
                  <td>{JSON.stringify(element.completed)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
