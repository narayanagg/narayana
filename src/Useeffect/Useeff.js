import React, { useState, useEffect } from "react";

function Useeff(props) {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  useEffect(() => {
    console.log("use effect called");
    document.title = `you clicked ${count}`;
  }, [count]);
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>click me {count}</button>
    </div>
  );
}

export default Useeff;
