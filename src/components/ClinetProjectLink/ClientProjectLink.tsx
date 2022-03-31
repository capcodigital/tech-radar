import React, { FC, useContext } from "react";
import { StyledLink, Title } from "./styles/";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import {
  RadarContextType,
  RadarContext,
} from "../../components/RadarContextProvider/RadarContextProvider";

type LinkProps = {
  onClick: any;
};

const ClientProjectLink: FC<LinkProps> = ({ onClick }) => {
  const { category, technology } = useContext<RadarContextType>(RadarContext);
  return (
    <>
      <Title>Demo client projects</Title>
      <StyledLink
        onClick={onClick}
        to={`/demo/${category.replace(/\s/g, "-")}/${technology.replace(
          /\s/g,
          "-"
        )}`.toLowerCase()}
      >
        View client projects using {technology}
        <NavigateNextIcon />
      </StyledLink>
    </>
  );
};

export default ClientProjectLink;
