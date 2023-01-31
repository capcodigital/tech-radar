import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { categoryList } from "data/data";
import { RadarContextProvider } from "components/RadarContextProvider/RadarContextProvider";
import Menu from "../Menu";

describe("Menu", () => {
  it("should render Menu component", () => {
    const { container } = render(
      <MemoryRouter>
        <Menu />
      </MemoryRouter>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
  it("should render logo", () => {
    render(
      <MemoryRouter>
        <RadarContextProvider>
          <Menu />
        </RadarContextProvider>
      </MemoryRouter>
    );
    expect(screen.getByAltText("Large Logo")).toBeInTheDocument();
  });

  it("should cick Mennu icon and check that the list of categories have color white", () => {
    render(
      <MemoryRouter>
        <RadarContextProvider>
          <Menu />
        </RadarContextProvider>
      </MemoryRouter>
    );

    fireEvent.click(screen.getByLabelText("menu"));
    categoryList.forEach((name: string) => {
      expect(screen.getByText(name)).toHaveStyle("color:inherit");
      expect(screen.getByText(name)).toBeVisible();
    });
  });

  it("should open Menu and check that Mobile link has the correct href attribute", () => {
    render(
      <MemoryRouter>
        <RadarContextProvider>
          <Menu />
        </RadarContextProvider>
      </MemoryRouter>
    );

    fireEvent.click(screen.getByLabelText("menu"));
    fireEvent.click(screen.getByText("Mobile"));

    expect(screen.getByText("Mobile")).toHaveAttribute(
      "href",
      "/category/mobile"
    );
  });
});
