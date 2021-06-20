import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

it("should render App component and check for capco logo", () => {
  render(
    <Router>
      <App />
    </Router>
  );
  expect(screen.getByAltText("Large Logo")).toBeInTheDocument();
});
