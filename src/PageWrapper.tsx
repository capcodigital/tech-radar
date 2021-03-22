import React, { FC } from 'react';
import styled from 'styled-components/macro';

const StyledPageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: black;
  text-align: center;
  padding: 1rem;
  color: white;
  hr {
    background-color: grey;
  }
  ul {
    font-family: Helvetica Neue;
    margin-bottom: 1rem;
  }
`;

const PageWrapper: FC = ({ children }) => {
  return <StyledPageWrapper>{children}</StyledPageWrapper>;
};

export default PageWrapper;
