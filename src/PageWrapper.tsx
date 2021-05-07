import React, { FC } from 'react';
import styled from 'styled-components/macro';

const StyledPageWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: radial-gradient(rgba(230, 35, 109,0.7) 0%, transparent 80%);
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
