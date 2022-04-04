import styled from "styled-components/macro";

const StyledTabs = styled.div`
  .MuiButtonBase-root {
    color: #fff;
    width: 50%;
    max-width: none;
    text-transform: none;
    font-size: 1rem;
    &.Mui-selected {
      color: #fff;
      font-weight: 700;
    }
  }
  .MuiTabs-indicator {
    background-color: ${({ theme }) => theme.pink};
  }
`;

export default StyledTabs;
