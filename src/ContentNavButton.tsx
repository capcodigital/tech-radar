import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import { technologyList } from './data/data';

type NavButtonProps = {
  align: string;
  onClick: React.MouseEventHandler<HTMLDivElement>;
  technology: string;
  category: string;
  next: boolean;
};

type ButtonProps = {
  align: string;
};

const StyledNavButton = styled.div<ButtonProps>`
  float: ${({ align }) => align};
  margin-top: 75px;
  div:first-child {
    font-family: poppins, sans-serif;
    font-size: 19px;
    font-weight: 300;
    opacity: 0.5;
  }
  a:nth-child(2) {
    font-family: bebas-neue-pro, sans-serif;
    font-size: 59px;
    color: inherit;
  }
`;

const getNextItem = (currentItem: string) => {
  const currentIndex = technologyList.indexOf(currentItem);
  const nextIndex = (currentIndex + 1) % technologyList.length;
  return technologyList[nextIndex];
};

const getPrevItem = (currentItem: string) => {
  const currentIndex = technologyList.indexOf(currentItem);
  const nextIndex = (currentIndex - 1) % technologyList.length;
  return technologyList[nextIndex];
};

const ContentNavButton: FC<NavButtonProps> = ({
  align,
  onClick,
  technology,
  category,
  next,
}) => (
  <StyledNavButton align={align} onClick={onClick}>
    <div>Next</div>
    <Link
      to={`/technology/${category}/${(next
        ? getNextItem(technology)
        : getPrevItem(technology)
      ).replace(/\s/g, '-')}`.toLowerCase()}
    >
      {next ? getNextItem(technology) : getPrevItem(technology)}
    </Link>
  </StyledNavButton>
);

export default ContentNavButton;
