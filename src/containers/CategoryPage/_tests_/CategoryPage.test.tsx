import { render } from "@testing-library/react";
import { RadarContextProvider } from "components/RadarContextProvider/RadarContextProvider";
import CategoryPage from "../CategoryPage";
import { MemoryRouter } from "react-router-dom";

window.scroll = jest.fn();

describe("CategoryPage", () => {
  it("should render CategoryPage component", () => {
    const { container } = render(
      <MemoryRouter>
        <RadarContextProvider>
          <CategoryPage />
        </RadarContextProvider>
      </MemoryRouter>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
