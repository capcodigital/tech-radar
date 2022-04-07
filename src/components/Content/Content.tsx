import React, { FC } from "react";
import AccordionComponent from "../Accordion/Accordion";
import { StyledSubContent, Title, SourceLink } from "./styles";
import { capitalizeFirstCharacter } from "../../helpers/helpers";

type SubContentType = {
  contentData: Array<{
    name: string;
    intro: string;
    data: Array<{ name: string; description: string }>;
  }>;
};

type ExampleContentType = {
  contentData: Array<{ name: string; description: string; imageUrl?: string }>;
};

type ReferenceContentType = {
  contentData: Array<string>;
};

export const SubContent: FC<SubContentType> = ({ contentData }) => {
  return (
    <>
      {/* <DropDown contentData={contentData} /> */}
      {contentData.map(({ name, intro, data }, idx) => (
        <StyledSubContent key={`subcontent-${idx}`}>
          {name && <Title>{name}</Title>}
          {intro && (
            <div
              className="intro"
              dangerouslySetInnerHTML={{
                __html: intro,
              }}
            />
          )}
          {data.map(({ name, description }, idx) => (
            <div className={"content"} key={`data-content-${idx}`}>
              <AccordionComponent
                name={name}
                description={capitalizeFirstCharacter(description)}
              />
            </div>
          ))}
        </StyledSubContent>
      ))}
    </>
  );
};

export const ExampleContent: FC<ExampleContentType> = ({ contentData }) => (
  <StyledSubContent>
    <Title>Use Cases</Title>
    {contentData.map(({ name, description, imageUrl }) => (
      <div className={"content"} key={name}>
        <div>{name}</div>
        <div
          dangerouslySetInnerHTML={{
            __html: description.replace(
              /href=/g,
              'rel="noreferrer" target="_blank" href='
            ),
          }}
        />
        {imageUrl && <img src={imageUrl} width={"100%"} alt={"demo"} />}
      </div>
    ))}
  </StyledSubContent>
);

export const ReferenceContent: FC<ReferenceContentType> = ({ contentData }) => (
  <StyledSubContent>
    <Title>Sources</Title>
    {contentData.map((link, idx) => (
      <div key={`source-${idx}`} className="content">
        <SourceLink href={link} rel="noreferrer" target="_blank">
          {link}
        </SourceLink>
      </div>
    ))}
  </StyledSubContent>
);
