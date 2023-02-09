import ReactDOM from "react-dom";
import { waitFor, act } from "@testing-library/react";
import App from "../containers/App/App";

// mocks react-dom and its render method
jest.mock("react-dom", () => ({ render: jest.fn() }));

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
  expect(ReactDOM.render).toHaveBeenCalledWith(<App />, root);
});
