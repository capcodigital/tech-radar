import React from 'react';
import { Link } from 'react-router-dom';
import RadarKey from './RadarKey';
import Radar from './Radar';
import Grid from '@material-ui/core/Grid';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import images from './images';
import styled from 'styled-components/macro';

const Wrapper = styled.div`
  position: relative;
  height: 120%;
  padding: 0rem 1rem 1rem 1rem;
  .mobile-icons {
    margin-top: 50px;
    padding-bottom: 140px;
    .text {
      color: white;
      font-size: 24px;
      .MuiSvgIcon-root {
        width: 15px;
        margin-left: 4px;
      }
    }
  }
  @media screen and (min-width: 1000px) {
    .mobile-icons {
      display: none;
    }
  }
`;

const Home = () => {
  return (
    <Wrapper>
      <RadarKey />
      <Radar />
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
