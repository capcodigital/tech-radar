import styled from "styled-components/macro";

export const Wrapper = styled.div`
  width: 700px;
  margin: 0 auto;
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
      padding-bottom: 2px;
      color: ${({ theme }) => theme.pink};
      font-weight: 700;
    }
    font-weight: 300;
    padding-bottom: 12px;
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
