import * as React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { RadarContextProvider } from "../components/RadarContextProvider";
import CategoryPage from "../pages/CategoryPage";
import { BrowserRouter as Router } from "react-router-dom";

window.scroll = jest.fn();

describe("CategoryPage", () => {
  it("should render CategoryPage component", () => {
    const { container } = render(
      <Router>
        <RadarContextProvider>
          <CategoryPage />
        </RadarContextProvider>
      </Router>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
