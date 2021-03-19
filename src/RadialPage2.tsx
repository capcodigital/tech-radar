import React from 'react';
import { radial } from './data';
import RadialChart2 from './RadialChart2';
import Menu from './Menu';
import Grid from '@material-ui/core/Grid';

const RadialPage = () => {
  return (
    <Grid container justify='center' spacing={5} style={{ marginTop: '1%' }}>
      <Grid item>
        <Menu />
      </Grid>
      <Grid item>
        <RadialChart2 data={radial} />
      </Grid>
    </Grid>
  );
};

export default RadialPage;
