import * as React from "react";
import { render } from "@testing-library/react";
import AccordionComponent from "../Accordion";
import { BrowserRouter as Router } from "react-router-dom";

describe("StyledButton", () => {
  it("should render StyledButton component", () => {
    const mockCallBack = jest.fn();
    const { container } = render(
      <Router>
        <AccordionComponent name={"Test"} description={"test"} />
      </Router>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
