import React, { FC } from 'react';
import styled from 'styled-components/macro';

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

const StyledSubContent = styled.div`
  margin-bottom: 40px;
  .title {
    font-size: 24px;
    font-weight: 700;
    padding-bottom: 14px;
  }
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
      color: #e6236d;
      font-weight: 700;
    }
    font-weight: 300;
    padding-bottom: 12px;
  }
  a {
    color: inherit;
    border-bottom: 1px solid #e6236d;
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

export const SubContent: FC<SubContentType> = ({ contentData }) => (
  <>
    {contentData.map(({ name, intro, data }) => (
      <StyledSubContent key={name}>
        <div className='title'>{name}</div>
        {intro && <div className='intro'>{intro}</div>}
        {data.map(({ name, description }) => (
          <div className={'content'} key={name}>
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
    <div className='title'>Use Cases</div>
    {contentData.map(({ name, description, imageUrl }) => (
      <div className={'content'} key={name}>
        <div>{name}</div>
        <div
          dangerouslySetInnerHTML={{
            __html: description.replace(
              /href=/g,
              'rel="noreferrer" target="_blank" href='
            ),
          }}
        />
        <img src={imageUrl} width={'100%'} alt={'demo'} />
      </div>
    ))}
  </StyledSubContent>
);
