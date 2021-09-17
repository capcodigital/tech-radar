import { technologyList } from "./data/data";

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
