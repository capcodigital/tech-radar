import { Link } from "react-router-dom";
import styled from "styled-components/macro";

const StyledBackLink = styled(Link)`
  font-size: 17px;
  display: block;
  color: inherit;
  img {
    margin-left: 10px !important;
  }
  :hover {
    color: inherit;
    text-decoration: underline;
  }
`;

export const StyledBackButton = styled.button`
  font-size: 17px;
  display: block;
  color: inherit;
  background: transparent;
  border: none;
  padding: 0;
  img {
    margin-left: 10px !important;
  }
  :hover {
    color: inherit;
    text-decoration: underline;
  }
`;

export default StyledBackLink;
