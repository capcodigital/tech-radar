import React, { FC, useContext } from 'react';
import RadarContext from './RadarContext';
import * as d3 from 'd3';
import Tooltip from '@material-ui/core/Tooltip';
import { radial } from './data';
import styled from 'styled-components/macro';

const StyledDataGroup = styled.g`
  image {
    transform-origin: 50% 50%;
    transition: 0.3s;
    transform-box: fill-box;
  }
  circle {
    transform-origin: 50% 50%;
    transition: 0.3s;
    transform-box: fill-box;
  }
  :hover {
    image {
      transform: scale(2);
      transform-origin: 50% 50%;
      transition: 0.3s;
    }
    circle {
      transform: scale(2);
      transform-origin: 50% 50%;
      transition: 0.3s;
    }
  }
`;

const StyledGroup: FC = ({ children }) => {
  return <StyledDataGroup>{children}</StyledDataGroup>;
};

export default StyledGroup;
