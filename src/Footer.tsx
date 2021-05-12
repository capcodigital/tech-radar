import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

const StyledFooter = styled.div`
  height: 70px;
  width:100%;
  background: #00000026;
  text-align: center;
  font-size: 18px;
  color: white;
  padding: 0 100px 0 100px;
  line-height: 70px;
  // position: absolute;
  top: 100%;
  bottom: 0;
  a {
    color: inherit;
    float: left;
  }
  div {
    float: right;
  }
`;

const Footer = () => (
  <StyledFooter>
    <Link to='https://www.capco.com/'>Capco @2021</Link>
    <div>All Rights Reserved</div>
  </StyledFooter>
);

export default Footer;
