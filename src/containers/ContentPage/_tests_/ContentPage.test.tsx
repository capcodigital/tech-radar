import { render } from "@testing-library/react";
import { RadarContextProvider } from "components/RadarContextProvider/RadarContextProvider";
import ContentPage from "../ContentPage";
import { MemoryRouter } from "react-router-dom";
import mockAxios from "jest-mock-axios";

window.scroll = jest.fn();

describe("ContentPage", () => {
  beforeEach(() => {
    mockAxios.get.mockResolvedValue({ data: [] });
  });
  afterEach(() => {
    jest.restoreAllMocks();
    mockAxios.reset();
  });

  it("should render ContentPage component", () => {
    const { container } = render(
      <MemoryRouter>
        <RadarContextProvider>
          <ContentPage />
        </RadarContextProvider>
      </MemoryRouter>
    );
    expect(mockAxios.get).toHaveBeenCalledWith(
      "https://api.github.com/orgs/capcodigital/repos"
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
