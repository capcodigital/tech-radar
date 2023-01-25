import * as React from "react";
import { render } from "@testing-library/react";
import { RadarContext } from "components/RadarContextProvider/RadarContextProvider";
import ProjectPage from "../ProjectPage";
import { BrowserRouter as Router } from "react-router-dom";

const mockValue = {
  category: "mobile",
  technology: "Swift",
  setCategory: jest.fn(),
  setTechnology: jest.fn(),
};

/* Mocking the RadarContextProvider component. */
jest.doMock("components/RadarContextProvider/RadarContextProvider", () => {
  return {
    __esModule: true,
    default: React.createContext,
  };
});

window.scroll = jest.fn();

describe("ProjectPage", () => {
  it("when techology is React it should render ProjectPage component", () => {
    const { container } = render(
      <Router>
        <RadarContext.Provider value={mockValue}>
          <ProjectPage />
        </RadarContext.Provider>
      </Router>
    );

    expect.addSnapshotSerializer({
      // Identify if there is any dynamic prop created by MUI (Material UI).
      test: (val: any) =>
        val && typeof val === "string" && val.indexOf("mui-") >= 0,
      print: (val: any) => {
        // Replace any dynamic prop value created by MUI with a constant value for avoiding Snapshot mismatching.
        let str = val;
        str = str.replace(/mui-.*/gm, "mui-00000");

        return `"${str}"`;
      },
    });

    expect(container.firstChild).toMatchSnapshot();
  });
});
