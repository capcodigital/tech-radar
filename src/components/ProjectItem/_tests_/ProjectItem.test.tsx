import * as React from "react";
import { render, screen } from "@testing-library/react";
import { RadarContextProvider } from "../../RadarContextProvider/RadarContextProvider";
import ProjectItem from "../ProjectItem";
import { MemoryRouter } from "react-router-dom";

window.scroll = jest.fn();
const mockValue = [
  {
    project: "GLOBAL DevOpS Acceleration",
    clientName: "Global Tier 1 Private Bank",
    description:
      "Capco delivered a DevOps acceleration program focused on improving delivery quality and speed.  This included integrating existing tools to improve developer experience, simplifying consumption of existing internal Kubernetes services, cloud migration, uplifting the platforms observability and monitoring maturity, re-engineering for containerization, building a single pane of glass portal, and training global teams e.g., India, China.",
    technologies: ["Go", "Docker", "AWS", "Kubernetes", "Datadog"],
  },
];
describe("ProjectItem", () => {
  it("should render ProjectItem component", () => {
    const { container } = render(
      <MemoryRouter>
        <RadarContextProvider>
          <ProjectItem data={mockValue} />
        </RadarContextProvider>
      </MemoryRouter>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it("should render GitHub ProjectItem component and check the correct text is displayed", () => {
    render(
      <MemoryRouter>
        <RadarContextProvider>
          <ProjectItem data={mockValue} />
        </RadarContextProvider>
      </MemoryRouter>
    );

    expect(screen.getByTestId("project-0").focus).toBeTruthy();
  });
});
