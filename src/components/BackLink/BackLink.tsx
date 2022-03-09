import React, { FC } from "react";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import StyledBackLink from "./styles/";
import images from "../../images";

type BackLinkType = {
  category: string;
};

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
