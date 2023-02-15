import ProjectTechnologyLink from "../ProjectPageLink/ProjectTechnologyLink";
import StyledWrapper from "./styles";
import externallink from "images/externallink.svg";
import { technologyList } from "data/data";
import Grid from "@mui/material/Grid";

type ProjectItemProps = {
  data: Array<{
    project: string;
    clientName: string;
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
        { project, clientName, description, technologies, githubLink },
        index
      ) => (
        <StyledWrapper
          key={`project-${index}`}
          data-test-id={`project-${index}`}
        >
          <div>
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
            <div
              className="text"
              dangerouslySetInnerHTML={{
                __html: description.replace(
                  /href=/g,
                  'rel="noreferrer" target="_blank" href='
                ),
              }}
            />
            <div className="heading">Key Technologies</div>
            <div className="technologies">
              <Grid container alignItems="center" textAlign="center">
                {technologies.map(
                  (tech: string, idx: number) =>
                    includesValue(tech) && (
                      <Grid item xs={3} md={2} key={`tech-${idx}`}>
                        <ProjectTechnologyLink techName={tech} />
                      </Grid>
                    )
                )}
              </Grid>
            </div>
          </div>
        </StyledWrapper>
      )
    )}
  </>
);

export default ProjectItem;
