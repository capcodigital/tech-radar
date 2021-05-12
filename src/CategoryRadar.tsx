import React, { FC } from 'react';
import * as d3 from 'd3';
import styled from 'styled-components/macro';
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
  width: 40vw;
  margin-top: -10px;
  display: inline-block;
  .arc {
    :hover {
      transition: 0.7s;
    }
  }
`;

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
      <svg viewBox={'0 0 400 800'} style={{ overflow: 'visible' }}>
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
                          (6 * Math.PI) / 8 +
                            (Math.PI /
                              (data.length + (groupIdx === 2 ? 1 : 4))) *
                              idx +
                            Math.PI / ((groupIdx === 2 ? 3 : 2) * data.length)
                        )
                      }`}
                      cy={`${
                        radius[groupIdx] *
                        Math.sin(
                          (6 * Math.PI) / 8 +
                            (Math.PI /
                              (data.length + (groupIdx === 2 ? 1 : 4))) *
                              idx +
                            Math.PI / ((groupIdx === 2 ? 3 : 2) * data.length)
                        )
                      }`}
                      r={dataPointCircleRadius}
                      fill={'white'}
                    />

                    <image
                      x={`${
                        radius[groupIdx] *
                          Math.cos(
                            (6 * Math.PI) / 8 +
                              (Math.PI /
                                (data.length + (groupIdx === 2 ? 1 : 4))) *
                                idx +
                              Math.PI / ((groupIdx === 2 ? 3 : 2) * data.length)
                          ) -
                        imageSize / 2
                      }`}
                      y={`${
                        radius[groupIdx] *
                          Math.sin(
                            (6 * Math.PI) / 8 +
                              (Math.PI /
                                (data.length + (groupIdx === 2 ? 1 : 4))) *
                                idx +
                              Math.PI / ((groupIdx === 2 ? 3 : 2) * data.length)
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
