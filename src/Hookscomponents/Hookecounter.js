import React, { useState, useEffect } from "react";

function Hookecounter(props) {
  const [count, setCount] = useState(0);
  const Clicked = () => {
    console.log("checking");
  };
  useEffect(() => {
    document.title = `clicked ${count} times`;
  });
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click me {count}</button>
    </div>
  );
}

export default Hookecounter;
