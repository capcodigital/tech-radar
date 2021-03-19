import React, { FC } from 'react';
import * as d3 from 'd3';
import Tooltip from '@material-ui/core/Tooltip';

type BarChartProps = {
  data: any;
};

const RadialChart2: FC<BarChartProps> = ({ data }) => {
  const width = 900;
  const height = 900;
  const dataPointCircleRadius = 17;
  const innerCircleRadius = 100;
  const imageSize = 24;
  const color = d3
    .scaleLinear<string>()
    .domain([0, 8, 16, 24])
    .range(['#D91448', '#592556', '#38379F']);
  //const createArc = d3.arc().padAngle(0.05).cornerRadius(3);
  return (
    <svg width={width} height={height} style={{ overflow: 'visible' }}>
      {/* <g transform={`translate(${height / 2} ${width / 2})`}>
        {d3.range(180).map((d: any, i: number) => {
          return (
            <path
              className={`arc-${i}`}
              d={
                createArc({
                  startAngle: i * 2 * (Math.PI / 180),
                  endAngle: (i + 1) * 2 * (Math.PI / 180),
                  innerRadius: 0,
                  outerRadius: height / 2,
                })!
              }
              fill={d3.hsl(i, 1, 0.5).toString()}
            />
          );
        })}
      </g> */}
      <g transform={`translate(${height / 2} ${width / 2})`}>
        <circle
          key={'last-circle'}
          cx={0}
          cy={0}
          r={height / 2}
          fill={'transparent'}
          stroke={'lightgrey'}
          strokeDasharray={3}
          opacity={0.4}
        />

        {[1, 2, 3].map((idx: number) => (
          <line
            transform={`rotate(${120 * idx - 37})`}
            x1={0}
            y1={0}
            y2={height / 2}
            stroke={'white'}
            strokeWidth={3}
          />
        ))}
        {new Array(24).fill(0).map((d: any, idx: number) => (
          <line
            transform={`rotate(${(360 / 24) * idx + 90})`}
            x1={0}
            y1={0}
            y2={height / 2}
            stroke={color(idx)}
            strokeWidth={1}
          />
        ))}

        {data.map((d: any, techIdx: number) => {
          return (
            <g>
              {d.preferred.map((dataPoint: any, idx: number) => {
                idx += 1;
                let r = innerCircleRadius + idx * Math.pow(0.7, 2) * 120; //adding decay for radius size increase
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
                            idx * 2 * Math.PI +
                              (Math.PI / 12) * techIdx +
                              Math.PI
                          )
                        }`}
                        cy={`${
                          r *
                          Math.sin(
                            idx * 2 * Math.PI +
                              (Math.PI / 12) * techIdx +
                              Math.PI
                          )
                        }`}
                        r={dataPointCircleRadius}
                        fill={'white'}
                        stroke={color(techIdx)}
                        strokeWidth={2}
                      />
                      <image
                        x={`${
                          r *
                            Math.cos(
                              idx * 2 * Math.PI +
                                (Math.PI / 12) * techIdx +
                                Math.PI
                            ) -
                          12
                        }`}
                        y={`${
                          r *
                            Math.sin(
                              idx * 2 * Math.PI +
                                (Math.PI / 12) * techIdx +
                                Math.PI
                            ) -
                          12
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
                idx += 1;
                let r = innerCircleRadius + idx * Math.pow(0.7, 2) * 120; //adding 0.7^2 decay for radius size increase
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
                            idx * 2 * Math.PI +
                              (Math.PI / 12) * techIdx -
                              Math.PI / 3
                          )
                        }`}
                        cy={`${
                          r *
                          Math.sin(
                            idx * 2 * Math.PI +
                              (Math.PI / 12) * techIdx -
                              Math.PI / 3
                          )
                        }`}
                        r={dataPointCircleRadius}
                        fill={'white'}
                        stroke={color(techIdx + 8)}
                        strokeWidth={2}
                      />
                      <image
                        x={`${
                          r *
                            Math.cos(
                              idx * 2 * Math.PI +
                                (Math.PI / 12) * techIdx -
                                Math.PI / 3
                            ) -
                          12
                        }`}
                        y={`${
                          r *
                            Math.sin(
                              idx * 2 * Math.PI +
                                (Math.PI / 12) * techIdx -
                                Math.PI / 3
                            ) -
                          12
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
                idx += 1;
                let r = innerCircleRadius + idx * Math.pow(0.7, 2) * 120; //adding decay for radius size increase
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
                            idx * 2 * Math.PI +
                              (Math.PI / 12) * techIdx +
                              Math.PI / 3
                          )
                        }`}
                        cy={`${
                          r *
                          Math.sin(
                            idx * 2 * Math.PI +
                              (Math.PI / 12) * techIdx +
                              Math.PI / 3
                          )
                        }`}
                        r={dataPointCircleRadius}
                        fill={'white'}
                        stroke={color(techIdx + 16)}
                        strokeWidth={2}
                      />
                      <image
                        x={`${
                          r *
                            Math.cos(
                              idx * 2 * Math.PI +
                                (Math.PI / 12) * techIdx +
                                Math.PI / 3
                            ) -
                          12
                        }`}
                        y={`${
                          r *
                            Math.sin(
                              idx * 2 * Math.PI +
                                (Math.PI / 12) * techIdx +
                                Math.PI / 3
                            ) -
                          12
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

export default RadialChart2;
