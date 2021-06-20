import React from "react";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Footer from "./Footer";
import Grid from "@material-ui/core/Grid";
import MobileRadarBackground from "./MobileRadarBackground";
import Radar from "./Radar";
import RadarKey from "./RadarKey";
import images from "./images";
import styled from "styled-components/macro";

const Wrapper = styled.div`
  position: relative;
  .mobile-icons {
    margin-top: 50px;
    padding-bottom: 140px;
    position: relative;
    .text {
      color: white;
      font-size: 24px;
      .MuiSvgIcon-root {
        width: 15px;
        margin-left: 4px;
      }
    }
  }

  @media screen and (min-width: 1000px) {
    .mobile-icons {
      display: none;
    }
    .mobile-background {
      display: none;
    }
    div.background {
      display: none;
    }
  }
`;
const OutterWrapper = styled.div`
  .footer {
    position: absolute;
    top: ${window.innerHeight}px;
    @media screen and (max-width: 1000px) {
      position: inherit;
    }
  }
`;

const Home = () => {
  return (
    <OutterWrapper>
      <Wrapper>
        <RadarKey />
        <Radar />
        <MobileRadarBackground />
        <Grid container spacing={1} className="mobile-icons">
          {Object.entries(images).map(([name, image]) => (
            <Grid item xs={6} key={name}>
              <Link to={`/category/${name}`.toLowerCase()}>
                <img height={90} src={image} alt={name} />
                <div className="text">
                  {name}
                  <ArrowForwardIosIcon />
                </div>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Wrapper>
      <Footer />
    </OutterWrapper>
  );
};

export default Home;
