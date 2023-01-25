import { icons, technologies } from "data/data";
import { Link } from "react-router-dom";

type TechnologyLinkProps = {
  techName: string;
};
type Technology = {
  categoryName: string;
  technologies: string[];
};

const ProjectTechnologyLink = ({ techName }: TechnologyLinkProps) => {
  const iconResult = icons.filter(
    (icon: { name: string; link: string }) =>
      icon.name.toLowerCase() === techName.toLowerCase()
  )[0];
  const iconRef = iconResult ? iconResult.link : "";
  const result = technologies.filter((el: Technology) =>
    el.technologies.some((element: string) => {
      return element.toLowerCase() === techName.toLowerCase();
    })
  );
  const category = result[0] ? result[0].categoryName : "";

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
