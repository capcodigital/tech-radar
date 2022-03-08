import React from "react";
import styled from "styled-components/macro";
import * as d3 from "d3";

const Wrapper = styled.div`
  margin-top: 80px;
  width: 70vw;
  position: absolute;
  right: 0;
  svg {
    right: 0;
    overflow: visible;
  }
  @media screen and (min-width: 1000px) {
    display: none;
  }
`;
const createArc = d3.arc().padAngle(0);

const MobileRadarBackground = () => {
  return (
    <Wrapper>
      <svg viewBox={`0 0 700 700`}>
        <g transform={`translate(700 700)`}>
          <path
            className={`arc`}
            d={
              createArc({
                startAngle: Math.PI,
                endAngle: 2 * Math.PI,
                innerRadius: 0,
                outerRadius: 600,
              })!
            }
            fill={"rgba(255,255,255,0.05"}
          />
          <path
            className={`arc`}
            d={
              createArc({
                startAngle: Math.PI,
                endAngle: 2 * Math.PI,
                innerRadius: 0,
                outerRadius: 400,
              })!
            }
            fill={"rgba(255,255,255,0.05"}
          />
          <path
            className={`arc`}
            d={
              createArc({
                startAngle: Math.PI,
                endAngle: 2 * Math.PI,
                innerRadius: 0,
                outerRadius: 200,
              })!
            }
            fill={"rgba(255,255,255,0.05"}
          />
        </g>
      </svg>
    </Wrapper>
  );
};

export default MobileRadarBackground;
