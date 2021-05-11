import React, { FC } from 'react';
import styled from 'styled-components/macro';

const StyledPageWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: radial-gradient(rgba(230, 35, 109, 0.7) 0%, transparent 70%);
  text-align: center;
  padding: 1rem;
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
