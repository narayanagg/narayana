import React, { useEffect } from "react";
import Swal from "sweetalert2";

function Errorhandling(props) {
  const f1 = () => {
    Swal.fire({
      title: "Error!",
      text: "Do you want to continue",
      icon: "error",
      confirmButtonText: "Cool",
    });
  };
  return (
    <div>
      <button onClick={f1}>click</button>
    </div>
  );
}

export default Errorhandling;
