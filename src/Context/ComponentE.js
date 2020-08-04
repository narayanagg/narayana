import React, { useContext } from "react";
import ComponentF from "./ComponentF";
import { Usercontext, Channelcontext } from "../App";
function ComponentE(props) {
  const user = useContext(Usercontext);
  const channel = useContext(Channelcontext);
  return (
    <div>
      <h1>ComponentE</h1>
      {user}----{channel}
      <ComponentF></ComponentF>
    </div>
  );
}

export default ComponentE;
