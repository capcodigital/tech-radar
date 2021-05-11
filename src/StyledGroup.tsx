import React from 'react';
import styled from 'styled-components/macro';

const StyledGroup = styled.g`
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

export default StyledGroup;
