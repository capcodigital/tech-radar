import React, { FC, useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { RadarContextType, RadarContext } from './RadarContextProvider';
import * as d3 from 'd3';
import styled from 'styled-components/macro';
import images from './images';
import StyledGroup from './StyledGroup';
import { RadarTooltip } from './StyledTooltip';

const width = 400;
const height = 800;
const outterRadius = width;
const middleRadius = (outterRadius * 2) / 3;
const innerRadius = outterRadius / 3;
const radius = [outterRadius - 50, middleRadius - 50, innerRadius - 50];
const dataPointCircleRadius = 14;
const imageSize = Math.sqrt(2) * dataPointCircleRadius; //square inside circle

const Wrapper = styled.div`
  // width: 50vw;
  display: inline-block;
  .arc {
    :hover {
      transition: 0.7s;
    }
  }
`;

const getRowLength = (dataNum: number, idx: number) => {
  if (dataNum <= 3) return dataNum;
  else if (dataNum > 3 || dataNum < 6) {
    return idx < 3 ? 3 : dataNum - 3;
  } else if (dataNum === 6) return dataNum / 2;
  else return 0;
};
type CategoryRadarType = {
  data: {
    preferred: Array<{ name: string; link: string }>;
    skilled: Array<{ name: string; link: string }>;
    scaling: Array<{ name: string; link: string }>;
  };
};

const createArc = d3.arc().padAngle(0);

const CategoryRadar: FC<CategoryRadarType> = ({ data }) => {
  return (
    <Wrapper>
      <svg width={400} height={800} style={{ overflow: 'visible' }}>
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
            fill={'#ffffff'}
            stroke={'lightgrey'}
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
            fill={'#ffffff'}
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
            fill={'#ffffff'}
            opacity={0.05}
          />
          {Object.entries(data).map(([group, data], groupIdx) =>
            data.map(({ name, link }, idx) => (
              <StyledGroup key={`preferred-${idx}`}>
                <RadarTooltip
                  title={name}
                  aria-label={name}
                  placement='top'
                  arrow
                >
                  <g>
                    {/* background circle for icons */}
                    <circle
                      key={`preferred-${name}-${idx}`}
                      cx={`${
                        radius[groupIdx] *
                        Math.cos(
                          (3 * Math.PI) / 4 +
                            (Math.PI / (data.length + 3)) * idx
                        )
                      }`}
                      cy={`${
                        radius[groupIdx] *
                        Math.sin(
                          (3 * Math.PI) / 4 +
                            (Math.PI / (data.length + 3)) * idx
                        )
                      }`}
                      r={dataPointCircleRadius}
                      fill={'white'}
                    />

                    <image
                      x={`${
                        radius[groupIdx] *
                          Math.cos(
                            (3 * Math.PI) / 4 +
                              (Math.PI / (data.length + 3)) * idx
                          ) -
                        imageSize / 2
                      }`}
                      y={`${
                        radius[groupIdx] *
                          Math.sin(
                            (3 * Math.PI) / 4 +
                              (Math.PI / (data.length + 3)) * idx
                          ) -
                        imageSize / 2
                      }`}
                      href={link}
                      height={imageSize}
                      width={imageSize}
                    />
                  </g>
                </RadarTooltip>
              </StyledGroup>
            ))
          )}
        </g>
      </svg>
    </Wrapper>
  );
};

export default CategoryRadar;
