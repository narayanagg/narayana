import React, { useState, useEffect } from "react";
import Axios from "axios";

function Fetch(props) {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);
  useEffect(() => {
    Axios.get("https://jsonplaceholder.typicode.com/todos", {
      headers: { "Access-Control-Allow-Origin": true },
    }).then(
      (response) => {
        debugger;
        if (response.status == 200) {
          console.log(response);
          setData(response.data);
        } else if (response) {
          alert("hello");
        } else return null;
      }
      // (err) => {
      //   alert("something webt wrong in fetch error....");
      // }
    );
    // .catch(() => {
    //   alert("it is catch bloked");
    // });
  }, []);
  const click = () => {
    setName("narayana");
  };
  return (
    <div>
      {JSON.stringify(data)}
      <button onClick={click}>change {name}</button>
      {name}
    </div>
  );
}

export default Fetch;
