import * as React from "react";
import { render } from "@testing-library/react";
import Button from "../Button";
import { BrowserRouter as Router } from "react-router-dom";

describe("StyledButton", () => {
  it("should render StyledButton component", () => {
    const mockCallBack = jest.fn();
    const { container } = render(
      <Router>
        <Button name={"Test"} onClick={mockCallBack} />
      </Router>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
