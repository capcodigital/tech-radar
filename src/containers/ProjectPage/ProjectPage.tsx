import React, { useContext, useEffect, useState } from "react";
import {
  RadarContextType,
  RadarContext,
} from "../../components/RadarContextProvider/RadarContextProvider";
import ProjectItem from "../../components/ProjectItem/ProjectItem";
import { icons } from "../../data/data";
import ClientProjects from "../../data/projects/ClientProjects";
import { Container } from "@material-ui/core";
import { BackButton } from "../../components/BackLink/BackLink";
import Tabs from "../../components/Tabs/Tabs";
import { Wrapper, ContentBody, Title } from "./styles/";
import Axios from "axios";

type Project = {
  project: string;
  clientName: string;
  clientImage: string;
  description: string;
  technologies: Array<string>;
};

const ProjectPage = () => {
  const { technology, setTechnology } =
    useContext<RadarContextType>(RadarContext);

  const [demoProjects, setDemoProjects] = useState<Project[]>([]);
  const [clientProjectCount, setClientProjectCount] = useState<number>(0);
  const [ossProjectCount, setOssProjectCount] = useState<number>(0);
  const [isAvailable, setIsAvailable] = useState<boolean>(false);
  const [iconRef, setIconRef] = useState<string>("");
  const [ossProjects, setOssProjects] = useState<any>([]);

  const fetchOssProject = async (technology: string) => {
    const response = await Axios.get(
      "https://api.github.com/orgs/capcodigital/repos"
    );
    const data = await response.data;
    const results = data.filter(({ topics }: any) =>
      topics.includes(technology)
    );
    const picked = [] as any[];

    results.forEach((result: any, idx: number) => {
      picked.push(
        (({ name, description, html_url, topics }) => ({
          name,
          description,
          html_url,
          topics,
        }))(result)
      );
      picked[idx]["project"] = picked[idx]["name"].replace("-", " ");
      delete picked[idx]["name"];
      picked[idx]["githubLink"] = picked[idx]["html_url"];
      delete picked[idx]["html_url"];
      picked[idx]["technologies"] = picked[idx]["topics"];
      delete picked[idx]["topics"];

      let refactoredTechnologies = picked[idx]["technologies"].flatMap(
        (technology: any) => technology.replaceAll("-", " ")
      );

      picked[idx]["technologies"] = refactoredTechnologies;
    });
    setOssProjects(picked);
    setOssProjectCount(results.length);
  };

  useEffect(() => {
    let demo: Project[] = [];
    let url = window.location.pathname.split("/");

    let count = 0;
    let iconResult = icons.filter(
      (icon: any) => icon.name.toLowerCase() === url[3]
    )[0];
    let ref = iconResult ? iconResult.link : "";
    setIconRef(ref);

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
      count = demo.length;
    }
    fetchOssProject(url[3]);
    setDemoProjects(demo);
    setClientProjectCount(Number(count));
  }, [technology, setTechnology]);

  return (
    <Wrapper>
      <Container maxWidth="md">
        <BackButton />
        <Title>Projects</Title>
        <svg className="tech-icon" viewBox={"0 0 80 80"}>
          <circle cx={40} cy={40} r={40} fill={"white"} />
          <image x={15} y={15} href={iconRef} height={50} width={50} />
        </svg>
        <ContentBody>
          <Tabs
            ossProjectCount={ossProjectCount}
            clientProjectCount={clientProjectCount}
            panelOne={
              isAvailable ? (
                <ProjectItem data={demoProjects} />
              ) : (
                <p>Content coming soon...</p>
              )
            }
            panelTwo={
              ossProjectCount > 0 ? (
                <ProjectItem data={ossProjects} />
              ) : (
                <p>Content coming soon...</p>
              )
            }
          ></Tabs>
        </ContentBody>
      </Container>
    </Wrapper>
  );
};

export default ProjectPage;
