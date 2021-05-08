import React from 'react';
import Radar from './Radar';
import Grid from '@material-ui/core/Grid';

const Home = () => {
  return (
    <Grid container justify='center' >
      <Grid item>
        <Radar />
      </Grid>
    </Grid>
  );
};

export default Home;
