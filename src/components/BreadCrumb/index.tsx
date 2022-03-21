import React, { FC } from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { withRouter, RouteComponentProps } from "react-router-dom";

const BreadcrumbComponent: FC<RouteComponentProps> = ({
  history,
  location: { pathname },
}) => {
  const pathnames = pathname.split("/").filter((x) => x);
  console.log(pathnames);

  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      style={{
        margin: "25px 0 0 90px",
        color: "#fff",
        fontSize: "12px",
      }}
    >
      {pathnames.length > 0 ? (
        <Link
          color="#fff"
          style={{ textDecoration: "none", fontWeight: "bold" }}
          onClick={() => history.push("/home")}
        >
          TECH RADAR
        </Link>
      ) : (
        <Typography style={{ color: "grey", fontSize: "12px" }}></Typography>
      )}
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index++).join("/")}`;
        const isLast = index === pathnames.length;
        const Name = name.toUpperCase();

        return isLast ? (
          <Typography style={{ color: "grey", fontSize: "12px" }}>
            {Name}
          </Typography>
        ) : (
          <Link
            color="#fff"
            style={{ textDecoration: "none" }}
            onClick={() => history.push(routeTo)}
          >
            {Name}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
};

export default withRouter(BreadcrumbComponent);
