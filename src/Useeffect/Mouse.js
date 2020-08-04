import React, { useState } from "react";
import Useeff2 from "./Useeff2";

function Mouse(props) {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>click me</button>
      {display && <Useeff2 />}
    </div>
  );
}

export default Mouse;
