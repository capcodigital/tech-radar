import styled from "styled-components/macro";

export const Wrapper = styled.div`
  position: relative;
  .mobile-icons {
    margin-top: 50px;
    padding-bottom: 140px;
    position: relative;
    .text {
      color: white;
      font-size: 24px;
      .MuiSvgIcon-root {
        width: 15px;
        margin-left: 4px;
      }
    }
  }

  @media screen and (min-width: 1000px) {
    .mobile-icons {
      display: none;
    }
    .mobile-background {
      display: none;
    }
    div.background {
      display: none;
    }
  }
`;
export const OutterWrapper = styled.div`
  .footer {
    position: absolute;
    top: ${window.innerHeight}px;
    @media screen and (max-width: 1000px) {
      position: inherit;
    }
  }
`;
