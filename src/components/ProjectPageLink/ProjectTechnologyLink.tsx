import React, { FC } from "react";
import { icons, technologies } from "../../data/data";
import { Link } from "react-router-dom";

type TechnologyLinkProps = {
  techName: string;
};

const ProjectTechnologyLink: FC<TechnologyLinkProps> = ({ techName }) => {
  let iconResult = icons.filter((icon: any) => icon.name === techName)[0];
  let iconRef = iconResult ? iconResult.link : "";
  let result = technologies.filter((el: any) =>
    el.technologies.includes(techName)
  );
  let category = result[0] ? result[0].categoryName : "";

  return (
    <Link
      to={`/technology/${category.replace(/\s/g, "-")}/${techName.replace(
        /\s/g,
        "-"
      )}`.toLowerCase()}
      className="projectTech-link"
    >
      <svg className="icon" viewBox={"0 0 80 80"}>
        <circle cx={40} cy={40} r={40} fill={"white"} />
        <image x={15} y={15} height={50} width={50} href={iconRef} />
      </svg>
      <div>{techName}</div>
    </Link>
  );
};

export default ProjectTechnologyLink;
