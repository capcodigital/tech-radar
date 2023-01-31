import * as React from "react";
import { render } from "@testing-library/react";
import Button from "../Button";
import { MemoryRouter } from "react-router-dom";

describe("StyledButton", () => {
  it("should render StyledButton component", () => {
    const mockCallBack = jest.fn();
    const { container } = render(
      <MemoryRouter>
        <Button name={"Test"} onClick={mockCallBack} />
      </MemoryRouter>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
