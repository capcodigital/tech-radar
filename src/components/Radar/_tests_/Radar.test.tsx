import { render, screen, fireEvent } from "@testing-library/react";
import Radar from "../Radar";
import { MemoryRouter } from "react-router-dom";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

const renderComponent = () =>
  render(
    <MemoryRouter>
      <Radar scalingClicked skilledClicked preferredClicked />
    </MemoryRouter>
  );

describe("Radar", () => {
  it("should render Radar component", () => {
    const { container } = renderComponent();
    expect(container.firstChild).toMatchSnapshot();
  });

  it("should click React icon on Radar and check that url is /technology/frontend/react", () => {
    const technologyClassNameWithContent = "techIcon-React";
    const { container } = renderComponent();
    const g = container.querySelectorAll("g");

    g.forEach((x) => {
      if (x.outerHTML.includes(technologyClassNameWithContent)) {
        fireEvent.click(x);
      }
    });
    expect(mockNavigate).toHaveBeenLastCalledWith(
      "/technology/mobile/react-native"
    );
  });

  it("should click DevOps on Radar and check that url is /category/devops", () => {
    renderComponent();
    fireEvent.click(screen.getByText("DevOps"));
    expect(mockNavigate).toHaveBeenCalledWith("/category/devops");
  });

  it("should click DevOps segment on Radar and check that url is /category/devops", () => {
    renderComponent();
    fireEvent.click(screen.getByTestId("DevOps-arc"));
    expect(mockNavigate).toHaveBeenCalledWith("/category/devops");
  });
});
