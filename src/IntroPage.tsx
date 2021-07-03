import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import robot from "./images/robot.svg";
import styled from "styled-components/macro";

const size = 700;
const outterRadius = size / 2 - 100;
const middleRadius = (outterRadius * 2) / 3;
const innerCircleRadius = outterRadius / 3;

const Wrapper = styled.div`
  margin-top: -80px;
  width: 50vw;
  display: inline-block;
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;
const OutterWrapper = styled.div`
  .footer {
    position: absolute;
    top: calc(${window.innerHeight}px + 10vh);
    @media screen and (max-width: 1000px) {
      position: unset;
      margin-top: 100px;
    }
  }
`;

const Title = styled.div`
  font-size: 20px;
  div {
    margin: 20px 0 50px 0;
  }
`;
const IntroText = styled.div`
  font-size: 34px;
  font-family: Poppins;
  font-weight: 300;
  position: absolute;
  display: inline-block;
  width: 50vw;
  div:nth-child(3) {
    margin: 20px 0 20px 0;
    font-size: 18px;
  }
  @media screen and (max-width: 1000px) {
    position: unset;
    display: unset;
    width: 100%;
    font-size: 24px;
    div:nth-child(2),
    div:nth-child(3) {
      margin: 20px 10px 20px 10px;
    }
    div:nth-child(3) {
      margin-bottom: 50px;
    }
  }
`;

const StyledButton = styled(Link)`
  height: 56px;
  color: white;
  font-size: 21px;
  font-family: bebas-neue-pro, sans-serif;
  padding: 10px 30px;
  text-align: center;
  border 2px solid #e6236d;
  border-radius: 40px;
  transition: 0.3s;
  :hover {
      color: white;
      background: rgb(255, 255, 255, 0.1);
  }
`;
const IntroPage = () => {
  return (
    <OutterWrapper>
      <IntroText>
        <Title>
          <img
            className="category-icon"
            src={robot}
            alt="robot"
            width={68}
            height={66}
          />
          <div>Radar Purpose</div>
        </Title>
        <div>
          The purpose of this Tech Radar is to provide a view of the current
          technology coverage of Capco Digital Engineering.
        </div>

        <div>
          The technologies and tools are organised into Preferred, Skilled and
          Scaling and whilst it provides a good overview we can support clients
          if they have specific requirements outside of the technologies listed.
        </div>
        <StyledButton to={"/home"}>View Our Tech Radar</StyledButton>
      </IntroText>
      <Wrapper>
        <div>
          <svg viewBox={"0 0 600 600"} style={{ overflow: "visible" }}>
            <g transform={`translate(${300} ${300})`}>
              {/* 3 main rings */}
              <circle
                cx={0}
                cy={0}
                r={outterRadius}
                fill={"#ffffff"}
                stroke={"lightgrey"}
                opacity={0.02}
              />
              <circle
                cx={0}
                cy={0}
                r={middleRadius}
                fill={"#ffffff"}
                opacity={0.02}
              />
              <circle
                cx={0}
                cy={0}
                r={innerCircleRadius}
                fill={"#ffffff"}
                opacity={0.02}
              />
              {new Array(8).fill(0).map((d: any, idx: number) => (
                <line
                  key={`tech-line-${idx}`}
                  transform={`rotate(${(360 / 8) * idx + 22.5})`}
                  x1={0}
                  y1={0}
                  y2={outterRadius}
                  stroke={"white"}
                  strokeWidth={0.2}
                  opacity={0.2}
                />
              ))}
            </g>
          </svg>
        </div>
      </Wrapper>
      <Footer />
    </OutterWrapper>
  );
};

export default IntroPage;
