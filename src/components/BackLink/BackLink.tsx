import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import StyledBackLink, { StyledBackButton } from "./styles/";
import images from "images";
import { useHistory } from "react-router-dom";

type BackLinkType = {
  category: string;
};

const BackLink = ({ category }: BackLinkType) => (
  <StyledBackLink
    to={`/category/${category.replace(/\s/g, "-").toLowerCase()}`}
  >
    <NavigateBeforeIcon />
    Back to {category}
    <img
      src={(images as { [key: string]: string })[category]}
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

export const BackButton = () => {
  const history = useHistory();
  return (
    <StyledBackButton onClick={() => history.goBack()}>
      <NavigateBeforeIcon />
      Back
    </StyledBackButton>
  );
};

export default BackLink;
