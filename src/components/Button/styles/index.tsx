import styled from "styled-components/macro";

const ButtonWrapper = styled.div`
  width: 320px;
  height: 70px;
  font-size: 30px;
  border: 1px solid white;
  color: white;
  display: flex;
  align-items: center;
  padding: 0 12px 0 12px;
  margin-bottom: 10px;
  transition: 0.3s;
  span {
    margin: 0 auto 0 10px;
  }
  svg.MuiSvgIcon-root {
    font-size: 20px;
  }
  :hover {
    background: rgb(255, 255, 255, 0.1);
  }
`;

export default ButtonWrapper;
