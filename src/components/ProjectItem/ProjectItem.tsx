import React, { FC } from "react";
import ProjectTechnologyLink from "../ClinetProjectLink/ProjectTechnologyLink";
import images from "../../images/ClientProjects";
import StyledWrapper from "./styles";

type ProjectItemProps = {
  data: Array<{
    project: string;
    clientName?: string;
    clientImage: string;
    description: string;
    technologies: Array<string>;
  }>;
  githubLink?: string;
};

const ProjectItem: FC<ProjectItemProps> = ({ data, githubLink }) => (
  <>
    {data.map(
      (
        { project, clientName, clientImage, description, technologies },
        index
      ) => (
        <StyledWrapper
          key={`project-${index}`}
          data-test-id={`project-${index}`}
        >
          <div>
            <div className="project-image-wrapper">
              <img
                className="project-image"
                src={(images as any)[clientImage]}
                alt="computer screen"
              />
            </div>
            <div className="row-wrapper">
              <div className="heading">{project}</div>
              {githubLink && (
                <a href="#" className="link">
                  Github Link
                </a>
              )}
              {clientName ? (
                <div className="project-tag">{clientName}</div>
              ) : (
                <div className="project-tag">Internal</div>
              )}
            </div>
            <div className="text">{description}</div>
            <div className="heading">Key Technologies</div>
            <div className="technologies">
              {technologies.map((tech: string, idx: number) => (
                <span key={`tech-${idx}`}>
                  <ProjectTechnologyLink techName={tech} />
                </span>
              ))}
            </div>
          </div>
        </StyledWrapper>
      )
    )}
  </>
);

export default ProjectItem;
