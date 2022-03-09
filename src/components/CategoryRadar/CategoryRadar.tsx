import React, { FC } from "react";
import * as d3 from "d3";
import styled from "styled-components/macro";
import { CategoryRadarTooltip } from "../RadarStyledComponents/StyledTooltip";

const width = 400;
const height = 800;
const outterRadius = width;
const middleRadius = (outterRadius * 2) / 3;
const innerRadius = outterRadius / 3;
const radius = [outterRadius - 60, middleRadius - 60, innerRadius - 60];
const dataPointCircleRadius = 24;
const imageSize = Math.sqrt(2) * dataPointCircleRadius; //square inside circle

const Wrapper = styled.div`
  margin-top: -10px;
  display: inline-block;
  float: right;
  svg {
    overflow: visible;
  }
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

type CategoryRadarType = {
  data: {
    preferred: Array<{ name: string; link: string }>;
    skilled: Array<{ name: string; link: string }>;
    scaling: Array<{ name: string; link: string }>;
  };
  setHovered: any;
};

const createArc = d3.arc().padAngle(0);

const CategoryRadar: FC<CategoryRadarType> = ({ data, setHovered }) => {
  return (
    <Wrapper>
      <svg width={400} height={800}>
        <g transform={`translate(${width} ${height / 2})`}>
          {/* 3 main rings */}
          <path
            className={`arc`}
            d={
              createArc({
                startAngle: Math.PI,
                endAngle: 2 * Math.PI,
                innerRadius: 0,
                outerRadius: outterRadius,
              })!
            }
            fill={"#ffffff"}
            stroke={"lightgrey"}
            opacity={0.03}
          />
          <path
            className={`arc`}
            d={
              createArc({
                startAngle: Math.PI,
                endAngle: 2 * Math.PI,
                innerRadius: 0,
                outerRadius: middleRadius,
              })!
            }
            fill={"#ffffff"}
            opacity={0.03}
          />
          <path
            className={`arc`}
            d={
              createArc({
                startAngle: Math.PI,
                endAngle: 2 * Math.PI,
                innerRadius: 0,
                outerRadius: innerRadius,
              })!
            }
            fill={"#ffffff"}
            opacity={0.05}
          />
          {Object.entries(data).map(([group, data], groupIdx) =>
            data.map(({ name, link }, idx) => (
              <g
                key={`${group} ${idx}`}
                onMouseOver={() => setHovered(name)}
                onMouseLeave={() => setHovered("")}
              >
                <CategoryRadarTooltip
                  title={name}
                  aria-label={name}
                  placement="left"
                  arrow
                >
                  <g>
                    {/* background circle for icons */}
                    <circle
                      key={`preferred-${name}-${idx}`}
                      cx={`${
                        radius[groupIdx] *
                        Math.cos(
                          ((groupIdx === 2 ? 4 : 6) * Math.PI) / 8 +
                            (Math.PI /
                              (data.length + (groupIdx === 2 ? 0 : 4))) *
                              idx +
                            Math.PI / (2 * data.length)
                        )
                      }`}
                      cy={`${
                        radius[groupIdx] *
                        Math.sin(
                          ((groupIdx === 2 ? 4 : 6) * Math.PI) / 8 +
                            (Math.PI /
                              (data.length + (groupIdx === 2 ? 0 : 4))) *
                              idx +
                            Math.PI / (2 * data.length)
                        )
                      }`}
                      r={dataPointCircleRadius}
                      fill={"white"}
                    />

                    <image
                      x={`${
                        radius[groupIdx] *
                          Math.cos(
                            ((groupIdx === 2 ? 4 : 6) * Math.PI) / 8 +
                              (Math.PI /
                                (data.length + (groupIdx === 2 ? 0 : 4))) *
                                idx +
                              Math.PI / (2 * data.length)
                          ) -
                        imageSize / 2
                      }`}
                      y={`${
                        radius[groupIdx] *
                          Math.sin(
                            ((groupIdx === 2 ? 4 : 6) * Math.PI) / 8 +
                              (Math.PI /
                                (data.length + (groupIdx === 2 ? 0 : 4))) *
                                idx +
                              Math.PI / (2 * data.length)
                          ) -
                        imageSize / 2
                      }`}
                      href={link}
                      height={imageSize}
                      width={imageSize}
                    />
                  </g>
                </CategoryRadarTooltip>
              </g>
            ))
          )}
        </g>
      </svg>
    </Wrapper>
  );
};

export default CategoryRadar;
