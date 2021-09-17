import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    pink: string;
  }
}

export const radarTheme: DefaultTheme = {
  pink: "#e6236d",
};
