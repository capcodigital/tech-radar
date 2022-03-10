import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";

export const StyledAppBar = styled(AppBar)`
  && {
    background: transparent;
    padding-top: 20px;
    box-shadow: none;
    #purpose {
      :hover {
        text-decoration: underline;
      }
    }
  }
`;

export const LogoGridItem = styled(Grid)`
  && {
    z-index: 1400;
    margin-left: 60px;

    div {
      color: ${({ theme }) => theme.pink};
      font-weight: 700;
      font-size: 24px;
    }

    @media screen and (max-width: 1000px) {
      margin-left: 10px;
      img {
        height: 36px;
      }
      div {
        font-size: 19px;
      }
    }
  }
`;

export const StyledDrawer = styled(Drawer)`
  div.MuiPaper-root {
    width: 40%;
    background-color: #0e0330;
    color: white;
    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }
  .MuiIconButton-root {
    margin: 20px;
    float: right;
  }
  ul {
    height: ${window.innerHeight}px;
    width: 100%;
    padding: 150px 0 0 80px;
    background: radial-gradient(rgba(230, 35, 109, 0.7) 0%, transparent 90%);
    a {
      font-size: 30px;
      font-weight: bold;
      color: inherit;
      :hover {
        text-decoration: underline;
      }
      @media screen and (max-width: 768px) {
        display: inline-block;
        text-align: center;
      }
    }
    @media screen and (max-width: 1000px) {
      padding: 100px 0 0 20px;
      background: radial-gradient(rgba(230, 35, 109, 0.7) 0%, transparent 150%);
      .MuiListItem-root {
        padding-bottom: 0;
      }
    }
  }
`;

export const StyledLink = styled(Link)`
  display: inline-block;
  color: white;
  font-size: 20px;
  margin-right: 60px;
  :hover {
    color: white;
  }
  img {
    margin-right: 10px;
  }
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;
