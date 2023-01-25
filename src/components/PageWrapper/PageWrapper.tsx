import styled from "styled-components/macro";

const PageWrapper = styled.div`
  width: 100%;
  background: radial-gradient(rgba(230, 35, 109, 0.6) 10%, transparent 70%);
  text-align: center;
  padding-top: 16px;
  color: white;
  overflow-x: hidden;
  a:hover {
    text-decoration: none;
  }
  @media screen and (max-width: 1000px) {
    background: radial-gradient(
      120% 50% at center,
      rgba(230, 35, 109, 0.6),
      transparent
    );
  }
`;

export default PageWrapper;
