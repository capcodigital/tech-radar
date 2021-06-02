import React from 'react';
import { Link } from 'react-router-dom';
import RadarKey from './RadarKey';
import Radar from './Radar';
import Grid from '@material-ui/core/Grid';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import images from './images';
import * as d3 from 'd3';
import styled from 'styled-components/macro';

const Wrapper = styled.div`
  position: relative;
  height: 120%;
  padding: 0rem 1rem 1rem 1rem;
  .mobile-icons {
    margin-top: 50px;
    padding-bottom: 140px;
    position:relative;
    .text {
      color: white;
      font-size: 24px;
      .MuiSvgIcon-root {
        width: 15px;
        margin-left: 4px;
      }
    }
  }
  div.background {
    margin-top:80px;
    width: 70vw;
    position: absolute;
    right: 0;
  }
  svg {
    right: 0;
    overflow: visible;
  }
  @media screen and (min-width: 1000px) {
    .mobile-icons {
      display: none;
    }
    .mobile-background {
      display: none;
    }
    div.background {
      display: none;
    }
  }
`;

const createArc = d3.arc().padAngle(0);

const Home = () => {
  return (
    <Wrapper>
      <RadarKey />
      <Radar />
      <div className='background'>
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
              fill={'rgba(255,255,255,0.05'}
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
              fill={'rgba(255,255,255,0.05'}
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
              fill={'rgba(255,255,255,0.05'}
            />
          </g>
        </svg>
      </div>

      <Grid container spacing={1} className='mobile-icons'>
        {Object.entries(images).map(([name, image]) => (
          <Grid item xs={6}>
            <Link to={`/category/${name}`.toLowerCase()}>
              <img height={90} src={image} alt={name} />
              <div className='text'>
                {name}
                <ArrowForwardIosIcon />
              </div>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
};

export default Home;
