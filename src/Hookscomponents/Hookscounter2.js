import React, { useState } from "react";
import HooksCounter from "./HooksCounter";

function Hookscounter2(props) {
  const [count, setCount] = useState(0);
  const HooksCounter = () => {
    for (var i = 1; i <= 5; i++) {
      setCount((prevcount) => prevcount + 1);
    }
  };
  return (
    <div>
      {count}
      <button onClick={() => setCount(0)}>rest</button>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <button onClick={() => HooksCounter()}>decrement</button>
    </div>
  );
}

export default Hookscounter2;
