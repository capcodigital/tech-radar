import { Link } from "react-router-dom";
import styled from "styled-components/macro";

export const StyledLink = styled(Link)`
  font-size: 24px;
  font-weight: 700;
  font-family: poppins, sans-serif;
  color: inherit;
  border-bottom: 1px solid ${({ theme }) => theme.pink};
  align-self: center;
  img {
    margin-left: 10px !important;
  }
  :hover {
    color: inherit;
    text-decoration: underline;
  }
`;
