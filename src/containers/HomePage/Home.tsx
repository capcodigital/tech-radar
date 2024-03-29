import { useState } from "react";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Grid from "@mui/material/Grid";
import { Wrapper, OutterWrapper } from "containers/HomePage/styles/";
import images from "images";
import MobileRadarBackground from "components/MobileRadarBackground/MobileRadarBackground";
import Radar from "components/Radar/Radar";
import RadarKey from "components/RadarKey/RadarKey";

const Home = () => {
  const [scalingClicked, setScalingClicked] = useState<boolean>(false);
  const [skilledClicked, setSkilledClicked] = useState<boolean>(false);
  const [preferredClicked, setPreferredClicked] = useState<boolean>(false);
  return (
    <OutterWrapper>
      <Wrapper>
        <RadarKey
          setScalingClicked={setScalingClicked}
          setSkilledClicked={setSkilledClicked}
          setPreferredClicked={setPreferredClicked}
        />
        <Radar
          scalingClicked={scalingClicked}
          skilledClicked={skilledClicked}
          preferredClicked={preferredClicked}
        />
        <MobileRadarBackground />
        <Grid container spacing={1} className="mobile-icons">
          {Object.entries(images).map(([name, image]) => (
            <Grid item xs={6} key={name}>
              <Link to={`/category/${name.replace(/\s/g, "-")}`.toLowerCase()}>
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
    </OutterWrapper>
  );
};

export default Home;
