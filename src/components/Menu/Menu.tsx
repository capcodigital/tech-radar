import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import List from "@mui/material/List";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import logo from "images/logo.png";
import robot from "images/robot.svg";
import { ListItem } from "@mui/material";
import { RadarContext } from "../RadarContextProvider/RadarContextProvider";
import { categoryList } from "data/data";
import {
  StyledAppBar,
  LogoGridItem,
  StyledDrawer,
  StyledLink,
} from "./styles/";

const Menu = () => {
  const [open, setOpen] = useState(false);
  const { setCategory } = useContext(RadarContext);

  const handleClick = (item: string) => {
    setCategory(item.toLowerCase());
  };

  const toggleDrawer = (open: boolean) => (event: any) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(open);
  };

  return (
    <>
      <StyledAppBar position="static">
        <Toolbar>
          <Grid justifyContent="space-between" alignItems="start" container>
            <LogoGridItem item>
              <Link to="/home">
                <img height={85} src={logo} alt="Large Logo" />
                <div>TECH RADAR {new Date().getFullYear()}</div>
              </Link>
            </LogoGridItem>

            <Grid item alignItems="center" sx={{ display: "flex" }}>
              {window.location.pathname !== "/" && (
                <StyledLink id="purpose" to="/">
                  <img src={robot} alt="robot" width={28} height={26} />
                  Radar Purpose
                </StyledLink>
              )}

              <IconButton
                onClick={toggleDrawer(true)}
                onKeyDown={toggleDrawer(true)}
                edge="start"
                color="inherit"
                aria-label="menu"
              >
                <MenuIcon fontSize="large" />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </StyledAppBar>

      <StyledDrawer anchor={"right"} open={open} onClose={toggleDrawer(false)}>
        <div
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <IconButton
            onClick={toggleDrawer(false)}
            edge="start"
            color="inherit"
            aria-label="clear"
          >
            <ClearIcon fontSize="large" />
          </IconButton>
          <List>
            {categoryList.map((name: string) => (
              <ListItem
                id={`menu${name.replace(/\s/g, "-")}`}
                key={`menu-${name}`}
                button
                component={Link}
                to={`/category/${name.replace(/\s/g, "-").toLowerCase()}`}
                onClick={() => handleClick(name)}
              >
                {name}
              </ListItem>
            ))}
          </List>
        </div>
      </StyledDrawer>
    </>
  );
};

export default Menu;
