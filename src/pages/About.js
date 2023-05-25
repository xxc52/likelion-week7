import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const StyledButton = styled.button`
  background-color: #f1f1f1;
  color: #333;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 10px;
`;


const About = () => {
  return (
    <Container>
      <h1 className="Title">LikeLion 소개글</h1>
      <p>소개 페이지</p>
      <Link to="/Detail">Detail</Link>
      <ButtonWrapper>
        <Link to="/page1">
          <StyledButton>멋쟁이사자처럼 역사</StyledButton>
        </Link>
        <Link to="/page2">
          <StyledButton>굿즈샵의 탄생 계기</StyledButton>
        </Link>
        <Link to="/page3">
          <StyledButton>오프라인 매장 소개</StyledButton>
        </Link>
      </ButtonWrapper>
    </Container>
  );
};

export default About;