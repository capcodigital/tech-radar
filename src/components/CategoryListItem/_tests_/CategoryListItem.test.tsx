import * as React from "react";
import { render, screen } from "@testing-library/react";
import { RadarContextProvider } from "../../RadarContextProvider/RadarContextProvider";
import CategoryListItem from "../CategoryListItem";
import { MemoryRouter } from "react-router-dom";

window.scroll = jest.fn();
const mockCallBack = jest.fn();
describe("CategoryListItem", () => {
  it("should render CategoryListItem component", () => {
    const { container } = render(
      <MemoryRouter>
        <RadarContextProvider>
          <CategoryListItem
            techName="GitHub"
            category={"DevOps"}
            enabled={false}
            onClick={mockCallBack}
            hovered={false}
          />
        </RadarContextProvider>
      </MemoryRouter>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it("should render GitHub CategoryListItem component and check the correct text is displayed", () => {
    render(
      <MemoryRouter>
        <RadarContextProvider>
          <CategoryListItem
            techName="GitHub"
            category={"DevOps"}
            enabled={false}
            onClick={mockCallBack}
            hovered={false}
          />
        </RadarContextProvider>
      </MemoryRouter>
    );

    expect(screen.getByTestId("category-item-GitHub").focus).toBeTruthy();
  });
});
