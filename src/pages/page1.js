import React from "react";
import { Link } from "react-router-dom";

const page1 = () => {
  return (
    <div>
      <h1>page1</h1>
      <p>세부 페이지</p>
      <Link to="/hello">Hello</Link>
    </div>
  );
};

export default Detail;