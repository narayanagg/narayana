import React, { useReducer } from "react";

const Initialstate = {
  firstcounter: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { firstcounter: state.firstcounter + action.value };
    case "decrement":
      return { firstcounter: state.firstcounter - 1 };
    case "reset":
      return Initialstate;
    default:
      return state;
  }
};
function UseReducer(props) {
  debugger;
  const [count, dispatch] = useReducer(reducer, Initialstate);
  const [counttwo, dispatchtwo] = useReducer(reducer, Initialstate);
  return (
    <div>
      Count---{count.firstcounter}
      <button onClick={() => dispatch({ type: "increment", value: 5 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default UseReducer;
