import React, { FC } from 'react';
import styled from 'styled-components/macro';

const StyledPageWrapper = styled.div`
  width: 100%;
  height: 120%;
  background: radial-gradient(rgba(230, 35, 109, 0.6) 10%, transparent 70%);
  text-align: center;
  padding: 1rem 0rem 1rem 1rem;
  color: white;
  overflow-x: hidden;
  a:hover {
    text-decoration: none;
  }
`;

const PageWrapper: FC = ({ children }) => {
  return <StyledPageWrapper>{children}</StyledPageWrapper>;
};

export default PageWrapper;
