import styled from "styled-components/macro";

export const Wrapper = styled.div`
  margin-top: -110px;
  width: 50vw;
  display: inline-block;
  .arc {
    :hover {
      cursor: pointer;
      transition: 0.7s;
    }
  }
  @media screen and (max-width: 1000px) {
    display: none;
  }
  g {
    cursor: pointer;
  }
`;

export const StyledNav = styled.g`
  cursor: pointer;

  animation: fadeIn 5s;
  -webkit-animation: fadeIn 4s;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  path {
    transition: all 0.3s ease-in-out;
    opacity: 0;
    transform-origin: -10% 0%;
  }
  :hover {
    path {
      opacity: 1;
      transform-origin: 0% 0%;
    }
    text {
      text-decoration: underline;
    }
  }
`;
