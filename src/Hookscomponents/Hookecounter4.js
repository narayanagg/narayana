import React, { useState } from "react";

function Hookecounter4(props) {
  const [Items, setItems] = useState([]);
  const add = () => {
    setItems([...Items, { id: Items.length, value: Math.random() * 10 }]);
  };
  return (
    <div>
      <button onClick={add}>Click me</button>
      <ul>
        {Items.map((x) => (
          <li key={x.id}>{x.value}</li>
        ))}
      </ul>
    </div>
  );
}

export default Hookecounter4;
