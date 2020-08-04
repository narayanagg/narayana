import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      email: "",
      pwd: "",
      formvalid: false,
      fnamevalid: false,
      lnamevalid: false,
      formerrors: { fname: "", lname: "", email: "", pwd: "" },
    };
  }
  inputhandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState(
      {
        [name]: value,
      },
      () => {
        this.validateform(name, value);
      }
    );
  };

  validateform(fieldname, value) {
    let fieldvalidators = this.state.formerrors;
    let fnamevalid = this.state.fnamevalid;
    let lnamevalid = this.state.lnamevalid;
    switch (fieldname) {
      case "fname":
        fieldvalidators.fname = this.state.fname ? "" : "fname required";
    }

    this.setState(
      { formerrors: fieldvalidators, fnamevalid: fnamevalid },
      this.validatesform
    );
  }

  validatesform() {}

  render() {
    return (
      <div className="container">
        <form>
          <div className="form-group">
            <label>FirstName</label>
            <input
              type="text"
              className="form-control"
              value={this.state.fname}
              name="fname"
              onChange={this.inputhandler}
            />
          </div>
          <div>{this.state.formerrors.fname}</div>
          <div className="form-group">
            <label>LastName</label>
            <input
              type="text"
              className="form-control"
              value={this.state.lname}
              name="lname"
              onChange={this.inputhandler}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              value={this.state.email}
              name="email"
              onChange={this.inputhandler}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              value={this.state.pwd}
              name="pwd"
              onChange={this.inputhandler}
            />
          </div>
          <div className="form-group">
            <input type="submit" className="form-control btn-primary" />
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
