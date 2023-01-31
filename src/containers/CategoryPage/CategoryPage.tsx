import { useContext, useEffect, useState } from "react";
import {
  RadarContextType,
  RadarContext,
} from "components/RadarContextProvider/RadarContextProvider";
import CategoryRadar from "components/CategoryRadar/CategoryRadar";
import Grid from "@mui/material/Grid";
import MobileRadarBackground from "components/MobileRadarBackground/MobileRadarBackground";
import Button from "components/Button/Button";
import CategoryListItem from "components/CategoryListItem/CategoryListItem";
import { BackButton } from "components/BackLink/BackLink";
import { data, technologies, categoryList, techType } from "data/data";
import images from "images";
import styled from "styled-components/macro";
import { useLocation } from "react-router-dom";
import { Box } from "@mui/material";

/**
 * WrapperProps is an object with a single property, category, which is a string.
 * @property {string} category - The category of the component.
 */
type WrapperProps = {
  category: string;
};

/* It's a template literal. */
const SubheaderStyle = `
  font-size: 32px;
  font-weight: 700;
  text-align: left;
  display: inline-block;
  vertical-align: middle;
`;

/* It's a template literal. */
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
      margin-top: 40px;
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
  .title {
    font-size: 32px;
  }
  .subheader {
    ${SubheaderStyle}
    margin: 100px 0 20px 0;
  }
  .small-screen .subheader-mobile,
  .mobile-category {
    display: none;
  }

  @media screen and (max-width: 1000px) {
    text-align: left;
    .mobile-category {
      display: block;
      margin: auto;
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

/* It's a template literal. */
const Title = styled.div`
  font-size: 90px;
  font-weight: 700;
  text-align: left;
  display: inline-block;
  vertical-align: middle;
  padding-right: 30px;
`;

/* It's a template literal. */
const MobileTitle = styled.div`
  width: 210px;
  font-size: 52px;
  font-weight: 700;
  text-align: left;
  padding-right: 20px;
  vertical-align: middle;
  display: inline-block;
  margin: 20px 0 20px 0;
`;

/* It's a template literal. */
const Divider = styled.hr`
  background: white;
  margin: 0px 0px 15px;
  width: 20px;
  border-width: 5px;
  border: 0;
  border-top: 5px solid rgba(0, 0, 0, 0.1);
`;

/* A React component that renders the category page. */
const CategoryPage = () => {
  const { category, setCategory, setTechnology } =
    useContext<RadarContextType>(RadarContext);

  const [hovered, setHovered] = useState("");

  const [content, setContent] = useState<{
    name: string;
    data: techType;
  } | null>(null);

  const location = useLocation();

  useEffect(() => {
    const url = window.location.pathname.split("/");

    const categoriesAndTechnologies =
      technologies.filter(
        ({ categoryName }) =>
          url[2] && categoryName.toLowerCase() === url[2].replace(/-/g, " ")
      )[0] || technologies[0];

    const categoryName = categoriesAndTechnologies.categoryName;

    setCategory(categoryName);
    setContent(data.filter((item: any) => item.name === categoryName)[0]);

    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }, [location, category, setCategory]);

  const buttonText = categoryList.filter((name: string) => name !== category);

  return (
    <>
      {content && (
        <Wrapper category={category}>
          <img
            className="background"
            src={(images as { [key: string]: string })[category]}
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
                src={(images as { [key: string]: string })[category]}
                alt={category}
                width={126}
                height={126}
              />
              <div className="first-row-wrapper">
                <div>
                  <Divider />
                  <div className="title">Preferred</div>
                  {content.data.preferred.map(({ name, enabled }) => (
                    <CategoryListItem
                      key={name}
                      hovered={hovered === name}
                      category={category}
                      techName={name}
                      enabled={enabled}
                      onClick={() => setTechnology(name)}
                    />
                  ))}
                </div>
                <div>
                  <Divider />
                  <div className="title">Skilled</div>
                  {content.data.skilled.map(({ name, enabled }) => (
                    <CategoryListItem
                      key={name}
                      hovered={hovered === name}
                      category={category}
                      techName={name}
                      enabled={enabled}
                      onClick={() => setTechnology(name)}
                    />
                  ))}
                </div>
              </div>
              <div>
                <Divider />
                <div className="title">Scaling</div>
                {content.data.scaling.map(({ name, enabled }) => (
                  <CategoryListItem
                    key={name}
                    hovered={hovered === name}
                    category={category}
                    techName={name}
                    enabled={enabled}
                    onClick={() => setTechnology(name)}
                  />
                ))}
              </div>
              <div>
                <div className="subheader-mobile">Other Categories</div>
                <span>
                  {buttonText.slice(0, 4).map((text: string) => (
                    <Button
                      key={text}
                      name={text}
                      onClick={() => setCategory(text)}
                    />
                  ))}
                </span>
                <span>
                  {buttonText.slice(4, 7).map((text: string) => (
                    <Button
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
                <BackButton to="/home" />
                <Box sx={{ display: "flex", alignItems: "center", mb: "20px" }}>
                  <Title>{content.name}</Title>
                  <img
                    className="category-icon"
                    src={(images as { [key: string]: string })[category]}
                    alt={category}
                    width={126}
                    height={126}
                  />
                </Box>
              </Grid>
              <Grid item xs={4} className="large-screen">
                <Divider />
                <div className="title">Preferred</div>
                {content.data.preferred.map(({ name, enabled }) => (
                  <CategoryListItem
                    key={name}
                    hovered={hovered === name}
                    category={category}
                    techName={name}
                    enabled={enabled}
                    onClick={() => setTechnology(name)}
                  />
                ))}
              </Grid>
              <Grid item xs={4} className="large-screen">
                <Divider />
                <div className="title">Skilled</div>
                {content.data.skilled.map(({ name, enabled }) => (
                  <CategoryListItem
                    key={name}
                    hovered={hovered === name}
                    category={category}
                    techName={name}
                    enabled={enabled}
                    onClick={() => setTechnology(name)}
                  />
                ))}
              </Grid>
              <Grid item xs={4} className="large-screen">
                <Divider />
                <div className="title">Scaling</div>
                {content.data.scaling.map(({ name, enabled }) => (
                  <CategoryListItem
                    key={name}
                    hovered={hovered === name}
                    category={category}
                    techName={name}
                    enabled={enabled}
                    onClick={() => setTechnology(name)}
                  />
                ))}
              </Grid>

              <div className="subheader">Other Categories</div>
              <Grid className="categories-grid" item xs={12}>
                <span>
                  {buttonText.slice(0, 4).map((text: string) => (
                    <Button
                      key={text}
                      name={text}
                      onClick={() => setCategory(text)}
                    />
                  ))}
                </span>
                <span>
                  {buttonText.slice(4, 7).map((text: string) => (
                    <Button
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
    </>
  );
};

export default CategoryPage;
