import React, { FC } from "react";
import ProjectTechnologyLink from "../ProjectPageLink/ProjectTechnologyLink";
import images from "../../images/ClientProjects";
import StyledWrapper from "./styles";
import externallink from "../../images/externallink.svg";

type ProjectItemProps = {
  data: Array<{
    project: string;
    clientName: string;
    clientImage: string;
    description: string;
    technologies: Array<string>;
    githubLink?: string;
    projectRepoName?: string;
    projectImageUrl?: string;
  }>;
};

const defaultImage = (event: any) =>
  (event.target.src = require("../../images/ClientProjects/CL2.png"));

const ProjectItem: FC<ProjectItemProps> = ({ data }) => (
  <>
    {data.map(
      (
        {
          project,
          clientName,
          clientImage,
          description,
          technologies,
          githubLink,
          projectRepoName,
          projectImageUrl,
        },
        index
      ) => (
        <StyledWrapper
          key={`project-${index}`}
          data-test-id={`project-${index}`}
        >
          <div>
            <div className="project-image-wrapper">
              {
                <img
                  className="project-image"
                  src={
                    clientImage ? (images as any)[clientImage] : projectImageUrl
                  }
                  onError={defaultImage}
                  alt="computer screen"
                />
              }
            </div>
            <div className="row-wrapper">
              <div className="heading">{project}</div>
              {githubLink && (
                <a href={githubLink} className="link">
                  GitHub Repo{" "}
                  <img src={externallink} alt="" height={20} width={20} />
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
