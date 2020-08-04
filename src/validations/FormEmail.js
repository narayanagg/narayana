import React, { Component } from "react";

class FormEmail extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      emailvalid: false,
      formerrors: { email: "" },
      formvalid: false,
    };
  }
  handleinput = (event) => {
    console.log(event.target.value);
    this.setState(
      {
        [event.target.name]: event.target.value,
      },
      this.validateform(event.target.name, event.target.value)
    );
  };
  validateform = (fieldname, value) => {
    let localemailvalid = this.state.emailvalid;
    let localformErrors = this.state.formerrors;
    debugger;
    switch (fieldname) {
      case "email":
        localemailvalid = value.match(
          "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"
        );
        localformErrors.email = localemailvalid ? "" : "email required";
        break;
    }
    this.setState(
      {
        emailvalid: localemailvalid,
        formerrors: localformErrors,
      },
      this.formvalid
    );
  };
  formvalid() {
    this.setState({
      formvalid: this.state.emailvalid,
    });
  }
  Submitted(event) {
    event.preventDefault();
    if (this.state.formvalid) {
      console.log("form submitted");
    } else {
      console.log("form not submitted");
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.Submitted.bind(this)}>
          <input
            type="text"
            required
            name="email"
            value={this.state.email}
            onChange={this.handleinput}
            placeholder="enter email"
          ></input>
          <h1>{this.state.formerrors.email}</h1>
          <input type="submit" disabled={!this.state.formvalid}></input>
        </form>
      </div>
    );
  }
}

export default FormEmail;
