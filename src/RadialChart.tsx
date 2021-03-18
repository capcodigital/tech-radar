import React, { FC } from 'react';
import * as d3 from 'd3';
import Tooltip from '@material-ui/core/Tooltip';
import styled from 'styled-components/macro';

type BarChartProps = {
  data: any;
};

const angleScale = d3.scaleLinear().range([0.4, 0.8]).domain([0, 1]);

// from stackoverflow... but it works :)
// returns random numbers with min distance between them
const spacedRandArray = (distance: number, count: number) => {
  const min = 0;
  const max = 1;
  let available = max - min - distance * (count - 1);
  if (available < 0) return false;

  let randArray: number[] = [];
  for (let i = 0; i < count; i++) {
    let temp = Math.random() * available;
    randArray[i] = i == 0 ? min + temp : randArray[i - 1] + temp + distance;
    available -= temp;
  }
  return randArray;
};
const RadialChart: FC<BarChartProps> = ({ data }) => {
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
            transform={`rotate(${45 + 90 * idx})`}
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
                letterSpacing={1}
              >
                {d.name}
              </text>
              {d.preferred.map((dataPoint: any, idx: number) => {
                // generate random angle for data in each quadrants
                // scaling this random angle to avoid overlapping of points on quadrant borders
                let randomAnglePreferred = angleScale(
                  (randomPreferredAngles as any)[idx]
                );
                idx += 1; // avoid alignment of first(idx=0) data points
                return (
                  <Tooltip
                    key={`preferred-${idx}`}
                    title={dataPoint.name}
                    aria-label='haha'
                    placement='right'
                  >
                    <g>
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
                    </g>
                  </Tooltip>
                );
              })}
              {d.skilled.map((dataPoint: any, idx: number) => {
                let randomAngleSkilled = angleScale(
                  (randomSkilledAngles as any)[idx]
                );
                idx += 1;
                return (
                  <Tooltip
                    key={`skilled-${idx}`}
                    title={dataPoint.name}
                    aria-label='haha'
                    placement='right'
                  >
                    <g>
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
                    </g>
                  </Tooltip>
                );
              })}
              {d.scaling.map((dataPoint: any, idx: number) => {
                let randomAngleScaling = angleScale(
                  (randomScalingAngles as any)[idx]
                );
                idx += 1;
                return (
                  <Tooltip
                    key={`scaling-${idx}`}
                    title={dataPoint.name}
                    aria-label='haha'
                    placement='right'
                  >
                    <g>
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
                    </g>
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

export default RadialChart;
