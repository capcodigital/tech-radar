import React, { FC } from 'react';
import * as d3 from 'd3';
import styled from 'styled-components/macro';
import chroma from 'chroma-js';
import Tooltip from '@material-ui/core/Tooltip';
type BarChartProps = {
  data: any;
};

// from stackoverflow... but it works :)
// returns random numbers with min distance between them
const spacedRandArray = (distance: number, count: number) => {
  const min = 0;
  const max = 1;
  let available = max - min - distance * (count - 1);
  if (available < 0) return false;
  // not able to fit the this amount of values in this range

  let arr: number[] = [];
  for (let i = 0; i < count; i++) {
    let temp = Math.random() * available;
    arr[i] = i == 0 ? min + temp : arr[i - 1] + temp + distance;
    available -= temp;
  }
  // map 0 to 0.1 and 1 to 0.9 to overlapping data points near borders
  return arr;
};

const RadialBarChart: FC<BarChartProps> = ({ data }) => {
  const width = 900;
  const height = 900;
  const dataPointCircleRadius = 22;
  const imageSize = 30;
  const circleColor = d3
    .scaleLinear<string>()
    .domain([8, 5, 0])
    .range(['#009cff', '#214e7e', '#000000']);

  const createArc = d3.arc().padAngle(0.05).cornerRadius(3);
  return (
    <svg width={width} height={height} style={{ overflow: 'visible' }}>
      <g transform={`translate(${height / 2} ${width / 2})`}>
        <circle
          key={'last-circle'}
          cx={0}
          cy={0}
          r={9 * 50}
          fill={'transparent'}
          stroke={'lightgrey'}
          strokeDasharray={3}
          opacity={0.4}
        />
        <circle
          key={'inner-circle'}
          cx={0}
          cy={0}
          r={50}
          fill={circleColor(8)}
          stroke={'lightgrey'}
          strokeDasharray={3}
          opacity={0.6}
        />

        {[1, 2, 3, 4].map((idx: number) => (
          <line
            transform={`rotate(${45+90 * idx})`}
            x1={0}
            y1={0}
            y2={height / 2}
            stroke={'#E3CDA3'}
            strokeWidth={1}
            strokeDasharray={4}
          />
        ))}

        {data.map((d: any, idx: number) => {
          const radius = (data.length - idx) * 50;
          const r = radius + 25;

          const randomPreferredAngles = spacedRandArray(
            0.2,
            d.preferred.length
          );
          const randomSkilledAngles = spacedRandArray(0.2, d.skilled.length);
          const randomScalingAngles = spacedRandArray(0.2, d.scaling.length);

          return (
            <g>
              <path
                className={`arc-${d.name}`}
                d={
                  createArc({
                    startAngle: 0,
                    endAngle: 2 * Math.PI,
                    innerRadius: r - 25,
                    outerRadius: r + 25,
                  })!
                }
                fill={circleColor(idx)}
                opacity={0.6}
              />

              <circle
                key={'border'}
                cx={0}
                cy={0}
                r={radius}
                fill={'transparent'}
                stroke={'lightgrey'}
                strokeDasharray={3}
                opacity={0.4}
              />

              <text
                textAnchor='middle'
                y={-(radius + 20)}
                fontSize={15}
                fill={'white'}
              >
                {d.name}
              </text>
              {d.preferred.map((dataPoint: any, idx: number) => {
                // generate random angle to spread out the data in quadrants
                // *0.9 to avoid points to be close to each other on the boarders of each quadrant
                let randomAnglePreferred =
                  (randomPreferredAngles as any)[idx] * 0.9;
                idx += 1; // avoid alignment of first(idx=0) data points
                return (
                  <Tooltip
                    key={`preferred-${idx}`}
                    title={dataPoint.name}
                    aria-label='haha'
                    placement='right'
                  >
                    <>
                      {/* background circle for icons */}
                      <circle
                        key={`preferred-${d.name}-${idx}`}
                        cx={`${
                          r *
                          Math.cos(
                            (randomAnglePreferred * idx * 2 * Math.PI) /
                              4 /
                              d.preferred.length -
                              Math.PI / 4
                          )
                        }`}
                        cy={`${
                          r *
                          Math.sin(
                            (randomAnglePreferred * idx * 2 * Math.PI) /
                              4 /
                              d.preferred.length -
                              Math.PI / 4
                          )
                        }`}
                        r={dataPointCircleRadius}
                        fill={'white'}
                        onMouseOver={() => console.log('hey preferred')}
                      />
                      <image
                        x={`${
                          r *
                            Math.cos(
                              (randomAnglePreferred * idx * 2 * Math.PI) /
                                4 /
                                d.preferred.length -
                                Math.PI / 4
                            ) -
                          15 // subtracting half the image size to center image on circle
                        }`}
                        y={`${
                          r *
                            Math.sin(
                              (randomAnglePreferred * idx * 2 * Math.PI) /
                                4 /
                                d.preferred.length -
                                Math.PI / 4
                            ) -
                          15
                        }`}
                        href={dataPoint.link}
                        height={imageSize}
                        width={imageSize}
                      />
                    </>
                  </Tooltip>
                );
              })}
              {d.skilled.map((dataPoint: any, idx: number) => {
                let randomAngleSkilled =
                  (randomSkilledAngles as any)[idx] * 0.9;
                idx += 1;
                return (
                  <Tooltip
                    key={`skilled-${idx}`}
                    title={dataPoint.name}
                    aria-label='haha'
                    placement='right'
                  >
                    <>
                      <circle
                        key={`skilled-${d.name}-${idx}`}
                        cx={`${
                          r *
                          Math.cos(
                            (randomAngleSkilled * idx * 2 * Math.PI) /
                              4 /
                              d.skilled.length +
                              Math.PI / 4
                          )
                        }`}
                        cy={`${
                          r *
                          Math.sin(
                            (randomAngleSkilled * idx * 2 * Math.PI) /
                              4 /
                              d.skilled.length +
                              Math.PI / 4
                          )
                        }`}
                        r={dataPointCircleRadius}
                        fill={'white'}
                        onMouseOver={() => console.log('hey skilled')}
                      />
                      <image
                        x={`${
                          r *
                            Math.cos(
                              (randomAngleSkilled * idx * 2 * Math.PI) /
                                4 /
                                d.skilled.length +
                                Math.PI / 4
                            ) -
                          15
                        }`}
                        y={`${
                          r *
                            Math.sin(
                              (randomAngleSkilled * idx * 2 * Math.PI) /
                                4 /
                                d.skilled.length +
                                Math.PI / 4
                            ) -
                          15
                        }`}
                        href={dataPoint.link}
                        height={imageSize}
                        width={imageSize}
                      />
                    </>
                  </Tooltip>
                );
              })}
              {d.scaling.map((dataPoint: any, idx: number) => {
                let randomAngleScaling =
                  (randomScalingAngles as any)[idx] * 0.9;
                idx += 1;
                return (
                  <Tooltip
                    key={`scaling-${idx}`}
                    title={dataPoint.name}
                    aria-label='haha'
                    placement='right'
                  >
                    <>
                      <circle
                        key={`scaling-${data.name}-${idx}`}
                        cx={`${
                          r *
                          Math.cos(
                            (randomAngleScaling * idx * 2 * Math.PI) /
                              4 /
                              d.scaling.length +
                              (3 * Math.PI) / 4
                          )
                        }`}
                        cy={`${
                          r *
                          Math.sin(
                            (randomAngleScaling * idx * 2 * Math.PI) /
                              4 /
                              d.scaling.length +
                              (3 * Math.PI) / 4
                          )
                        }`}
                        r={dataPointCircleRadius}
                        fill={'white'}
                        onMouseOver={() => console.log('hey scaling')}
                      />
                      <image
                        x={`${
                          r *
                            Math.cos(
                              (randomAngleScaling * idx * 2 * Math.PI) /
                                4 /
                                d.scaling.length +
                                (3 * Math.PI) / 4
                            ) -
                          15
                        }`}
                        y={`${
                          r *
                            Math.sin(
                              (randomAngleScaling * idx * 2 * Math.PI) /
                                4 /
                                d.scaling.length +
                                (3 * Math.PI) / 4
                            ) -
                          15
                        }`}
                        href={dataPoint.link}
                        height={imageSize}
                        width={imageSize}
                      />
                    </>
                  </Tooltip>
                );
              })}
            </g>
          );
        })}
      </g>
    </svg>
  );
};

export default RadialBarChart;
