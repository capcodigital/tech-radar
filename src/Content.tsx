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
  contentData:  Array<{ name: string; description: string }>;
  
};

const StyledSubContent = styled.div`
  font-size: 18px;
  margin-bottom: 40px;
  .title {
    font-weight: 700;
    padding-bottom: 14px;
  }
  .intro {
    font-weight: 300;
    padding-bottom: 14px;
  }

  .content {
    div:first-child {
      padding-bottom: 8px;
      color: #e6236d;
    }
    div:nth-child(2) {
      padding-left: 14px;
    }
    padding-left: 28px;
    padding-bottom: 12px;
  }
`;

export const SubContent: FC<SubContentType> = ({ contentData }) => {
  console.log(contentData);
  return (
    <>
      {contentData.map(({ name, intro, data }) => (
        <StyledSubContent key={name}>
          <div className='title'>{name}</div>
          {intro && <div className='intro'>{intro}</div>}
          {data.map(({ name, description }) => (
            <div className={'content'} key={name}>
              <div>{name}</div>
              <div>{description}</div>
            </div>
          ))}
        </StyledSubContent>
      ))}
    </>
  );
};

export const ExampleContent: FC<ExampleContentType> = ({ contentData }) => {
  console.log(contentData);
  return (
    <>
      
    </>
  );
};
