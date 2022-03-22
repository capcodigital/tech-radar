import { Link } from "react-router-dom";
import styled from "styled-components/macro";

export const StyledLink = styled(Link)`
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

export const Title = styled.div`
  font-size: 24px;
  font-weight: 700;
  padding-bottom: 14px;
`;
