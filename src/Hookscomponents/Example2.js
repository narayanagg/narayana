import React from "react";
import Example from "./Example";
import { BrowserRouter, Route, Link, useHistory } from "react-router-dom";
import Classcounter from "./Classcounter";

function Example2(props) {
  let history = useHistory();

  if (props) {
    console.log(props);
    //history.push("/Home");
    return <Example child={true} />;
  }
  return (
    <div>
      <button className="btn btn-danger">click me</button>
    </div>
  );
}

export default Example2;
