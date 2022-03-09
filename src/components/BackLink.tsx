import React, { FC } from "react";
import { Link } from "react-router-dom";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import styled from "styled-components/macro";
import images from "../images";

type BackLinkType = {
  category: string;
};

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

const BackLink: FC<BackLinkType> = ({ category }) => (
  <StyledBackLink
    to={`/category/${category.replace(/\s/g, "-").toLowerCase()}`}
  >
    <NavigateBeforeIcon />
    Back to {category}
    <img
      src={(images as any)[category]}
      alt={category}
      width={24}
      height={24}
    />
  </StyledBackLink>
);

export const BackButton = () => (
  <StyledBackLink to={"/home"}>
    <NavigateBeforeIcon />
    Back
  </StyledBackLink>
);

export default BackLink;
