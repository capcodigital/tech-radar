import React, { FC } from "react";
import { Link } from "react-router-dom";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import styled from "styled-components/macro";
import images from "./images";
type BackLinkType = {
  category: string;
};

const StyledBackLink = styled.div`
  font-size: 17px;
  a {
    color: inherit;
    img {
      margin-left: 10px;
    }
  }
  :hover {
    a {
      color: inherit;
      text-decoration: underline;
    }
  }
`;

const BackLink: FC<BackLinkType> = ({ category }) => (
  <StyledBackLink>
    <Link to={`/category/${category.replace(/\s/g, "-").toLowerCase()}`}>
      <NavigateBeforeIcon />
      Back to {category}
      <img
        src={(images as any)[category]}
        alt={category}
        width={24}
        height={24}
      />
    </Link>
  </StyledBackLink>
);

export const BackButton = () => (
  <StyledBackLink>
    <Link to={"/home"}>
      <NavigateBeforeIcon />
      Back
    </Link>
  </StyledBackLink>
);

export default BackLink;
