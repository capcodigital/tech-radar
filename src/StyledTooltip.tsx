import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles, Theme } from '@material-ui/core/styles';

const StyledTooltip = withStyles((theme: Theme) => ({
  tooltip: {
    backgroundColor: 'white',
    color: 'black',
    fontSize: 18,
    marginBottom: 20,
    fontFamily: 'bebas-neue-pro, sans-serif',
  },
}))(Tooltip);

export default StyledTooltip;
