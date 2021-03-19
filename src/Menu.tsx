import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

const StyledLink = styled(Link)`
  letter-spacing: 2px;
  font-size: 1rem;
  text-decoration: none;
  color: white;
  font-weight: none;
  div {
    margin: 1rem;
    width: 15rem;
    height: 3rem;
    background: #232121cc;
    line-height: 3rem;
    text-align: center;
  }
`;

const Menu = () => {
  return (
    <div>
      <StyledLink to={'/'}>
        <div>radial</div>
      </StyledLink>
      <StyledLink to={'/radial2'}>
        <div>radial 2</div>
      </StyledLink>
      <StyledLink to={'/bubble'}>
        <div>bubble chart</div>
      </StyledLink>
    </div>
  );
};

export default Menu;
