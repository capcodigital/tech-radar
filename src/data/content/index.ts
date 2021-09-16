import frontend from "./frontend";
import backend from "./backend";
import mobile from "./mobile";
import devops from "./devops";
import databases from "./databases";
import cloud from "./cloud";
import quality from "./quality";
import integration from "./integration";

export type TechContentType = {
  technology: string;
  docsLink: string;
  intro: string;
  content: Array<{
    name: string;
    intro: string;
    data: Array<{ name: string; description: string }>;
  }>;
  examples: Array<{ name: string; description: string }>;
  reference: Array<string>;
};

const content = [
  ...frontend,
  ...backend,
  ...mobile,
  ...devops,
  ...databases,
  ...cloud,
  ...quality,
  ...integration,
];

export default content;
