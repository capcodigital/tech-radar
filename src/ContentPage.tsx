import React, { useContext, useEffect, useState } from 'react';
import { RadarContextType, RadarContext } from './RadarContextProvider';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import { icons, technologies, technologyList } from './data/data';
import images from './images';
import techContent from './data/content';
import { SubContent, ExampleContent } from './Content';
import { TechContentType } from './data/content';
import BackLink from './BackLink';
type WrapperProps = {
  category: string;
};

const Wrapper = styled.div<WrapperProps>`
  position: relative;
  width: 100%;
  display: flex;
  padding-left: 90px;
  margin-top: 50px;
  .background {
    opacity: 0.12;
    position: absolute;
    top: -80px;
    left: -300px;
  }
  img {
    margin: auto;
  }
  hr {
    border: 0;
    height: 1px;
    background-image: linear-gradient(
      to right,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.75),
      rgba(255, 255, 255, 0)
    );
  }
  .conent-nav {
  }
`;

const StyledContent = styled.div`
  text-align: left;
  width: 1060px;
  margin: auto;
  position: relative;
  :first-child {
    display: inline-block;
  }
`;

const Title = styled.div`
  font-size: 120px;
  font-weight: 700;
  text-align: left;
  display: inline-block;
  vertical-align: middle;
  padding-right: 50px;
`;

const ContentBody = styled.div`
  width: 700px;
  margin: 0 auto;
  font-family: poppins, sans-serif;
  .content-intro {
    font-size: 24px;
    margin-bottom: 34px;
    a {
      color: inherit;
      border-bottom: 1px solid #e6236d;
    }
  }
`;
type ContentNavButtonProps = {
  align: string;
};
const ContentNavButton = styled.div<ContentNavButtonProps>`
  margin-top: 75px;
  float: ${({ align }) => align};
  div:first-child {
    font-family: poppins, sans-serif;
    font-size: 19px;
    font-weight: 300;
    opacity: 0.5;
  }
  a:nth-child(2) {
    :hover {
      text-decoration: underline;
    }
    font-family: bebas-neue-pro, sans-serif;
    font-size: 59px;
    color: inherit;
  }
`;
const getNextItem = (currentItem: string) => {
  const currentIndex = technologyList.indexOf(currentItem);
  const nextIndex = (currentIndex + 1) % technologyList.length;
  return technologyList[nextIndex];
};
const getPrevItem = (currentItem: string) => {
  const currentIndex = technologyList.indexOf(currentItem);
  const nextIndex = (currentIndex - 1) % technologyList.length;
  return technologyList[nextIndex];
};

const CategoryPage = () => {
  const { category, technology, setCategory, setTechnology } =
    useContext<RadarContextType>(RadarContext);

  const [content, setContent] = useState<TechContentType | null>(null);
  const [imageLink, setImageLink] = useState('');

  useEffect(() => {
    let url = window.location.pathname.split('/');

    //search for the category and tech name in technologies data
    let categoriesAndTechnologies = technologies.filter(
      ({ categoryName }) => categoryName.toLowerCase() === url[2]
    )[0];

    let technologyFromUrl = categoriesAndTechnologies.technologies.filter(
      (tech: string) => tech.toLowerCase() === url[3].replace(/-/g, ' ')
    )[0];

    let categoryFromUrl = categoriesAndTechnologies.categoryName;

    let icon = icons.filter(
      (el: any) => el.name.toLowerCase() === technologyFromUrl.toLowerCase()
    )[0]!;

    // let content = techContent.filter(
    //   ({ technology }) => technology === technologyFromUrl
    // )[0];

    setImageLink(icon.link);
    setTechnology(technologyFromUrl);
    setCategory(categoryFromUrl);
    // setContent(content);
    setContent(techContent[0]);

    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  }, [technology, category, setCategory, setTechnology]);

  return (
    <>
      <Wrapper category={category}>
        <img
          className='background'
          src={(images as any)[category]}
          alt={category}
          width={650}
          height={650}
        />
        {content && (
          <StyledContent>
            <div>
              <BackLink category={category} />
              <Title>{technology}</Title>
              <a href={content.docsLink} target='_blank'>
                <svg width={80} height={80}>
                  <circle cx={40} cy={40} r={40} fill={'white'} />
                  <image
                    x={15}
                    y={15}
                    href={imageLink}
                    height={50}
                    width={50}
                  />
                </svg>
              </a>
              <ContentBody>
                <div
                  className='content-intro'
                  dangerouslySetInnerHTML={{ __html: content.intro }}
                />
                <SubContent contentData={content.content} />
                <ExampleContent contentData={content.examples} />
                <hr />
                <div className='content-nav'>
                  <ContentNavButton
                    align={'left'}
                    onClick={() => setTechnology(getPrevItem(technology))}
                  >
                    <div>Previous</div>
                    <Link
                      to={`/technology/${category}/${getPrevItem(
                        technology
                      ).replace(/\s/g, '-')}`.toLowerCase()}
                    >
                      {getPrevItem(technology)}
                    </Link>
                  </ContentNavButton>
                  <ContentNavButton
                    align={'right'}
                    onClick={() => setTechnology(getNextItem(technology))}
                  >
                    <div>Next</div>
                    <Link
                      to={`/technology/${category}/${getNextItem(
                        technology
                      ).replace(/\s/g, '-')}`.toLowerCase()}
                    >
                      {getNextItem(technology)}
                    </Link>
                  </ContentNavButton>
                </div>
              </ContentBody>
            </div>
          </StyledContent>
        )}
      </Wrapper>
    </>
  );
};

export default CategoryPage;
