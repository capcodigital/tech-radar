import { FC } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import BreadcrumbStyles from "./styles/";

const BreadcrumbComponent: FC<RouteComponentProps> = ({
  history,
  location: { pathname },
}) => {
  const pathnames = pathname
    .replaceAll("technology", "category")
    .replaceAll("projects", "category")
    .split("/")
    .filter((x) => x);

  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      style={{
        margin: "25px 0 0 90px",
        color: "#fff",
        fontSize: "12px",
        cursor: "pointer",
      }}
    >
      {pathnames.length > 0 && (
        <BreadcrumbStyles>
          <Link
            color="#fff"
            className="breadcrumb-nav"
            style={{ fontWeight: "bold" }}
            onClick={() => {
              history.push("/home");
            }}
          >
            TECH RADAR
          </Link>
        </BreadcrumbStyles>
      )}
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index++).join("/")}`;
        const isLast = index === pathnames.length;
        const Name = name.toUpperCase();

        const HandleClick = (event: any) => {
          if (
            routeTo.indexOf(
              "mobile" ||
                "frontend" ||
                "backend" ||
                "integration" ||
                "cloud-&-platforms" ||
                "quality-engineering" ||
                "databases" ||
                "devops"
            )
          ) {
            if (event.target.innerText === "CATEGORY") {
              history.push(`/category/${pathnames[index]}`);
              return;
            }
            history.push(`/${pathnames.slice(0, index++).join("/")}`);
          }
        };
        return isLast ? (
          <Typography
            key={index}
            style={{ color: "grey", fontSize: "12px", cursor: "not-allowed" }}
          >
            {Name}
          </Typography>
        ) : (
          <BreadcrumbStyles key={index}>
            <Link color="#fff" className="breadcrumb-nav" onClick={HandleClick}>
              {Name}
            </Link>
          </BreadcrumbStyles>
        );
      })}
    </Breadcrumbs>
  );
};

export default withRouter(BreadcrumbComponent);
