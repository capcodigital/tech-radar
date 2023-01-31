import styled from "@emotion/styled";
import { Link } from "@mui/material";

const StyledBackLink = styled(Link)({
  textDecoration: "none",
  fontSize: 17,
  display: "flex",
  color: "white",
  marginLeft: "-10px",
  cursor: "pointer",
  "& img": {
    marginLeft: "10px !important",
  },
  "&:hover": {
    textDecoration: "underline !important",
  },
});

export default StyledBackLink;
