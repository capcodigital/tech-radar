import styled from "styled-components/macro";

type WrapperProps = {
  category: string;
};

export const Wrapper = styled.div<WrapperProps>`
  position: relative;
  width: 100%;
  display: flex;
  padding-left: 90px;
  margin: 50px 0 100px 0;
  .background {
    opacity: 0.12;
    position: absolute;
    top: -80px;
    left: -300px;
  }
  img {
    margin: auto;
  }
  @media screen and (max-width: 1000px) {
    margin-top: 30px;
    padding: 0 25px 0 25px;
    img.background {
      display: none;
    }
  }
`;

export const ContentWrapper = styled.div`
  text-align: left;
  width: 1060px;
  margin: auto;
  position: relative;
  :first-child {
    display: inline-block;
  }
  svg.icon {
    width: 80px;
    height: 80px;
  }
  @media screen and (max-width: 1000px) {
    width: 100%;
    svg.icon {
      width: 50px;
      height: 50px;
    }
  }
  .content-head {
    display: flex;
    justify-content: space-between;
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

export const Divider = styled.hr`
  border: 0;
  height: 1px;
  background-image: linear-gradient(
    to right,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0.75),
    rgba(255, 255, 255, 0)
  );
`;
