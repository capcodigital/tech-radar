import React, { FC } from "react";
import { GridSize } from "@material-ui/core";
import ProjectTechnologyLink from "../ClinetProjectLink/ProjectTechnologyLink";
import images from "../../images/ClientProjects";
import StyledGrid from "./styles/";

type ProjectItemProps = {
  data: Array<{
    project: string;
    clientName: string;
    clientImage: string;
    description: string;
    technologies: Array<string>;
  }>;
  gridSize: number;
};

const ClientProjectItem: FC<ProjectItemProps> = ({ data, gridSize }) => (
  <>
    {data.map(
      (
        { project, clientName, clientImage, description, technologies },
        index
      ) => (
        <StyledGrid
          item
          xs={Number(gridSize) as GridSize}
          key={`project-${index}`}
          data-test-id={`project-${index}`}
        >
          <div>
            <div>
              <img
                height={80}
                src={(images as any)[clientImage]}
                alt="computer screen"
              />
            </div>
            <div>{project}</div>
            <div>{clientName}</div>
            <div>{description}</div>
            <div>
              {technologies.map((tech: string, idx: number) => (
                <span key={`tech-${idx}`}>
                  <ProjectTechnologyLink techName={tech} />
                </span>
              ))}
            </div>
          </div>
        </StyledGrid>
      )
    )}
  </>
);

export default ClientProjectItem;
