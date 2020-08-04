import React, { useEffect } from "react";

function Doubleeffects(props) {
  useEffect(() => {
    console.log("1st effect");
  });
  useEffect(() => {
    console.log("2st effect");
  });
  return (
    <div>
      <h1>hi double</h1>
    </div>
  );
}

export default Doubleeffects;
