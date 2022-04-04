import React, { FC } from "react";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import StyledBackLink, { StyledBackButton } from "./styles/";
import images from "../../images";
import { useHistory } from "react-router-dom";

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

export const BackToHomeButton = () => (
  <StyledBackLink to={"/home"}>
    <NavigateBeforeIcon />
    Back
  </StyledBackLink>
);

export const BackButton: FC = () => {
  let history = useHistory();
  return (
    <StyledBackButton onClick={(e) => history.goBack()}>
      <NavigateBeforeIcon />
      Back
    </StyledBackButton>
  );
};

export default BackLink;
