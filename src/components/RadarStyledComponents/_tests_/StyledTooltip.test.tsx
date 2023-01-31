import * as React from "react";
import { render } from "@testing-library/react";
import {
  CategoryRadarTooltip,
  RadarTooltip,
  KeyTooltip,
} from "../StyledTooltip";
import { MemoryRouter } from "react-router-dom";

describe("Tooltips", () => {
  it("should render KeyTooltip component", () => {
    const { container } = render(
      <MemoryRouter>
        <KeyTooltip
          title={<div>Test</div>}
          aria-label={"Test"}
          placement="right"
          arrow
        >
          <div>Test</div>
        </KeyTooltip>
      </MemoryRouter>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it("should render RadarTooltip component", () => {
    const { container } = render(
      <MemoryRouter>
        <RadarTooltip
          title={<div>Test</div>}
          aria-label={"Test"}
          placement="right"
          arrow
        >
          <div>Test</div>
        </RadarTooltip>
      </MemoryRouter>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it("should render CategoryRadarTooltip component", () => {
    const { container } = render(
      <MemoryRouter>
        <CategoryRadarTooltip
          title={<div>Test</div>}
          aria-label={"Test"}
          placement="right"
          arrow
        >
          <div>Test</div>
        </CategoryRadarTooltip>
      </MemoryRouter>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
