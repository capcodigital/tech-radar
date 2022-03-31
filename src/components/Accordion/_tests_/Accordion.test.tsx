import * as React from "react";
import { render } from "@testing-library/react";
import AccordionComponent from "../Accordion";
import { BrowserRouter as Router } from "react-router-dom";

describe("Accordion", () => {
  it("should render Accordion component", () => {
    const mockCallBack = jest.fn();
    const { container } = render(
      <Router>
        <AccordionComponent name={"Test"} description={"test"} />
      </Router>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
