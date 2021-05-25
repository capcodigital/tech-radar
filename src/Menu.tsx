import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ClearIcon from '@material-ui/icons/Clear';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import logo from './images/logo.png';
import { ListItem } from '@material-ui/core';
import { RadarContext } from './RadarContextProvider';
import styled from 'styled-components/macro';

const StyledAppBar = styled(AppBar)`
  && {
    background: transparent;
    padding-top: 20px;
    box-shadow: none;
  }
`;
const LogoGridItem = styled(Grid)`
  && {
    z-index: 1400;
    margin-left: 60px;
    
    div {
      color: #e6236d;
      font-weight: 700;
      font-size: 24px;
    }

    @media screen and (max-width: 1000px) {
      margin-left: 10px;
      img{
        height:36px;
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
    padding-top: 10rem;
    background: radial-gradient(rgba(230, 35, 109, 0.7) 0%, transparent 90%);
    padding-left: 100px;
    a {
      font-size: 30px;
      font-weight: bold;
      color: inherit;
      :hover {
        text-decoration: underline;
      }
    }
  }
`;

export default function Header() {
  const [open, setOpen] = useState(false);
  const { setCategory } = useContext(RadarContext);

  const handleClick = (item: string) => {
    setCategory(item.toLowerCase());
  };

  const toggleDrawer = (open: boolean) => (event: any) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setOpen(open);
  };

  const MenuItems = () => (
    <div
      role='presentation'
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <IconButton
        onClick={toggleDrawer(false)}
        edge='start'
        color='inherit'
        aria-label='clear'
      >
        <ClearIcon fontSize='large' />
      </IconButton>
      <List>
        {[
          'Mobile',
          'Frontend',
          'Backend',
          'Integration',
          'Cloud',
          'Hosting',
          'Databases',
          'Devops',
        ].map((name: string) => (
          <ListItem
            key={`menu-${name}`}
            button
            component={Link}
            to={`/category/${name.toLowerCase()}`}
            onClick={() => handleClick(name)}
          >
            {name}
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <>
      <StyledAppBar position='static'>
        <Toolbar>
          <Grid justify='space-between' container>
            <LogoGridItem item>
              <Link to='/'>
                <img height={46} src={logo} alt='Logo' />
                <div>TECH RADAR 2021</div>
              </Link>
            </LogoGridItem>

            <Grid item>
              <div>
                <IconButton
                  onClick={toggleDrawer(true)}
                  edge='start'
                  color='inherit'
                  aria-label='menu'
                >
                  <MenuIcon fontSize='large' />
                </IconButton>
              </div>
            </Grid>
          </Grid>
        </Toolbar>
      </StyledAppBar>
      <StyledDrawer anchor={'right'} open={open} onClose={toggleDrawer(false)}>
        <MenuItems />
      </StyledDrawer>
    </>
  );
}
