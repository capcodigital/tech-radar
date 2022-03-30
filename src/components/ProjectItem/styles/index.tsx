import styled from "styled-components/macro";

const StyledWrapper = styled.div`
    margin-bottom: 20px;
    font-family: poppins, sans-serif;
  .projectTech-link {
    display: inline-block;
    padding 10px;
    color: #ffffff;
    text-align: center;
  }
  svg.icon {
    height: 45px;
    width: 45px;
  }
  .div {
    margin-bottom: 10px;
  }
  .project-image-wrapper {
    padding: 5% 10%;
    background-color: white;
    margin-bottom: 20px;
    border-radius: 4px;
  }
  .project-image {
    width: 100%;
  }
  .heading {
    font-weight: 700;
    font-size: 18px;
    line-height: 27px;
    margin-bottom: 12px;
  }
  .link {
    grid-column: 2 / span 1;
    grid-row: 1 / span 2;
    justify-self: end;
    align-self: center;
    color: white;
    font-size: 16px;
    line-height: 24px;
    border-bottom: 1px solid #e6236d;
    padding-bottom: 4px;
  }
  .link:hover {
    cursor: pointer;
  }
  .project-tag {
    grid-column: 1 / span 1;
    background-color: rgba(230, 35, 109, 0.5);
    border-radius: 40px;
    min-width: min-content;
    max-width: max-content;
    padding: 4px 16px;
    text-align: center;
    align-self: center;
    font-weight: 500;
    font-size: 14px
    line-height: 21px;
  }
  .text {
    margin-bottom: 20px;
    font-size: 14px
    line-height: 21px;
  }
  .technologies {
    margin-bottom: 100px;
  }
  .row-wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    margin-bottom: 20px;
  }
}
`;

export default StyledWrapper;
