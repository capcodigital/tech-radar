import React from 'react';
import { radial } from './data';
import RadialChart2 from './RadialChart2';

const RadialPage = () => {
  return (
    <div>
      <RadialChart2 data={radial} />
    </div>
  );
};

export default RadialPage;
