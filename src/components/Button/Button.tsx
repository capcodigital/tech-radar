import { MouseEventHandler } from "react";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ButtonWrapper from "./styles/";
import images from "images";

type StyledButtonProps = {
  name: string;
  onClick: MouseEventHandler<HTMLDivElement>;
};

export const StyledButton = ({ name, onClick }: StyledButtonProps) => (
  <Link to={`/category/${name.replace(/\s/g, "-").toLowerCase()}`}>
    <ButtonWrapper onClick={onClick}>
      <img
        src={(images as { [key: string]: string })[name]}
        alt={name}
        width={54}
        height={54}
      />
      <span>{name}</span>
      <ArrowForwardIosIcon />
    </ButtonWrapper>
  </Link>
);

export default StyledButton;
