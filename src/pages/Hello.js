import React from "react";
import { Link } from "react-router-dom";

const Hello = () => {
  return (
    <div>
      <h1>Hello</h1>
      <p>인사 페이지</p>
      <Link to="/">Home</Link>
      <div>
        <p>무엇을 찾고 있나요?</p>
        <div>
          <Link to="/tshirts">
            <img src="../img/tshirt.png" alt="티셔츠" />
          </Link>
          <Link to="/hats">
            <img src="../img/hat.png" alt="모자" />
          </Link>
          <Link to="/dolls">
            <img src="../img/doll.png" alt="인형" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hello;