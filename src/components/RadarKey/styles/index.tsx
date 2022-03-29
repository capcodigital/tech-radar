import styled from "styled-components/macro";

export const StyledRadarKey = styled.div`
  margin-left: 90px;
  position: absolute;
  width: 100px;
  margin-top: 50px;
  text-align: left;
  font-size: 16px;
  div:first-child {
    font-size: 20px;
    // border-bottom: 0.1px solid #c9c6c657;
  }
  div {
    padding-bottom: 8px;
    margin-bottom: 8px;
    svg {
      margin-right: 8px;
    }
    div.title {
      color: #e6236d;
    }
  }
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

export const TooltipTitle = styled.div`
  font-size: 20px;
  color: #e6236d;
  padding-bottom: 10px;
`;

export const TooltipContent = styled.div`
  font-family: Poppins, sans-serif;
`;

export const KeyBorder = styled.div`
  .key-text {
    font-size: 16px;
    border-bottom: none;
    cursor: pointer;
  }

  .key-text:hover {
    color: #e6236d;
    -webkit-transition: color 1.2s;
  }
`;
