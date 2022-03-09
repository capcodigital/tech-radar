import * as React from "react";
import { render } from "@testing-library/react";
import {
  CategoryRadarTooltip,
  RadarTooltip,
  KeyTooltip,
} from "../components/StyledTooltip";
import { BrowserRouter as Router } from "react-router-dom";

describe("Tooltips", () => {
  it("should render KeyTooltip component", () => {
    const { container } = render(
      <Router>
        <KeyTooltip
          title={<div>Test</div>}
          aria-label={"Test"}
          placement="right"
          arrow
        >
          <div>Test</div>
        </KeyTooltip>
      </Router>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it("should render RadarTooltip component", () => {
    const { container } = render(
      <Router>
        <RadarTooltip
          title={<div>Test</div>}
          aria-label={"Test"}
          placement="right"
          arrow
        >
          <div>Test</div>
        </RadarTooltip>
      </Router>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it("should render CategoryRadarTooltip component", () => {
    const { container } = render(
      <Router>
        <CategoryRadarTooltip
          title={<div>Test</div>}
          aria-label={"Test"}
          placement="right"
          arrow
        >
          <div>Test</div>
        </CategoryRadarTooltip>
      </Router>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
