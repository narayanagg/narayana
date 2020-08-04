import React, { useState, useEffect } from "react";
import useInput from "./useInput";

function Formone(props) {
  //   const [fname, setfname] = useState("");
  //   const [lname, setlname] = useState("");
  debugger;

  const [fname, bindfname, resetfname] = useInput("");
  debugger;
  const [lname, bindlname, resetlname] = useInput("");
  const submitted = (event) => {
    event.preventDefault();
    alert(`hello ${fname} ${lname}`);
    resetfname();
    resetlname();
  };
  return (
    <div>
      <form onSubmit={submitted}>
        <input
          type="text"
          name="fname"
          {...bindfname}
          //   value={fname}
          //   onChange={(e) => setfname(e.target.value)}
        />
        <input
          type="text"
          name="lname"
          {...bindlname}
          //   value={lname}
          //   onChange={(e) => setlname(e.target.value)}
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Formone;
