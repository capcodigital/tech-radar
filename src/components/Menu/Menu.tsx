import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ClearIcon from "@material-ui/icons/Clear";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import logo from "../../images/logo.png";
import robot from "../../images/robot.svg";
import { ListItem } from "@material-ui/core";
import { RadarContext } from "../RadarContextProvider/RadarContextProvider";
import { categoryList } from "../../data/data";
import styled from "styled-components/macro";

const StyledAppBar = styled(AppBar)`
  && {
    background: transparent;
    padding-top: 20px;
    box-shadow: none;
    #purpose {
      :hover {
        text-decoration: underline;
      }
    }
  }
`;

const LogoGridItem = styled(Grid)`
  && {
    z-index: 1400;
    margin-left: 60px;

    div {
      color: ${({ theme }) => theme.pink};
      font-weight: 700;
      font-size: 24px;
    }

    @media screen and (max-width: 1000px) {
      margin-left: 10px;
      img {
        height: 36px;
      }
      div {
        font-size: 19px;
      }
    }
  }
`;

const StyledDrawer = styled(Drawer)`
  div.MuiPaper-root {
    width: 100%;
    background-color: #0e0330;
    color: white;
  }
  .MuiIconButton-root {
    margin: 20px;
    float: right;
  }
  ul {
    height: ${window.innerHeight}px;
    width: 100%;
    padding: 150px 0 0 80px;
    background: radial-gradient(rgba(230, 35, 109, 0.7) 0%, transparent 90%);
    a {
      font-size: 30px;
      font-weight: bold;
      color: inherit;
      :hover {
        text-decoration: underline;
      }
    }
    @media screen and (max-width: 1000px) {
      padding: 100px 0 0 20px;
      background: radial-gradient(rgba(230, 35, 109, 0.7) 0%, transparent 150%);
      .MuiListItem-root {
        padding-bottom: 0;
      }
    }
  }
`;

const StyledLink = styled(Link)`
  display: inline-block;
  color: white;
  font-size: 20px;
  margin-right: 60px;
  :hover {
    color: white;
  }
  img {
    margin-right: 10px;
  }
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

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
          <Grid justify="space-between" container>
            <LogoGridItem item>
              <Link to="/home">
                <img height={46} src={logo} alt="Large Logo" />
                <div>TECH RADAR {new Date().getFullYear()}</div>
              </Link>
            </LogoGridItem>

            <Grid item>
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
