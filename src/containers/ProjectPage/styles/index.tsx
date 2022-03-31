import styled from "styled-components/macro";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  .MuiContainer-root {
    text-align: left;
    .MuiGrid-container {
      margin: 35px 0;
    }
  }
  svg.tech-icon {
    width: 80px;
    height: 80px;
  }
  @media screen and (max-width: 1000px) {
    svg.tech-icon {
      width: 50px;
      height: 50px;
    }
  }
`;

export const ContentBody = styled.div`
  width: 700px;
  margin: 0 auto;
  font-family: poppins, sans-serif;
  .content-intro {
    font-size: 24px;
    margin-bottom: 34px;
    a {
      color: inherit;
      border-bottom: 1px solid ${({ theme }) => theme.pink};
      text-decoration: none;
    }
  }
  @media screen and (max-width: 1000px) {
    width: 100%;
    .content-intro {
      font-size: 18px;
    }
  }
`;

export const Title = styled.div`
  font-size: 120px;
  font-weight: 700;
  text-align: left;
  display: inline-block;
  vertical-align: middle;
  padding-right: 50px;
  @media screen and (max-width: 1000px) {
    font-size: 52px;
    padding-right: 30px;
  }
`;
