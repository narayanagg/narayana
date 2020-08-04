import React, { useEffect, useReducer, useRef } from "react";
import Axios from "axios";

export const intialstate = {
  loading: true,
  error: "",
  data: {},
};

const reducer = (state, actions) => {
  switch (actions.type) {
    case "FetchSucces":
      return {
        loading: false,
        error: "",
        data: actions.payload,
      };
    case "Fetcerror":
      return {
        loading: false,
        error: "Something went wrong",
        data: {},
      };
    default:
      return state;
  }
};

function Datafetchingtwo(props) {
  const [state, dispatch] = useReducer(reducer, intialstate);
  useEffect(() => {
    Axios.get("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => {
        dispatch({ type: "FetchSucces", payload: response.data });
      })
      .catch((err) => {
        dispatch({ type: "Fetcerror" });
      });
  }, []);
  const first = useRef(null);
  useEffect(() => {
    first.current.focus();
  }, []);
  return (
    <div>
      <input type="text" ref={first} />
      {state.loading ? "loading" : state.data.id}
      {state.error ? state.error : ""}
    </div>
  );
}

export default Datafetchingtwo;
