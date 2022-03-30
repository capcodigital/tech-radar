import styled from "styled-components/macro";

export const Wrapper = styled.div`
  width: 700px;
  margin: 0 auto;
  @media screen and (max-width: 1000px) {
    width: 100%;
  }
  .css-1elwnq4-MuiPaper-root-MuiAccordion-root {
    background-color: transparent;
    border: #fff 2px solid;
    position: relative;
    transition: margin 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    overflow-anchor: none;
    box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 0%),
      0px 1px 1px 0px rgb(0 0 0 / 0%), 0px 1px 3px 0px rgb(0 0 0 / 0%);
  }
  .css-i4bv87-MuiSvgIcon-root {
    color: #fff;
    float: right;
  }
  .css-1m4ljmh-MuiTypography-root {
    width: 100%;
    // padding-left: 15px;
  }

  .jJwSaC .content div:first-child {
    padding: 20px;
    width: 100%;
  }
`;

export const StyledSubContent = styled.div`
  margin-bottom: 40px;
  .intro {
    font-size: 18px;
    font-weight: 500;
    padding-bottom: 14px;
  }
  .content {
    font-size: 16px;
    div:first-child {
      font-size: 18px;
      padding: 3px;
      margin: 2px;
      width: 100%;
      color: ${({ theme }) => theme.pink};
      font-weight: 700;
    }
    font-weight: 300;
  }
  a {
    color: inherit;
    border-bottom: 1px solid ${({ theme }) => theme.pink};
  }
  img {
    padding: 20px 0;
  }
  @media screen and (max-width: 1000px) {
    margin-bottom: 20px;
    .title {
      font-size: 20px;
    }
    .intro,
    .content {
      font-size: 18px;
    }
  }
`;

export const Title = styled.div`
  font-size: 24px;
  font-weight: 700;
  padding-bottom: 14px;
`;

export const SourceLink = styled.a`
  color: inherit;
  border-bottom: none!;
  font-size: 16px;
  :hover {
    color: ${({ theme }) => theme.pink};
    border-bottom: 1px solid ${({ theme }) => theme.pink};
  }
`;

// export default Wrapper;
