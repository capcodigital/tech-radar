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

/**
 * It takes in an array of objects, and maps over each object, and maps over each object's data array,
 * and returns a styled div with a title, intro, and accordion component
 * @param  - `contentData` - an array of objects that contain the following properties:
 * @returns A styled component that is a div with a class of subcontent.
 */
export const SubContent = ({ contentData }: SubContentType) => {
  return (
    <>
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
            <div className="content" key={`data-content-${idx}`}>
              {name ? (
                <AccordionComponent
                  name={name}
                  description={capitalizeFirstCharacter(description)}
                />
              ) : (
                <div
                  dangerouslySetInnerHTML={{
                    __html: description.replace(
                      /href=/g,
                      'rel="noreferrer" target="_blank" href='
                    ),
                  }}
                />
              )}
            </div>
          ))}
        </StyledSubContent>
      ))}
    </>
  );
};

/* A React component that takes in contentData as a prop and returns a styled subcontent component. */
export const ExampleContent = ({ contentData }: ExampleContentType) => (
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

/**
 * It takes in an array of strings and returns a styled list of links
 * @param  - `contentData` - the data that will be displayed in the content
 */
export const ReferenceContent = ({ contentData }: ReferenceContentType) => (
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
