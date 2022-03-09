import styled from "styled-components/macro";

const StyledListItem = styled.div`
  padding-top: 12px;
  font: 300 19px poppins, sans-serif;
  svg.MuiSvgIcon-root {
    font-size: 12px;
    margin-left: 10px;
  }
  a {
    color: inherit;
    :hover {
      border-bottom: 1px solid white;
    }
  }
  &.hovered {
    color: ${({ theme }) => theme.pink};
  }
  @media screen and (max-width: 1000px) {
    font-size: 18px;
  }
`;

export default StyledListItem;
