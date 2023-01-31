import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import StyledListItem from "./styles/";
type ListItemProps = {
  techName: string;
  category: string;
  hovered: boolean;
  enabled: boolean;
  onClick: () => void;
};

const CategoryListItem = ({
  techName,
  category,
  enabled,
  onClick,
  hovered,
}: ListItemProps) => (
  <StyledListItem className={hovered ? "hovered" : ""} onClick={onClick}>
    <Link
      to={`/technology/${category.replace(/\s/g, "-")}/${techName.replace(
        /\s/g,
        "-"
      )}`.toLowerCase()}
      style={{ pointerEvents: enabled ? undefined : "none" }}
      data-test-id={`category-item-${techName}`}
    >
      {techName}
    </Link>
    {enabled && <ArrowForwardIosIcon />}
  </StyledListItem>
);

export default CategoryListItem;
