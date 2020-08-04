import React from "react";
// import SweetAlert from "react-bootstrap-sweetalert";
// import swal from "sweetalert";

function Sweetalerts(props) {
  const f1 = () => {
    // swal("Oh noes!", "The AJAX request failed!", "error");
  };

  return (
    <div>
      <button onClick={f1}>submit</button>
    </div>
  );
}

export default Sweetalerts;
