/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useState, FC } from "react";

export type RadarContextType = {
  category: string;
  technology: string;
  setCategory: (newCategory: string) => void;
  setTechnology: (newComptenecy: string) => void;
};

export const RadarContext = createContext<RadarContextType>({
  category: "",
  technology: "",
  setCategory: () => {},
  setTechnology: () => {},
});

export const RadarContextProvider: FC = ({ children }) => {
  const [category, setCategory] = useState("");
  const [technology, setTechnology] = useState("");
  const initialValue = {
    category,
    technology,
    setCategory,
    setTechnology,
  };

  return (
    <RadarContext.Provider value={initialValue}>
      {children}
    </RadarContext.Provider>
  );
};
