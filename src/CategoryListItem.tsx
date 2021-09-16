import React, { FC } from "react";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import styled from "styled-components/macro";

const StyledListItem = styled.div`
  padding-top: 12px;
  font-family: poppins, sans-serif;
  font-size: 19px;
  font-weight: 300;
  svg.MuiSvgIcon-root {
    font-size: 12px;
    margin-left: 10px;
  }
  a {
    color: inherit;
    :hover {
      border-bottom: 1px solid white;
    }
  }
  &.hovered {
    color: ${({ theme }) => theme.pink};
  }
  @media screen and (max-width: 1000px) {
    font-size: 18px;
  }
`;

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
      data-testid={`category-item-${techName}`}
    >
      {techName}
    </Link>
    {enabled && <ArrowForwardIosIcon />}
  </StyledListItem>
);

export default CategoryListItem;
