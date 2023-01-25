import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { categoryList } from "data/data";
import { RadarContextProvider } from "components/RadarContextProvider/RadarContextProvider";
import Menu from "../Menu";

describe("Menu", () => {
  it("should render Menu component", () => {
    const { container } = render(
      <Router>
        <Menu />
      </Router>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it("should cick Mennu icon and check that the list of categories have color white", () => {
    render(
      <Router>
        <RadarContextProvider>
          <Menu />
        </RadarContextProvider>
      </Router>
    );

    fireEvent.click(screen.getByLabelText("menu"));
    categoryList.forEach((name: string) => {
      expect(screen.getByText(name)).toHaveStyle("color:inherit");
      expect(screen.getByText(name)).toBeVisible();
    });
  });

  it("should press Tab key to open Menu and check that clear icon is in focus", () => {
    render(
      <Router>
        <RadarContextProvider>
          <Menu />
        </RadarContextProvider>
      </Router>
    );

    fireEvent.keyDown(screen.getByLabelText("menu"));
    userEvent.tab();

    expect(screen.getByLabelText("clear")).toHaveFocus();
  });

  it("should open Menu and check that Mobile link has the correct href attribute", () => {
    render(
      <Router>
        <RadarContextProvider>
          <Menu />
        </RadarContextProvider>
      </Router>
    );

    fireEvent.click(screen.getByLabelText("menu"));
    fireEvent.click(screen.getByText("Mobile"));

    expect(screen.getByText("Mobile")).toHaveAttribute(
      "href",
      "/category/mobile"
    );
  });

  it("should press Tab key to open Menu and check that Mobile link is in focus", () => {
    render(
      <Router>
        <RadarContextProvider>
          <Menu />
        </RadarContextProvider>
      </Router>
    );

    fireEvent.keyDown(screen.getByLabelText("menu"));
    userEvent.tab();
    userEvent.tab();

    expect(screen.getByText("Mobile")).toHaveFocus();
  });
});
