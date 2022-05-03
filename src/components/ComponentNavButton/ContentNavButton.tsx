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
    font: 300 19px poppins, sans-serif;
    opacity: 0.5;
  }
  a:nth-child(2) {
    font: 59px bebas-neue-pro, sans-serif;
    color: inherit;
    :hover {
      text-decoration: underline;
    }
  }
  @media screen and (max-width: 1000px) {
    div:first-child {
      font-size: 19px;
    }
    a:nth-child(2) {
      font-size: 40px;
    }
  }
`;

type ContentNavButtonProps = {
  onClick: MouseEventHandler<HTMLAnchorElement>;
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
      data-test-id={next ? "Next" : "Previous"}
    >
      <div>{next ? "Next" : "Previous"}</div>
      {next ? (
        <Link
          onClick={onClick}
          to={`/technology/${nextCategory.replace(
            /\s/g,
            "-"
          )}/${nextTechnology.replace(/\s/g, "-")}`.toLowerCase()}
        >
          {nextTechnology}
        </Link>
      ) : (
        <Link
          onClick={onClick}
          to={`/technology/${previousCategory.replace(
            /\s/g,
            "-"
          )}/${previousTechnology.replace(/\s/g, "-")}`.toLowerCase()}
        >
          {previousTechnology}
        </Link>
      )}
    </StyledContentNavButton>
  );
};

export default ContentNavButton;
