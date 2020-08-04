import React, { Component } from "react";
import Json from "./Data";
export default class Crud extends React.Component {
  constructor() {
    super();
    this.state = {
      list: Json,
      firstname: "",
      lastname: "",
      email: "",
    };
  }

  //for adding item to list
  Postform = () => {
    let len = Json.length;
    Json.push({
      id: len + 1,
      FirstName: this.refs.firstname.value,
      Lastname: this.refs.lastname.value,
      Email: this.refs.email.value,
    });
    this.setState({
      list: Json,
    });
  };
  //for deleting
  Delete = (data) => {
    let index = Json.findIndex((x) => x.id == data.id);
    Json.splice(index, 1);
    this.setState({
      list: Json,
    });
  };
  InputChanged = (event) => {
    console.log(event.target.value);
    var filterdata = Json.filter((x) => {
      return x.FirstName.indexOf(event.target.value) > -1;
    });
    debugger;
    console.log("filerdata", filterdata);
    this.setState({
      list: filterdata,
    });
  };
  Edit = (data) => {
    console.log(data);
    this.setState({
      firstname: data.FirstName,
      lastname: data.Lastname,
      email: data.Email,
    });
  };
  Changing = (data) => {
    console.log(data);

    // this.setState({

    // })
  };

  render() {
    return (
      <div>
        <div className="container">
          <h2>Fill the form</h2>
          <div className="form-group">
            <label>FirstName:</label>
            <input
              type="text"
              className="form-control"
              id="firstname"
              placeholder="Enter firstname"
              name="email"
              ref="firstname"
            />
          </div>
          <div className="form-group">
            <label>LastName:</label>
            <input
              type="text"
              className="form-control"
              id="lastname"
              placeholder="Enter lastname"
              name="lastname"
              ref="lastname"
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              name="email"
              ref="email"
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary btn-block "
            onClick={this.Postform}
          >
            Submit
          </button>
        </div>

        <div className="container">
          <div className="mt-2">
            <div className="float-left">
              <h4>List of items</h4>
            </div>

            <div className="float-right">
              <input
                name="filter"
                className="form-control form-control-alternative searchstyle fa"
                placeholder=" Search by firstname"
                type="text"
                onChange={this.InputChanged}
              />
            </div>
          </div>

          <table className="table table-dark table-striped table-hover">
            <thead>
              <tr>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.list.map((element, index) => (
                <tr key={element.id}>
                  <td>{element.FirstName}</td>
                  <td>{element.Lastname}</td>
                  <td>{element.Email}</td>
                  <td>
                    <a
                      className="btn btn-danger"
                      onClick={() => {
                        this.Delete(element);
                      }}
                    >
                      <span className="glyphicon glyphicon-trash "></span>
                    </a>
                    <a className="btn btn-primary ml-2">
                      <span
                        className="glyphicon glyphicon-pencil "
                        data-toggle="modal"
                        data-target="#myModal"
                        onClick={() => {
                          this.Edit(element);
                        }}
                      ></span>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* <!-- The Modal --> */}
        <div className="modal" id="myModal">
          <div className="modal-dialog">
            <div className="modal-content">
              {/* <!-- Modal Header --> */}
              <div className="modal-header">
                <h4 className="modal-title">Edit item</h4>
                <button type="button" className="close" data-dismiss="modal">
                  &times;
                </button>
              </div>

              {/* <!-- Modal body --> */}
              <div className="modal-body">
                <div className="form-group">
                  <label>FirstName:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstname"
                    placeholder="Enter firstname"
                    name="email"
                    ref="first"
                    value={this.state.firstname}
                    onChange={() => this.Changing(this.state.firstname)}
                  />
                </div>
                <div className="form-group">
                  <label>LastName:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastname"
                    placeholder="Enter lastname"
                    name="lastname"
                    ref="last"
                    value={this.state.lastname}
                    onChange={() => this.Changing(this.state.lastname)}
                  />
                </div>
                <div className="form-group">
                  <label>Email:</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter email"
                    name="email"
                    ref="Email"
                    value={this.state.email}
                    onChange={() => this.Changing(this.state.email)}
                  />
                </div>
              </div>

              {/* <!-- Modal footer --> */}
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
