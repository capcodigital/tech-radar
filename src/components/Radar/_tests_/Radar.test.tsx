import * as React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Radar from "../Radar";
import { BrowserRouter as Router } from "react-router-dom";

describe("Radar", () => {
  it("should render Radar component", () => {
    const { container } = render(
      <Router>
        <Radar />
      </Router>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it("should click DevOps on Radar and check that url is /category/devops", () => {
    render(
      <Router>
        <Radar />
      </Router>
    );
    fireEvent.click(screen.getByText("DevOps"));
    expect(window.location.href).toBe("http://localhost/category/devops");
  });

  it("should click DevOps segment on Radar and check that url is /category/devops", () => {
    const { container } = render(
      <Router>
        <Radar />
      </Router>
    );
    fireEvent.click(screen.getByTestId("DevOps-arc"));
    expect(window.location.href).toBe("http://localhost/category/devops");
  });
});
