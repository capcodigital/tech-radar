import logo from "images/logo.png";
import styled from "styled-components/macro";

const StyledFooter = styled.div`
  height: 70px;
  background: #00000026;
  text-align: center;
  font-size: 18px;
  color: white;
  padding: 0 100px 0 100px;
  line-height: 70px;
  bottom: 0;
  a {
    color: inherit;
    float: left;
  }
  div {
    float: right;
  }
  img {
    display: none;
  }

  @media screen and (max-width: 1000px) {
    height: 250px;
    padding: 0 100px 0 100px;
    a,
    div {
      float: none;
    }
    img {
      display: block;
      margin: auto;
    }
  }
`;

const Footer = () => (
  <StyledFooter className="footer">
    <img height={44} src={logo} alt="Logo" />
    <a href="https://www.capco.com/" target="_blank" rel="noreferrer">
      Capco @{new Date().getFullYear()}
    </a>
    <div>All Rights Reserved</div>
  </StyledFooter>
);

export default Footer;
