import React from 'react';
import { radial } from './data';
import RadialChart from './RadialChart';
import Radar from './Radar';
import Grid from '@material-ui/core/Grid';

const Home = () => {
  return (
    <Grid container justify='center' spacing={5}>
      <Grid item>
        <Radar />
      </Grid>
    </Grid>
  );
};

export default Home;
