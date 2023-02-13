import { screen, act } from "@testing-library/react";

it("should render App component", () => {
  const root = document.createElement("div");
  root.id = "root";
  document.body.appendChild(root);
  act(() => {
    // Requires index.tsx so that react-dom render method is called
    require("../index.tsx");
  });

  // Asserts render was called with <App />
  // and HTML element with id = root
  expect(screen.getByAltText("Large Logo")).toBeInTheDocument();
});
