import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import StyledBackLink from "./styles/";
import images from "images";
import { useNavigate } from "react-router-dom";

type BackLinkType = {
  category: string;
};

const BackLink = ({ category }: BackLinkType) => {
  const navigate = useNavigate();
  return (
    <StyledBackLink
      onClick={() =>
        navigate(`/category/${category.replace(/\s/g, "-").toLowerCase()}`)
      }
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
};

export const BackButton = ({ to }: { to?: string }) => {
  const navigate = useNavigate();
  return (
    // @ts-ignore
    <StyledBackLink onClick={() => navigate(to ?? -1)}>
      <NavigateBeforeIcon />
      Back
    </StyledBackLink>
  );
};

export default BackLink;
