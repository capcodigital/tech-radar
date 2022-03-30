import * as React from "react";
import { render } from "@testing-library/react";
import BreadCrumb from "../";
import { BrowserRouter as Router } from "react-router-dom";

describe("BreadCrumb", () => {
  it("should render StyledButton component", () => {
    const { container } = render(
      <Router>
        <BreadCrumb />
      </Router>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
