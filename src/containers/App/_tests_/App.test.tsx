import { render, screen } from "@testing-library/react";
import App from "../App";
import { BrowserRouter as Router } from "react-router-dom";

it("should render App component and check for capco logo", () => {
  render(<App />);
  expect(screen.getByAltText("Large Logo")).toBeInTheDocument();
});
