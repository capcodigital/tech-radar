import React, { FC } from 'react';
import styled from 'styled-components/macro';
import StyledTooltip from './StyledTooltip';

const StyledRadarKey = styled.div`
  margin-left: 90px;
  position: absolute;
  width: 100px;
  margin-top: 50px;
  text-align: left;
  font-size: 16px;
  div:first-child {
    font-size: 20px;
    border-bottom: 0.1px solid #c9c6c657;
  }
  div {
    padding-bottom: 8px;
    margin-bottom: 8px;
    svg {
      margin-right: 8px;
    }
  }
`;

type KeyCircleProps = {
  color1: string;
  color2: string;
  color3: string;
};

const KeyCircle: FC<KeyCircleProps> = ({ color1, color2, color3 }) => (
  <svg width={24} height={24}>
    <circle cx={12} cy={12} r={12} fill={color1} />
    <circle cx={12} cy={12} r={8} fill={color2} />
    <circle cx={12} cy={12} r={4} fill={color3} />
  </svg>
);

const RadarKey = () => (
  <StyledRadarKey>
    <div>Key</div>
    <StyledTooltip
      title={
        'The team are actively scaling the usage and skills for this technology or tool. These technologies are driven by both client demand and industry trends, therefore they are subject to change.'
      }
      aria-label={'Scaling'}
      placement='right'
    >
      <div>
        <KeyCircle
          color1={'#c4c4c41a'}
          color2={'#c4c4c41a'}
          color3={'#e6236d'}
        />
        <span>Scaling</span>
      </div>
    </StyledTooltip>
    <StyledTooltip
      title={
        'If a client asked for these technologies Capco can confidently deliver production solutions using them.'
      }
      aria-label={'Skilled'}
      placement='right'
    >
      <div>
        <KeyCircle color1={'#c4c4c41a'} color2={'#e6236d'} color3={'#222222'} />
        <span>Skilled</span>
      </div>
    </StyledTooltip>
    <StyledTooltip
      title={
        'If Capco has full architecture and DevOps responsibility, these are the current technology choices.'
      }
      aria-label={'Preferred'}
      placement='right'
    >
      <div>
        <KeyCircle color1={'#e6236d'} color2={'#290738'} color3={'#391A46'} />
        <span>Preferred</span>
      </div>
    </StyledTooltip>
  </StyledRadarKey>
);

export default RadarKey;
