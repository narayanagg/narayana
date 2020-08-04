import React, { useState } from "react";

function Hookscounter3(props) {
  const [names, setNames] = useState({ firstname: "", lastname: "" });
  function track(e) {
    console.log({ ...names });
    setNames({ ...names, [e.target.name]: e.target.value });
  }
  return (
    <div>
      <input
        type="text"
        value={names.firstname}
        onChange={track}
        name="firstname"
      />
      <input
        type="text"
        value={names.lastname}
        onChange={track}
        name="lastname"
      />
      <p>your firstname is {names.firstname}</p>
      <p>your lastname is {names.lastname}</p>
    </div>
  );
}

export default Hookscounter3;
