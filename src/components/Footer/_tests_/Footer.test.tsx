import * as React from "react";
import { render } from "@testing-library/react";
import Footer from "../Footer";
import { BrowserRouter as Router } from "react-router-dom";

describe("Footer", () => {
  it("should render Footer component", () => {
    const { container } = render(
      <Router>
        <Footer />
      </Router>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it("should check text content of Footer", () => {
    const { container } = render(
      <Router>
        <Footer />
      </Router>
    );

    expect(container.firstChild).toHaveTextContent(
      `Capco @${new Date().getFullYear()}All Rights Reserved`
    );
  });
});
