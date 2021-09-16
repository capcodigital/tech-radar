import React, { FC } from "react";
import styled from "styled-components/macro";

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

const StyledSubContent = styled.div`
  margin-bottom: 40px;

  .intro {
    font-size: 18px;
    font-weight: 500;
    padding-bottom: 14px;
  }

  .content {
    font-size: 16px;

    div:first-child {
      font-size: 18px;
      padding-bottom: 8px;
      color: ${({ theme }) => theme.pink};
      font-weight: 700;
    }
    font-weight: 300;
    padding-bottom: 12px;
  }
  a {
    color: inherit;
    border-bottom: 1px solid ${({ theme }) => theme.pink};
  }
  img {
    padding: 20px 0;
  }
  @media screen and (max-width: 1000px) {
    margin-bottom: 20px;
    .title {
      font-size: 20px;
    }
    .intro,
    .content {
      font-size: 18px;
    }
  }
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 700;
  padding-bottom: 14px;
`;

const SourceLink = styled.a`
  color: inherit;
  border-bottom: none!;
  font-size: 16px;
  :hover {
    color: ${({ theme }) => theme.pink};
    border-bottom: 1px solid ${({ theme }) => theme.pink};
  }
`;

export const SubContent: FC<SubContentType> = ({ contentData }) => (
  <>
    {contentData.map(({ name, intro, data }) => (
      <StyledSubContent key={name}>
        {name && <Title>{name}</Title>}
        {intro && (
          <div
            className="intro"
            dangerouslySetInnerHTML={{
              __html: intro,
            }}
          />
        )}
        {data.map(({ name, description }) => (
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
          </div>
        ))}
      </StyledSubContent>
    ))}
  </>
);

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
