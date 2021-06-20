import React, { useContext, useEffect, useState } from "react";
import { RadarContextType, RadarContext } from "./RadarContextProvider";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import CategoryRadar from "./CategoryRadar";
import Footer from "./Footer";
import Grid from "@material-ui/core/Grid";
import MobileRadarBackground from "./MobileRadarBackground";
import StyledButton from "./StyledButton";
import { data, technologies, categoryList } from "./data/data";
import images from "./images";
import styled from "styled-components/macro";

type WrapperProps = {
  category: string;
};

const SubheaderStyle = `
  font-size: 32px;
  font-weight: 700;
  text-align: left;
  display: inline-block;
  vertical-align: middle;
`;

const Wrapper = styled.div<WrapperProps>`
  width: 100%;
  display: flex;
  position: relative;
  .MuiGrid-container {
    padding-left: 90px;
  }
  .grid-wrapper {
    position: relative;
    width: 100%;
    float: left;
    margin-bottom: 50px;
    .MuiGrid-container {
      text-align: left;
      width: 790px;
      margin: auto;
    }
  }
  .categories-grid {
    display: flex;
    span {
      padding-right: 20px;
    }
  }
  img.background {
    opacity: 0.12;
    position: absolute;
    top: -80px;
    left: -300px;
  }
  hr {
    background: white;
    margin: 0;
    width: 20px;
    border-width: 5px;
    margin-bottom: 15px;
  }
  .title {
    font-size: 32px;
  }
  .technology {
    padding-top: 12px;
    font-family: poppins, sans-serif;
    font-size: 19px;
    font-weight: 300;
    transform all 3s;
    transition: 0.3s;
    svg.MuiSvgIcon-root {
      font-size: 12px;
      margin-left: 10px;
    }
    a {
      color: inherit;
      :hover {
        border-bottom: 1px solid white;   
      }
    }
    &.hovered {
      color: #e6236d;
    }
  }
  .small-screen {
    display: none;
  }
  .subheader {
    ${SubheaderStyle}
    margin: 100px 0 20px 0;
  }
  .subheader-mobile{
    display: none;
  }
  .mobile-category{
    display: none;
  }

  @media screen and (max-width: 1000px) {
    text-align: left;
    .mobile-category {
      display: block;
      margin-bottom: 100px;
    }
    .grid-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .first-row-wrapper {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      margin-bottom: 50px;
      div:first-child {
        padding-right: 50px;
      }
    }
    .category-icon {
      width: 64px;
      height: 64px;
    }
    .technology {
      font-size: 18px;
    }
    .title {
      font-size: 30px;
    }
    .subheader-mobile {
      ${SubheaderStyle}
      margin: 50px 0 20px 0;
    }
    img.background,
    .desktop-grid,
    .large-screen {
      display: none;
    }
  }
`;

const Title = styled.div`
  font-size: 120px;
  margin-bottom: 20px;
  font-weight: 700;
  text-align: left;
  display: inline-block;
  vertical-align: middle;
  padding-right: 20px;
`;

const MobileTitle = styled.div`
  font-size: 52px;
  padding-right: 20px;
  font-weight: 700;
  text-align: left;
  display: inline-block;
  vertical-align: middle;
  margin: 20px 0 20px 0;
`;

type ContentType = {
  preferred: Array<{ name: string; link: string }>;
  skilled: Array<{ name: string; link: string }>;
  scaling: Array<{ name: string; link: string }>;
};

const CategoryPage = () => {
  const { category, setCategory, setTechnology } =
    useContext<RadarContextType>(RadarContext);

  const [hovered, setHovered] = useState("");

  const [content, setContent] = useState<{
    name: string;
    data: ContentType;
  } | null>(null);

  useEffect(() => {
    let url = window.location.pathname.split("/");
    let categoriesAndTechnologies =
      technologies.filter(
        ({ categoryName }) => categoryName.toLowerCase() === url[2]
      )[0] || technologies[0];

    let categoryName = categoriesAndTechnologies.categoryName;

    setCategory(categoryName);
    setContent(data.filter((item: any) => item.name === categoryName)[0]);

    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }, [category, setCategory]);

  const buttonText = categoryList.filter((name: string) => name !== category);

  return (
    <>
      {content && (
        <Wrapper category={category}>
          <img
            className="background"
            src={(images as any)[category]}
            alt={category}
            width={650}
            height={650}
          />
          <MobileRadarBackground />
          <div className="grid-wrapper">
            <div className="mobile-category">
              <MobileTitle>{content.name}</MobileTitle>
              <img
                className="category-icon"
                src={(images as any)[category]}
                alt={category}
                width={126}
                height={126}
              />
              <div className="first-row-wrapper">
                <div>
                  <hr />
                  <div className="title">Preferred</div>
                  {content.data.preferred.map(({ name }) => (
                    <div
                      key={name}
                      className={`technology ${hovered === name && "hovered"}`}
                      onClick={() => setTechnology(name)}
                      data-testid={`preferred-${name}`}
                    >
                      <Link
                        to={`/technology/${category.toLowerCase()}/${name
                          .replace(" ", "-")
                          .toLowerCase()}`}
                      >
                        {name}
                      </Link>
                      <ArrowForwardIosIcon />
                    </div>
                  ))}
                </div>
                <div>
                  <hr />
                  <div className="title">Skilled</div>
                  {content.data.skilled.map(({ name }) => (
                    <div
                      key={name}
                      className={`technology ${hovered === name && "hovered"}`}
                      onClick={() => setTechnology(name)}
                      data-testid={`skilled-${name}`}
                    >
                      <Link
                        to={`/technology/${category.toLowerCase()}/${name
                          .replace(" ", "-")
                          .toLowerCase()}`}
                      >
                        {name}
                      </Link>
                      <ArrowForwardIosIcon />
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <hr />
                <div className="title">Scaling</div>
                {content.data.scaling.map(({ name }) => (
                  <div
                    key={name}
                    className={`technology ${hovered === name && "hovered"}`}
                    onClick={() => setTechnology(name)}
                    data-testid={`scaling-${name}`}
                  >
                    <Link
                      to={`/technology/${category.toLowerCase()}/${name
                        .replace(" ", "-")
                        .toLowerCase()}`}
                    >
                      {name}
                    </Link>
                    <ArrowForwardIosIcon />
                  </div>
                ))}
              </div>
              <div>
                <div className="subheader-mobile">Other Categories</div>
                <span>
                  {buttonText.slice(0, 4).map((text: string) => (
                    <StyledButton
                      key={text}
                      name={text}
                      onClick={() => setCategory(text)}
                    />
                  ))}
                </span>
                <span>
                  {buttonText.slice(4, 7).map((text: string) => (
                    <StyledButton
                      key={text}
                      name={text}
                      onClick={() => setCategory(text)}
                    />
                  ))}
                </span>
              </div>
            </div>

            <Grid container className="desktop-grid">
              <Grid item xs={12}>
                <Title>{content.name}</Title>
                <img
                  className="category-icon"
                  src={(images as any)[category]}
                  alt={category}
                  width={126}
                  height={126}
                />
              </Grid>
              <Grid item xs={4} className="large-screen">
                <hr />
                <div className="title">Preferred</div>
                {content.data.preferred.map(({ name }) => (
                  <div
                    key={name}
                    className={`technology ${hovered === name && "hovered"}`}
                    onClick={() => setTechnology(name)}
                  >
                    <Link
                      to={`/technology/${category.toLowerCase()}/${name
                        .replace(" ", "-")
                        .toLowerCase()}`}
                    >
                      {name}
                    </Link>
                    <ArrowForwardIosIcon />
                  </div>
                ))}
              </Grid>
              <Grid item xs={4} className="large-screen">
                <hr />
                <div className="title">Skilled</div>
                {content.data.skilled.map(({ name }) => (
                  <div
                    key={name}
                    className={`technology ${hovered === name && "hovered"}`}
                    onClick={() => setTechnology(name)}
                  >
                    <Link
                      to={`/technology/${category.toLowerCase()}/${name
                        .replace(" ", "-")
                        .toLowerCase()}`}
                    >
                      {name}
                    </Link>
                    <ArrowForwardIosIcon />
                  </div>
                ))}
              </Grid>
              <Grid item xs={4} className="large-screen">
                <hr />
                <div className="title">Scaling</div>
                {content.data.scaling.map(({ name }) => (
                  <div
                    key={name}
                    className={`technology ${hovered === name && "hovered"}`}
                    onClick={() => setTechnology(name)}
                  >
                    <Link
                      to={`/technology/${category.toLowerCase()}/${name
                        .replace(" ", "-")
                        .toLowerCase()}`}
                    >
                      {name}
                    </Link>
                    <ArrowForwardIosIcon />
                  </div>
                ))}
              </Grid>

              <div className="subheader">Other Categories</div>
              <Grid className="categories-grid" item xs={12}>
                <span>
                  {buttonText.slice(0, 4).map((text: string) => (
                    <StyledButton
                      key={text}
                      name={text}
                      onClick={() => setCategory(text)}
                    />
                  ))}
                </span>
                <span>
                  {buttonText.slice(4, 7).map((text: string) => (
                    <StyledButton
                      key={text}
                      name={text}
                      onClick={() => setCategory(text)}
                    />
                  ))}
                </span>
              </Grid>
            </Grid>
          </div>
          <CategoryRadar data={content.data} setHovered={setHovered} />
        </Wrapper>
      )}
      <Footer />
    </>
  );
};

export default CategoryPage;
