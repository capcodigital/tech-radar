import React, { useContext, useEffect, useState } from "react";
import {
  RadarContextType,
  RadarContext,
} from "../../components/RadarContextProvider/RadarContextProvider";
import BackLink from "../../components/BackLink/BackLink";
import { icons, technologies } from "../../data/data";
import {
  SubContent,
  ExampleContent,
  ReferenceContent,
} from "../../components/Content/Content";
import { TechContentType } from "../../data/content";
import techContent from "../../data/content/index";
import images from "../../images";
import {
  Wrapper,
  ContentWrapper,
  ContentBody,
  Title,
  Divider,
} from "./styles/";
import ContentNavButton from "../../components/ComponentNavButton/ContentNavButton";
import { getNextItem, getPrevItem } from "../../helpers/helpers";
import ClientProjectLink from "../../components/ProjectPageLink/ProjectPageLink";

const CategoryPage = () => {
  const { category, technology, setCategory, setTechnology } =
    useContext<RadarContextType>(RadarContext);
  const [content, setContent] = useState<TechContentType | null>(null);
  const [imageLink, setImageLink] = useState("");

  const handleClick = (categoryName: string, techName: string) => {
    setCategory(categoryName);
    setTechnology(techName);
  };

  useEffect(() => {
    let url = window.location.pathname.split("/");

    // Find category and tech name in technologies data
    let categoriesAndTechnologies =
      technologies.filter(
        ({ categoryName }) =>
          url[2] && categoryName.toLowerCase() === url[2].replace(/-/g, " ")
      )[0] || technologies[0];

    let technologyFromUrl =
      categoriesAndTechnologies.technologies.filter(
        (tech: string) =>
          url[3] && tech.toLowerCase() === url[3].replace(/-/g, " ")
      )[0] || technologies[0].technologies[0];

    let categoryFromUrl = categoriesAndTechnologies.categoryName;

    let icon = icons.filter(
      (el: any) => el.name.toLowerCase() === technologyFromUrl.toLowerCase()
    )[0]!;
    // Filter the content for specific tech
    let content = techContent.filter(
      ({ technology }) => technology === technologyFromUrl
    )[0];

    setContent(content);
    setImageLink(icon.link);
    setTechnology(technologyFromUrl);
    setCategory(categoryFromUrl);

    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }, [technology, category, setCategory, setTechnology]);

  let nextTechnology = getNextItem(technology);

  let previousTechnology = getPrevItem(technology);

  let filteredNext =
    technology &&
    technologies.filter(({ technologies }) =>
      technologies.includes(nextTechnology)
    )[0];
  let nextCategory = filteredNext ? filteredNext.categoryName : "Devops";

  let filteredPrev =
    technology &&
    technologies.filter(({ technologies }) =>
      technologies.includes(previousTechnology)
    )[0];
  let previousCategory = filteredPrev ? filteredPrev.categoryName : "Mobile";

  return (
    <Wrapper category={category}>
      <img
        className="background"
        src={(images as any)[category]}
        alt={category}
        width={650}
        height={650}
      />
      {content && (
        <ContentWrapper>
          <BackLink category={category} />
          <div className="content-head">
            <div>
              <Title className={`title-${technology}`}>{technology}</Title>
              <a href={content.docsLink} target="_blank" rel="noreferrer">
                <svg className="icon" viewBox={"0 0 80 80"}>
                  <circle cx={40} cy={40} r={40} fill={"white"} />
                  <image
                    x={15}
                    y={15}
                    href={imageLink}
                    height={50}
                    width={50}
                  />
                </svg>
              </a>
            </div>
            <ClientProjectLink
              onClick={() => handleClick(category, technology)}
            />
          </div>
          <ContentBody>
            <div
              className="content-intro"
              dangerouslySetInnerHTML={{ __html: content.intro }}
            />
            <SubContent contentData={content.content} />
            {content.examples.length > 0 && (
              <ExampleContent contentData={content.examples} />
            )}

            {content.reference.length > 0 && (
              <ReferenceContent contentData={content.reference} />
            )}

            <Divider />
            <ContentNavButton
              onClick={() => setTechnology(previousTechnology)}
              previousTechnology={previousTechnology}
              nextTechnology={nextTechnology}
              previousCategory={previousCategory}
              nextCategory={nextCategory}
              next={false}
            />
            <ContentNavButton
              onClick={() => setTechnology(nextTechnology)}
              previousTechnology={previousTechnology}
              nextTechnology={nextTechnology}
              previousCategory={previousCategory}
              nextCategory={nextCategory}
              next={true}
            />
          </ContentBody>
        </ContentWrapper>
      )}
    </Wrapper>
  );
};

export default CategoryPage;
