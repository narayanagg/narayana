import React, { useContext } from "react";
import { Usercontext, Channelcontext } from "../App";
function Final(props) {
  const user = useContext(Usercontext);
  return <div>{user}</div>;
}

export default Final;
