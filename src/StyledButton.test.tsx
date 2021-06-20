import * as React from "react";
import { render } from "@testing-library/react";
import StyledButton from "./StyledButton";
import { BrowserRouter as Router } from "react-router-dom";

describe("StyledButton", () => {
  it("should render StyledButton component", () => {
    const mockCallBack = jest.fn();
    const { container } = render(
      <Router>
        <StyledButton name={"Test"} onClick={mockCallBack} />
      </Router>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
