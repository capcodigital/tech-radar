import { render } from "@testing-library/react";
import BreadCrumb from "../";
import { MemoryRouter } from "react-router-dom";

describe("BreadCrumb", () => {
  it("should render StyledButton component", () => {
    const { container } = render(
      <MemoryRouter>
        <BreadCrumb />
      </MemoryRouter>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
