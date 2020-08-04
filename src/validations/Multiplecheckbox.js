import React, { Component } from "react";

class Multiplecheckbox extends Component {
  constructor() {
    super();
    this.state = {
      categories: [
        { id: 1, value: "Reactjs" },
        { id: 2, value: "Angular" },
        { id: 3, value: "Vuejs" },
        { id: 4, value: "Mongodb" },
      ],
      checkedItems: new Map(),
    };
  }
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  handleChange = (event) => {
    var isChecked = event.target.checked;
    var item = event.target.value;

    this.setState((prevState) => ({
      checkedItems: prevState.checkedItems.set(item, isChecked),
    }));
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {this.state.categories.map((item) => (
            <li key={item.id}>
              <label>
                <input
                  type="checkbox"
                  value={item.id}
                  onChange={this.handleChange.bind(this)}
                />
                {item.value}
              </label>
            </li>
          ))}
          <input type="submit"></input>
        </form>
      </div>
    );
  }
}

export default Multiplecheckbox;
