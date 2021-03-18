import React from 'react';
import { radial } from './data';
import styled from 'styled-components/macro';
import RadialBarChart from './RadialBarChart';

const RadialPage = () => {
    return (
        <div>
             <RadialBarChart data={radial} />
        </div>
    );
}

export default RadialPage;
