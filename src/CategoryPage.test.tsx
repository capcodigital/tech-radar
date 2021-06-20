import * as React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { RadarContextProvider } from "./RadarContextProvider";
import CategoryPage from "./CategoryPage";
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

  it("should click GitHub from preferred list in CategoryPage component and check the element is in focus", () => {
    render(
      <Router>
        <RadarContextProvider>
          <CategoryPage />
        </RadarContextProvider>
      </Router>
    );

    fireEvent.click(screen.getByTestId("preferred-GitHub"));
    expect(screen.getByTestId("preferred-GitHub").focus).toBeTruthy();
  });

  it("should click Bitbucket from skilled list in CategoryPage component and check the element is in focus", () => {
    render(
      <Router>
        <RadarContextProvider>
          <CategoryPage />
        </RadarContextProvider>
      </Router>
    );

    fireEvent.click(screen.getByTestId("skilled-Bitbucket"));
    expect(screen.getByTestId("skilled-Bitbucket").focus).toBeTruthy();
  });

  it("should click Twistlock from scaling list in CategoryPage component and check the element is in focus", () => {
    render(
      <Router>
        <RadarContextProvider>
          <CategoryPage />
        </RadarContextProvider>
      </Router>
    );

    fireEvent.click(screen.getByTestId("scaling-Twistlock"));
    expect(screen.getByTestId("scaling-Twistlock").focus).toBeTruthy();
  });
});
