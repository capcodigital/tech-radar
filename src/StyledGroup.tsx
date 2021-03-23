import React, { FC } from 'react';
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
type StyledGroupProps = {
  onMouseOver?: any;
  onMouseLeave?: any;
};

const StyledGroup: FC<StyledGroupProps> = ({ children, onMouseOver, onMouseLeave }) => {
  return (
    <StyledDataGroup onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>{children}</StyledDataGroup>
  );
};

export default StyledGroup;
