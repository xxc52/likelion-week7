import React from "react";
import { Link } from "react-router-dom";
import Logo from './R.png';
import styled from "styled-components";

const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  font-size: 50px;
  color: orange;
  background: linear-gradient(45deg, orange, white);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

function MyComponent2() {
  return (
    <CenteredContainer2>
      <ButtonLink to="/about">About</ButtonLink>
    </CenteredContainer2>
  );
}

const ButtonLink = styled(Link)`
  display: inline-block;
  padding: 10px 30px;
  background-color: #FFBF00;
  color: black;
  text-decoration: none;
  transition: background-color 0.3s ease;
  border-radius: 5px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
`;
const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh; /* 화면 전체 높이로 설정 */
`;
const CenteredContainer2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 19vh; /* 화면 전체 높이로 설정 */
`;
const CenteredImage = styled.img`
  width: 400px;
  height: auto;  
/* 이미지에 대한 추가 스타일이 필요한 경우 여기에 추가 */
`;
function MyComponent() {
  return (
    <Title>LIKELION GOODS STORE</Title>
  );
}

function MyComponent3() {
  return (
    <CenteredContainer>
      <CenteredImage src={Logo} alt="Team logo" />
    </CenteredContainer>
  );
}

const Home = () => {
  return (
    <div>
      {MyComponent()}
      {MyComponent3()}
      {MyComponent2()}
    </div>
  );
};

export default Home;
