import React, { useState } from "react";

function Counter(props) {
  const [count, setcount] = useState(0);
  const increment = () => {
    setcount(count + 1);
  };
  const decrement = () => {
    setcount(count - 1);
  };
  const reset = () => {
    setcount(0);
  };
  return (
    <div>
      count {count}
      <button onClick={() => increment()}>increment</button>
      <button onClick={() => decrement()}>decrement</button>
      <button onClick={() => reset()}>resetr</button>
    </div>
  );
}

export default Counter;
