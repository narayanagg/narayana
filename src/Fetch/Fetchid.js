import React, { useState, useEffect } from "react";
import Axios from "axios";

function Fetchid(props) {
  const [id, setId] = useState(1);
  const [post, setPost] = useState({});
  const [idvalue, setIdvalue] = useState(1);
  useEffect(() => {
    Axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((response) => {
        setPost(response.data);
      })
      .catch((err) => alert(err));
  }, [idvalue]);
  const Handleclick = () => {
    setIdvalue(id);
  };
  return (
    <div>
      {JSON.stringify(post)}
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button
        onClick={() => {
          Handleclick();
        }}
      >
        submit
      </button>
    </div>
  );
}

export default Fetchid;
