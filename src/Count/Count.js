import React, { useState, useEffect } from "react";

function Count(props) {
  let abc = 1;
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => {
        setCount(count + 1);
        debugger;
        alert(count);
        if (count == 0) {
          alert(count);
        }
      })
      .catch((err) => {
        alert(err);
      });
  }, [name]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        click me {count} {abc}
      </button>
      <button onClick={() => setName("nara")}>change</button>
    </div>
  );
}

export default Count;
