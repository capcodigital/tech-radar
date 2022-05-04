import { Link } from "react-router-dom";
import styled from "styled-components/macro";

export const StyledLink = styled(Link)`
  font-size: 40px;
  font-weight: 700;
  font-family: Bebas-Neue-Pro, sans-serif;
  color: inherit;
  border-bottom: 2px solid ${({ theme }) => theme.pink};
  align-self: center;
  img {
    margin-left: 10px !important;
  }
  :hover {
    color: inherit;
    text-decoration: underline;
  }
`;
