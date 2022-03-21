import React, { FC } from "react";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import StyledListItem from "./styles/";
type ListItemProps = {
  techName: string;
  category: string;
  hovered: boolean;
  enabled: boolean;
  onClick: any;
};

const CategoryListItem: FC<ListItemProps> = ({
  techName,
  category,
  enabled,
  onClick,
  hovered,
}) => (
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
