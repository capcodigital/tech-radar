import React, { FC, MouseEventHandler } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";

type StyledContentNavButtonProps = {
  align: string;
};

const StyledContentNavButton = styled.div<StyledContentNavButtonProps>`
  margin-top: 75px;
  float: ${({ align }) => align};
  div:first-child {
    font-family: poppins, sans-serif;
    font-size: 19px;
    font-weight: 300;
    opacity: 0.5;
  }
  a:nth-child(2) {
    :hover {
      text-decoration: underline;
    }
    font-family: bebas-neue-pro, sans-serif;
    font-size: 59px;
    color: inherit;
  }
  @media screen and (max-width: 1000px) {
    div:first-child {
      font-size: 19px;
    }
    a:nth-child(2) {
      font-size: 44px;
    }
  }
`;

type ContentNavButtonProps = {
  onClick: MouseEventHandler<HTMLDivElement>;
  previousTechnology: string;
  nextTechnology: string;
  previousCategory: string;
  nextCategory: string;
  next: boolean;
};

const ContentNavButton: FC<ContentNavButtonProps> = ({
  onClick,
  previousTechnology,
  nextTechnology,
  previousCategory,
  nextCategory,
  next,
}) => {
  return (
    <StyledContentNavButton
      align={next ? "right" : "left"}
      onClick={onClick}
      data-testid={next ? "Next" : "Previous"}
    >
      <div>{next ? "Next" : "Previous"}</div>
      {next ? (
        <Link
          to={`/technology/${nextCategory}/${nextTechnology.replace(
            /\s/g,
            "-"
          )}`.toLowerCase()}
        >
          {nextTechnology}
        </Link>
      ) : (
        <Link
          to={`/technology/${previousCategory}/${previousTechnology.replace(
            /\s/g,
            "-"
          )}`.toLowerCase()}
        >
          {previousTechnology}
        </Link>
      )}
    </StyledContentNavButton>
  );
};

export default ContentNavButton;
