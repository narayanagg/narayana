import React, { useState, useEffect } from "react";
import axios from "axios";

function Datafetch0ne(props) {
  const [post, setPost] = useState({});
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState("");
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicde.com/todos/1")
      .then((response) => {
        setPost(response.data);
        console.log("data fertch");
        setloading(false);
        seterror("");
      })
      .catch((error) => {
        debugger;
        setloading(false);
        seterror("Something went wrong!");
        alert(error);
      });
  }, []);
  return (
    <div>
      {post.id}
      <h1>{error ? error : ""}</h1>
    </div>
  );
}

export default Datafetch0ne;
