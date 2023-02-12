import { technologyList } from "../data/data";

export type Project = {
  project: string;
  clientName: string;
  description: string;
  technologies: Array<string>;
};

export const getNextItem = (currentItem: string) => {
  const currentIndex = technologyList.indexOf(currentItem);
  const nextIndex = (currentIndex + 1) % technologyList.length;
  return technologyList[nextIndex];
};

export const getPrevItem = (currentItem: string) => {
  const currentIndex = technologyList.indexOf(currentItem);
  const prevIndex = (currentIndex - 1) % technologyList.length;

  return technologyList[prevIndex < 0 ? technologyList.length - 1 : prevIndex];
};

export const getRowLength = (dataNum: number, idx: number) => {
  if (dataNum <= 3) return dataNum;
  else if (dataNum > 3 && dataNum < 6) {
    return idx < 3 ? 3 : dataNum - 3;
  } else if (dataNum === 6) return dataNum / 2;
  else return 0;
};

export const capitalizeFirstCharacter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const filterClientProjects = (
  clientProjects: Project[],
  techName: string
) =>
  clientProjects.filter(({ technologies }) =>
    technologies.some(
      (element) => element.toLowerCase() === techName.toLowerCase()
    )
  );
