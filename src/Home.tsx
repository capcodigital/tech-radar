import React from 'react';
import RadarKey from './RadarKey'
import Radar from './Radar';
import styled from 'styled-components/macro';

const Wrapper = styled.div`
  margin-top: -50px;
`;

const Home = () => {
  return (
    <Wrapper>
      <RadarKey />
      
      <Radar />
    </Wrapper>
  );
};

export default Home;
