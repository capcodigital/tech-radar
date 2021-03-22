import React from 'react';
import { radial } from './data';
import RadialChart from './RadialChart';
import Grid from '@material-ui/core/Grid';

const Home = () => {
  return (
    <Grid container justify='center' spacing={5} style={{ marginTop: '1%' }}>
      <Grid item>
        <RadialChart data={radial} />
      </Grid>
    </Grid>
  );
};

export default Home;
