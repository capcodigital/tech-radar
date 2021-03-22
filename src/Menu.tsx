import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Divider from '@material-ui/core/Divider';
import ClearIcon from '@material-ui/icons/Clear';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components/macro';
import logo from './logo.png';
import { ListItem } from '@material-ui/core';
import RadarContext from './RadarContext';

const useStyles = makeStyles((theme: any) => ({
  appBar: {
    background: 'black',
    paddingTop: 20,
  },
  list: {
    width: 250,
    margin: 20,
    fontSize: 20,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    right: 0,
    float: 'right',
    fontSize: 'large',
  },
  title: {
    fontSize: 45,
  },
}));

export default function Header() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const { name, setName } = useContext(RadarContext);

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
      className={classes.list}
      role='presentation'
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <IconButton
        onClick={toggleDrawer(false)}
        edge='start'
        className={classes.menuButton}
        color='inherit'
        aria-label='clear'
      >
        <ClearIcon fontSize='large' />
      </IconButton>
      <List>
        <ListItem button component={Link} to='/'>
          Home
        </ListItem>
        <Divider />
        {[
          'Mobile',
          'FrontEnd',
          'BackEnd',
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
         <Divider />
        {/* <ListItem button component={Link} to='/table'>
          Table
        </ListItem> */}
      </List>
    </div>
  );

  return (
    <>
      <AppBar className={classes.appBar} position='static'>
        <Toolbar>
          <Grid justify='space-between' container>
            <Grid item>
              <img
                height={40}
                src={logo}
                alt='Logo'
                style={{ margin: '1rem' }}
              />
            </Grid>

            <Grid item>
              <div>
                <IconButton
                  onClick={toggleDrawer(true)}
                  edge='start'
                  className={classes.menuButton}
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
      <Drawer anchor={'right'} open={open} onClose={toggleDrawer(false)}>
        <MenuItems />
      </Drawer>
    </>
  );
}
