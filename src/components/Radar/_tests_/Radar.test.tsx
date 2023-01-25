import { render, screen, fireEvent } from "@testing-library/react";
import Radar from "../Radar";
import { BrowserRouter as Router } from "react-router-dom";

const renderComponent = () =>
  render(
    <Router>
      <Radar scalingClicked skilledClicked preferredClicked />
    </Router>
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
    expect(window.location.href).toBe(
      "http://localhost/technology/mobile/react-native"
    );
  });

  it("should click DevOps on Radar and check that url is /category/devops", () => {
    renderComponent();
    fireEvent.click(screen.getByText("DevOps"));
    expect(window.location.href).toBe("http://localhost/category/devops");
  });

  it("should click DevOps segment on Radar and check that url is /category/devops", () => {
    renderComponent();
    fireEvent.click(screen.getByTestId("DevOps-arc"));
    expect(window.location.href).toBe("http://localhost/category/devops");
  });
});
