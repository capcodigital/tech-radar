import { render, screen } from "@testing-library/react";
import App from "../App";

it("should render App component and check for capco logo", () => {
  render(<App />);
  expect(screen.getByAltText("Large Logo")).toBeInTheDocument();
});
