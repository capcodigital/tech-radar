import React, { FC } from 'react';
import * as d3 from 'd3';
import Tooltip from '@material-ui/core/Tooltip';
import styled from 'styled-components/macro';
import StyledGroup from './StyledGroup';

const Wrapper = styled.div`
  width: 60vw;
  svg {
    @-webkit-keyframes swirl-in-fwd {
      0% {
        -webkit-transform: rotate(-540deg) scale(0);
        transform: rotate(-540deg) scale(0);
        opacity: 0;
      }
      100% {
        -webkit-transform: rotate(0) scale(1);
        transform: rotate(0) scale(1);
        opacity: 1;
      }
    }
    @keyframes swirl-in-fwd {
      0% {
        -webkit-transform: rotate(-540deg) scale(0);
        transform: rotate(-540deg) scale(0);
        opacity: 0;
      }
      100% {
        -webkit-transform: rotate(0) scale(1);
        transform: rotate(0) scale(1);
        opacity: 1;
      }
    }

    -webkit-animation: swirl-in-fwd 0.6s ease-out both;
    animation: swirl-in-fwd 0.6s ease-out both;
  }
`;

type RadarProps = {
  data?: any;
};

const Radar: FC<RadarProps> = ({ data }) => {
  const size = 700;
  const outterRadius = 350;
  const middleRadius = (outterRadius * 2) / 3;
  const innerCircleRadius = outterRadius / 3;

  const dataPointCircleRadius = 14;
  const imageSize = Math.sqrt(2) * dataPointCircleRadius; //square inside circle
  const decayRate = 0.6;

  const color = d3
    .scaleLinear<string>()
    .domain([0, 8, 16, 24])
    .range(['#671114', '#592556', '#38379F']);
  //const createArc = d3.arc().padAngle(0.05).cornerRadius(3);

  const xScale = d3
    .scaleLinear()
    .domain([1, 24])
    .range([0, 2 * Math.PI]);

  const xScaleSegments = d3
    .scaleLinear()
    .domain([1, 3])
    .range([0, 2 * Math.PI]);

  return (
    <Wrapper>
      <svg
        viewBox={'60 60 800 800'}
        style={{ overflow: 'visible', marginBottom: 50 }}
      >
        <g transform={`translate(${size / 2 + 100} ${size / 2 + 100})`}>
          <circle
            cx={0}
            cy={0}
            r={outterRadius}
            fill={'#ffffff'}
            stroke={'lightgrey'}
            opacity={0.03}
          />
          <circle
            cx={0}
            cy={0}
            r={middleRadius}
            fill={'#ffffff'}
            opacity={0.03}
          />
          <circle
            cx={0}
            cy={0}
            r={innerCircleRadius}
            fill={'#ffffff'}
            opacity={0.05}
          />

          {new Array(8).fill(0).map((d: any, idx: number) => (
            <line
              key={`tech-line-${idx}`}
              transform={`rotate(${(360 / 8) * idx + 22.5})`}
              x1={0}
              y1={0}
              y2={size / 2}
              stroke={'white'}
              strokeWidth={0.2}
            />
          ))}

          {/* labels for rings */}
          {[-1, 1].map((side:number)=>['scaling', 'skilled', 'preferred'].map(
            (segmentName: string, idx: number) => (
              <g key={`${segmentName}-line`} transform={``}>
                <text
                  textAnchor='middle'
                  y={side*(innerCircleRadius * (idx + 1) - innerCircleRadius / 3)}
                  fontSize={12}
                  fill={'white'}
                  opacity={0.5}
                >
                  {segmentName}
                </text>
              </g>
            )
          ))}
          {[-1, 1].map((side:number)=>['scaling', 'skilled', 'preferred'].map(
            (segmentName: string, idx: number) => (
              <g key={`${segmentName}-line`} transform={``}>
                <text
                  textAnchor='middle'
                  y={0}
                  x={side*(innerCircleRadius * (idx + 1) - innerCircleRadius / 3)}
                  fontSize={12}
                  fill={'white'}
                  opacity={0.5}
                >
                  {segmentName}
                </text>
              </g>
            )
          ))}
        </g>
      </svg>
    </Wrapper>
  );
};

export default Radar;
