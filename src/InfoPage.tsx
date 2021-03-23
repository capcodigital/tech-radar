import React, { FC, useContext, useState, useMemo } from 'react';
import RadarContext from './RadarContext';
import * as d3 from 'd3';
import Tooltip from '@material-ui/core/Tooltip';
import { radial } from './data';
import StyledGroup from './StyledGroup';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import { ListItem } from '@material-ui/core';

const angleScale = d3.scaleLinear().range([0.6, 0.8]).domain([0, 1]);

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
    randArray[i] = i === 0 ? min + temp : randArray[i - 1] + temp + distance;
    available -= temp;
  }
  // scaling these random angle to avoid points on borders
  return randArray.map((el) => angleScale(el));
};

const randomNumGen = (min: number, max: number) =>
  Math.random() * (max - min) + min;

const circleColor = d3
  .scaleLinear<string>()
  .domain([1, 2, 3])
  .range(['#671114', '#592556', '#38379F']);

const InfoPage: FC = () => {
  const [hovered, setHovered] = useState('');
  const { name } = useContext(RadarContext);

  let data: any = radial.find((d) => d.name === name.toUpperCase());

  const width = 550;
  const height = 550;
  const dataPointCircleRadius = 22;
  const imageSize = 30;

  const createArc = d3.arc().padAngle(0).cornerRadius(3);

  const randomPreferredAngles = useMemo(
    () => spacedRandArray(0.2, data.preferred.length),
    [data]
  );

  const randomSkilledAngles = useMemo(
    () => spacedRandArray(0.2, data.skilled.length),
    [data]
  );

  const randomScalingAngles = useMemo(
    () => spacedRandArray(0.2, data.scaling.length),
    [data]
  );

  const radiusPreferred = useMemo(
    () => data.preferred.map(() => randomNumGen(400, 470)),
    [data]
  );

  const radiusSkilled = useMemo(
    () => data.skilled.map(() => randomNumGen(250, 300)),
    [data]
  );

  const radiusScaling = useMemo(
    () => data.scaling.map(() => randomNumGen(100, 170)),
    [data]
  );

  return (
    <div>
      <Grid
        container
        justify='center'
        spacing={5}
        style={{ margin: '1%', textAlign: 'left', width: '100%' }}
      >
        <Grid item style={{ width: '40%' }}>
          <h2 style={{ marginBottom: '2rem' }}>{name.toUpperCase()}</h2>
          <h3>Preferred</h3>
          <Divider />
          <List>
            {data.preferred.map((item: any) => (
              <ListItem
                key={`menu-${item.name}`}
                button
                component='li'
                style={{
                  background: `${
                    item.name === hovered ? 'grey' : 'transparent'
                  }`,
                }}
                onMouseOver={() => setHovered(item.name)}
                onMouseLeave={() => setHovered('')}
              >
                {item.name}
              </ListItem>
            ))}
          </List>
          {data.skilled.length > 0 && (
            <>
              <h3>Skilled</h3>
              <Divider />
            </>
          )}
          <List>
            {data.skilled.map((item: any) => (
              <ListItem
                key={`menu-${item.name}`}
                button
                component='li'
                style={{
                  background: `${
                    item.name === hovered ? 'grey' : 'transparent'
                  }`,
                }}
                onMouseOver={() => setHovered(item.name)}
                onMouseLeave={() => setHovered('')}
              >
                {item.name}
              </ListItem>
            ))}
          </List>
          <h3>Scaling</h3>
          <Divider />
          <List>
            {data.scaling.map((item: any) => (
              <ListItem
                key={`menu-${item.name}`}
                button
                component='li'
                style={{
                  background: `${
                    item.name === hovered ? 'grey' : 'transparent'
                  }`,
                }}
                onMouseOver={() => setHovered(item.name)}
                onMouseLeave={() => setHovered('')}
              >
                {item.name}
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item>
          <svg
            width={width}
            height={height}
            style={{ overflow: 'visible', marginBottom: '3rem' }}
          >
            <g transform={`translate(${width} ${height})`}>
              {['scaling', 'skilled', 'preferred'].map(
                (item: string, idx: number) => {
                  idx += 1;
                  return (
                    <g key={`segment-${idx}`}>
                      <path
                        className={`arc`}
                        d={
                          createArc({
                            startAngle: 2 * Math.PI,
                            endAngle: (3 * Math.PI) / 2,
                            innerRadius: 0,
                            outerRadius: idx * 150 + 60,
                          })!
                        }
                        fill={'transparent'}
                        stroke={circleColor(idx)}
                        strokeWidth={1}
                        strokeDasharray={2}
                      />
                      {/* labels for segments*/}
                      <text
                        textAnchor='middle'
                        x={-(idx * 150)}
                        y={30}
                        fontSize={15}
                        fill={'white'}
                      >
                        {item}
                      </text>
                    </g>
                  );
                }
              )}

              {data.scaling.map((dataPoint: any, idx: number) => {
                // generate random angle for data in this segment
                let randomAngleScaling = (randomScalingAngles as any)[idx];

                idx += 1; // avoid rendering data points on the border
                return (
                  <StyledGroup
                    key={`scaling-${idx}`}
                    onMouseOver={() => setHovered(dataPoint.name)}
                    onMouseLeave={() => setHovered('')}
                  >
                    <Tooltip
                      title={dataPoint.name}
                      aria-label='preferred'
                      placement='right'
                    >
                      <g>
                        <circle
                          cx={`${
                            radiusScaling[idx - 1] *
                            Math.cos(
                              (randomAngleScaling * idx * 2 * Math.PI) /
                                4 /
                                radial[0].scaling.length +
                                Math.PI
                            )
                          }`}
                          cy={`${
                            radiusScaling[idx - 1] *
                            Math.sin(
                              (randomAngleScaling * idx * 2 * Math.PI) /
                                4 /
                                radial[0].scaling.length +
                                Math.PI
                            )
                          }`}
                          r={dataPointCircleRadius}
                          fill={'white'}
                          stroke={circleColor(1)}
                          strokeWidth={3}
                        />
                        <image
                          x={`${
                            radiusScaling[idx - 1] *
                              Math.cos(
                                (randomAngleScaling * idx * 2 * Math.PI) /
                                  4 /
                                  radial[0].scaling.length +
                                  Math.PI
                              ) -
                            imageSize / 2 // subtracting half the image size to center image on circle
                          }`}
                          y={`${
                            radiusScaling[idx - 1] *
                              Math.sin(
                                (randomAngleScaling * idx * 2 * Math.PI) /
                                  4 /
                                  radial[0].scaling.length +
                                  Math.PI
                              ) -
                            imageSize / 2
                          }`}
                          href={dataPoint.link}
                          height={imageSize}
                          width={imageSize}
                        />
                      </g>
                    </Tooltip>
                  </StyledGroup>
                );
              })}
              {data.skilled.map((dataPoint: any, idx: number) => {
                // generate random angle for data in this segment
                let randomAngleSkilled = (randomSkilledAngles as any)[idx];

                idx += 1; // avoid rendering data points on the border
                return (
                  <StyledGroup
                    key={`skilled-${idx}`}
                    onMouseOver={() => setHovered(dataPoint.name)}
                    onMouseLeave={() => setHovered('')}
                  >
                    <Tooltip
                      title={dataPoint.name}
                      aria-label='preferred'
                      placement='right'
                    >
                      <g>
                        <circle
                          cx={`${
                            radiusSkilled[idx - 1] *
                            Math.cos(
                              (randomAngleSkilled * idx * 2 * Math.PI) /
                                4 /
                                radial[0].skilled.length +
                                Math.PI
                            )
                          }`}
                          cy={`${
                            radiusSkilled[idx - 1] *
                            Math.sin(
                              (randomAngleSkilled * idx * 2 * Math.PI) /
                                4 /
                                radial[0].skilled.length +
                                Math.PI
                            )
                          }`}
                          r={dataPointCircleRadius}
                          fill={'white'}
                          stroke={circleColor(2)}
                          strokeWidth={3}
                        />
                        <image
                          x={`${
                            radiusSkilled[idx - 1] *
                              Math.cos(
                                (randomAngleSkilled * idx * 2 * Math.PI) /
                                  4 /
                                  radial[0].skilled.length +
                                  Math.PI
                              ) -
                            imageSize / 2 // subtracting half the image size to center image on circle
                          }`}
                          y={`${
                            radiusSkilled[idx - 1] *
                              Math.sin(
                                (randomAngleSkilled * idx * 2 * Math.PI) /
                                  4 /
                                  radial[0].skilled.length +
                                  Math.PI
                              ) -
                            imageSize / 2
                          }`}
                          href={dataPoint.link}
                          height={imageSize}
                          width={imageSize}
                        />
                      </g>
                    </Tooltip>
                  </StyledGroup>
                );
              })}
              {data.preferred.map((dataPoint: any, idx: number) => {
                // generate random angle for data in this segment
                let randomAnglePreferred = (randomPreferredAngles as any)[idx];

                idx += 1; // avoid rendering data points on the border
                return (
                  <StyledGroup
                    key={`preferred-${idx}`}
                    onMouseOver={() => setHovered(dataPoint.name)}
                    onMouseLeave={() => setHovered('')}
                  >
                    <Tooltip
                      title={dataPoint.name}
                      aria-label='preferred'
                      placement='right'
                    >
                      <g>
                        <circle
                          cx={`${
                            radiusPreferred[idx - 1] *
                            Math.cos(
                              (randomAnglePreferred * idx * 2 * Math.PI) /
                                4 /
                                radial[0].preferred.length +
                                Math.PI
                            )
                          }`}
                          cy={`${
                            radiusPreferred[idx - 1] *
                            Math.sin(
                              (randomAnglePreferred * idx * 2 * Math.PI) /
                                4 /
                                radial[0].preferred.length +
                                Math.PI
                            )
                          }`}
                          r={dataPointCircleRadius}
                          fill={'white'}
                          stroke={circleColor(3)}
                          strokeWidth={3}
                        />
                        <image
                          x={`${
                            radiusPreferred[idx - 1] *
                              Math.cos(
                                (randomAnglePreferred * idx * 2 * Math.PI) /
                                  4 /
                                  radial[0].preferred.length +
                                  Math.PI
                              ) -
                            imageSize / 2 // subtracting half the image size to center image on circle
                          }`}
                          y={`${
                            radiusPreferred[idx - 1] *
                              Math.sin(
                                (randomAnglePreferred * idx * 2 * Math.PI) /
                                  4 /
                                  radial[0].preferred.length +
                                  Math.PI
                              ) -
                            imageSize / 2
                          }`}
                          href={dataPoint.link}
                          height={imageSize}
                          width={imageSize}
                        />
                      </g>
                    </Tooltip>
                  </StyledGroup>
                );
              })}
            </g>
          </svg>
        </Grid>
      </Grid>
    </div>
  );
};

export default InfoPage;
