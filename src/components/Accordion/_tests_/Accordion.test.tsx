import { render } from "@testing-library/react";
import AccordionComponent from "../Accordion";
import { MemoryRouter } from "react-router-dom";

describe("Accordion", () => {
  it("should render Accordion component", () => {
    const { container } = render(
      <MemoryRouter>
        <AccordionComponent name="Test" description="test" />
      </MemoryRouter>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
