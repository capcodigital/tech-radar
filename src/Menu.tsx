import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ClearIcon from '@material-ui/icons/Clear';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import logo from './logo.png';
import { ListItem } from '@material-ui/core';
import RadarContext from './RadarContext';
import styled from 'styled-components/macro';

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
    background: radial-gradient(rgba(230, 35, 109, 0.7) 0%, transparent 80%);
    padding-left: 100px;
    a {
      font-size: 30px;
      font-weight: bold;
      text-decoration: none;
    }
  }
`;

const useStyles = makeStyles((theme: any) => ({
  appBar: {
    background: 'transparent',
    paddingTop: 20,
    boxShadow: 'none',
  },
}));

export default function Header() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const { setName } = useContext(RadarContext);

  const handleClick = (item: string) => {
    setName(item);
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
        ].map((item: string) => (
          <ListItem
            key={`menu-${item}`}
            button
            component={Link}
            to='/info'
            onClick={() => handleClick(item)}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <>
      <AppBar className={classes.appBar} position='static'>
        <Toolbar>
          <Grid justify='space-between' container>
            <Grid item style={{ zIndex: 1400, marginLeft: '60px' }}>
              <Link to='/'>
                <img height={40} src={logo} alt='Logo' />
                <div style={{ color: '#E6236D', fontWeight: 700 }}>
                  TECH RADAR 2021
                </div>
              </Link>
            </Grid>

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
      </AppBar>
      <StyledDrawer anchor={'right'} open={open} onClose={toggleDrawer(false)}>
        <MenuItems />
      </StyledDrawer>
    </>
  );
}
