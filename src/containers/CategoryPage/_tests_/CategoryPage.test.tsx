import { render } from "@testing-library/react";
import { RadarContextProvider } from "components/RadarContextProvider/RadarContextProvider";
import CategoryPage from "../CategoryPage";
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
