import React, { useMemo, useState } from "react";
import Datafetchingtwo from "../Datafetch/Datafetchingtwo";

function Usememo(props) {
  const [count, setcount] = useState(0);
  const [countertwo, setcountertwo] = useState(0);
  const Counterone = () => {
    setcount(count + 1);
  };
  useMemo(() => {});
  const Iseven = () => {
    let i = 0;
    while (i <= 2000000000) i++;
    return count % 2 == 0;
  };
  const Countertwo = () => {
    setcountertwo(countertwo + 1);
  };
  return (
    <div>
      <button onClick={Counterone}>{count} counterone Increment</button>
      {Iseven() ? "even" : "odd"}
      <button onClick={Countertwo}>{countertwo} countertwo Increment</button>
    </div>
  );
}

export default Usememo;
