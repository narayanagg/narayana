import React, { useState, useEffect } from "react";

function Useeff2(props) {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const Mousemove = (e) => {
    console.log("mouse move called");
    setX(e.clientX);
    setY(e.clientY);
  };
  useEffect(() => {
    console.log("useffect called");
    window.addEventListener("mousemove", Mousemove);
    console.log("extra");
    return () => {
      window.removeEventListener("mousemove", Mousemove);
    };
  }, []);
  return (
    <div>
      x--{x} y--{y}
    </div>
  );
}

export default Useeff2;
