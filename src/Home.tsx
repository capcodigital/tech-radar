import React from 'react';
import RadarKey from './RadarKey'
import Radar from './Radar';
import styled from 'styled-components/macro';

const Wrapper = styled.div`
  position: relative;
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
