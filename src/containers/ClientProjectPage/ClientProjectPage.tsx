import React, { useContext, useEffect, useState } from "react";
import {
  RadarContextType,
  RadarContext,
} from "../../components/RadarContextProvider/RadarContextProvider";
import styled from "styled-components/macro";
import ClientProjectItem from "../../components/ClientProjectItem/ClientProjectItem";
import ClientProjects from "../../data/projects/ClientProjects";
import { Grid, Container } from "@material-ui/core";
import { BackButton } from "../../components/BackLink/BackLink";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  .MuiContainer-root {
    text-align: left;
    .MuiGrid-container {
      margin: 35px 0;
    }
  }
`;

type Project = {
  project: string;
  clientName: string;
  clientImage: string;
  description: string;
  technologies: Array<string>;
};

const ClientProjectPage = () => {
  const { technology, setTechnology } =
    useContext<RadarContextType>(RadarContext);

  const [demoProjects, setDemoProjects] = useState<Project[]>([]);
  const [gridSize, setGridSize] = useState<number>(0);
  const [isAvailable, setIsAvailable] = useState<boolean>(false);

  useEffect(() => {
    let demo: Project[] = [];
    let url = window.location.pathname.split("/");
    let size = 0;

    demo = technology
      ? ClientProjects.filter(({ technologies }) =>
          technologies.includes(technology)
        )
      : ClientProjects.filter(({ technologies }) =>
          technologies.some((element) => {
            return element.toLowerCase() === url[3].toLowerCase();
          })
        );

    if (demo.length) {
      setIsAvailable(true);
      setTechnology(url[3]);
      size = demo.length < 4 ? 12 / demo.length : 4;
    }

    setDemoProjects(demo);
    setGridSize(Number(size));
  }, [technology, setTechnology]);

  return (
    <Wrapper>
      <Container maxWidth="md">
        <BackButton />
        <Grid container>
          {isAvailable ? (
            <ClientProjectItem data={demoProjects} gridSize={gridSize} />
          ) : (
            <p>Content coming soon...</p>
          )}
        </Grid>
      </Container>
    </Wrapper>
  );
};

export default ClientProjectPage;
