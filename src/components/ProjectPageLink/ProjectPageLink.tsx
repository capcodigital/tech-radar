import React, { FC, useContext } from "react";
import { StyledLink } from "./styles";
import {
  RadarContextType,
  RadarContext,
} from "../RadarContextProvider/RadarContextProvider";

type LinkProps = {
  onClick: any;
};

const ProjectPageLink: FC<LinkProps> = ({ onClick }) => {
  const { category, technology } = useContext<RadarContextType>(RadarContext);
  return (
    <>
      <StyledLink
        onClick={onClick}
        to={`/projects/${category.replace(/\s/g, "-")}/${technology.replace(
          /\s/g,
          "-"
        )}`.toLowerCase()}
      >
        View Projects
      </StyledLink>
    </>
  );
};

export default ProjectPageLink;
