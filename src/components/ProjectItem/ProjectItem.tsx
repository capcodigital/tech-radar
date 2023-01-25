import ProjectTechnologyLink from "../ProjectPageLink/ProjectTechnologyLink";
import images from "images/ClientProjects";
import StyledWrapper from "./styles";
import externallink from "images/externallink.svg";
import { technologyList } from "data/data";

type ProjectItemProps = {
  data: Array<{
    project: string;
    clientName: string;
    clientImage: string;
    description: string;
    technologies: Array<string>;
    githubLink?: string;
  }>;
};

const includesValue = (keyTech: string) =>
  technologyList.some((tech) => {
    return tech.toLowerCase() === keyTech.toLowerCase();
  });

const ProjectItem = ({ data }: ProjectItemProps) => (
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
        },
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
                src={
                  clientImage
                    ? (images as { [key: string]: string })[clientImage]
                    : require("images/ClientProjects/CL2.png")
                }
                alt="computer screen"
              />
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
              {technologies.map(
                (tech: string, idx: number) =>
                  includesValue(tech) && (
                    <span key={`tech-${idx}`}>
                      <ProjectTechnologyLink techName={tech} />
                    </span>
                  )
              )}
            </div>
          </div>
        </StyledWrapper>
      )
    )}
  </>
);

export default ProjectItem;
