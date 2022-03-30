import * as React from "react";
import { render } from "@testing-library/react";
import { RadarContext } from "../../../components/RadarContextProvider/RadarContextProvider";
import ProjectPage from "../ProjectPage";
import { BrowserRouter as Router } from "react-router-dom";

const mockValue = {
  category: "mobile",
  technology: "Swift",
  setCategory: jest.fn(),
  setTechnology: jest.fn(),
};

jest.doMock(
  "../../../components/RadarContextProvider/RadarContextProvider",
  () => {
    return {
      __esModule: true,
      default: React.createContext,
    };
  }
);

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
    expect(container.firstChild).toMatchSnapshot();
  });
});
