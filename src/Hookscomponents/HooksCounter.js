import React, { useState } from "react";

function HooksCounter(props) {
  const [count, setCount] = useState(0);
  function Counter() {
    setCount(count + 1);
  }

  return (
    <div>
      <button className="btn btn-primary" onClick={() => Counter()}>
        counts {count}
      </button>
    </div>
  );
}

export default HooksCounter;
