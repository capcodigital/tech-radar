import * as React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Radar from "../Radar";
import { BrowserRouter as Router } from "react-router-dom";

describe("Radar", () => {
  it("should render Radar component", () => {
    const { container } = render(
      <Router>
        <Radar
          scalingClicked={true}
          skilledClicked={true}
          preferredClicked={true}
        />
      </Router>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it("should click Consul icon on Radar and check that url has not changed", () => {
    const technologyClassNameWithNoContent = "techIcon-Consul";
    const { container } = render(
      <Router>
        <Radar
          scalingClicked={true}
          skilledClicked={true}
          preferredClicked={true}
        />
      </Router>
    );
    const g = container.querySelectorAll("g");
    g.forEach((x) => {
      if (x.outerHTML.includes(technologyClassNameWithNoContent)) {
        fireEvent.click(x);
      }
    });
    expect(window.location.href).toBe("http://localhost/");
  });

  it("should click React icon on Radar and check that url is /technology/frontend/react", () => {
    const technologyClassNameWithContent = "techIcon-React";
    const { container } = render(
      <Router>
        <Radar
          scalingClicked={true}
          skilledClicked={true}
          preferredClicked={true}
        />
      </Router>
    );
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
    render(
      <Router>
        <Radar
          scalingClicked={true}
          skilledClicked={true}
          preferredClicked={true}
        />
      </Router>
    );
    fireEvent.click(screen.getByText("DevOps"));
    expect(window.location.href).toBe("http://localhost/category/devops");
  });

  it("should click DevOps segment on Radar and check that url is /category/devops", () => {
    const { container } = render(
      <Router>
        <Radar
          scalingClicked={true}
          skilledClicked={true}
          preferredClicked={true}
        />
      </Router>
    );
    fireEvent.click(screen.getByTestId("DevOps-arc"));
    expect(window.location.href).toBe("http://localhost/category/devops");
  });
});
