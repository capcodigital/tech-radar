import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles } from '@material-ui/core/styles';

export const KeyTooltip = withStyles(() => ({
  tooltip: {
    backgroundColor: 'white',
    color: 'black',
    fontSize: 16,
    fontFamily: 'bebas-neue-pro, sans-serif',
    borderRadius: 0,
    padding: 15,
    boxShadow: '3px 3px 3px 3px rgba(0, 0, 0, 0.2)'
  },
  arrow: {
    '&::before': {
      backgroundColor: 'white',
    },
  },
}))(Tooltip);

export const RadarTooltip = withStyles(() => ({
  tooltip: {
    backgroundColor: 'white',
    color: 'black',
    fontSize: 14,
    marginBottom: 20,
    fontFamily: 'bebas-neue-pro, sans-serif',
    borderRadius: 0,
  },
  arrow: {
    '&::before': {
      backgroundColor: 'white',
    },
  },
}))(Tooltip);

export const CategoryRadarTooltip = withStyles(() => ({
  tooltip: {
    backgroundColor: 'white',
    color: 'black',
    fontSize: 16,
    marginRight: 15,
    fontFamily: 'bebas-neue-pro, sans-serif',
    borderRadius: 0,
  },
  arrow: {
    '&::before': {
      backgroundColor: 'white',
    },
  },
}))(Tooltip);
