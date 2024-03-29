import {
  getRowLength,
  capitalizeFirstCharacter,
  filterClientProjects,
} from "../helpers";

describe("helpers functions", () => {
  it("should get row length for less than 3 items and check that the result is the number of items", () => {
    const rowLength = getRowLength(2, 1);
    expect(rowLength).toBe(2);
  });
  it("should get row length for data items between 3 and 6 items", () => {
    const rowLength = getRowLength(4, 1);
    expect(rowLength).toBe(3);
  });
  it("should get row length for 6 data items and check that the result is 3", () => {
    const rowLength = getRowLength(6, 1);
    expect(rowLength).toBe(3);
  });
  it("should get row length for more than 6 data items and check that the result is 0", () => {
    const rowLength = getRowLength(10, 1);
    expect(rowLength).toBe(0);
  });
});

describe("capitalizeFirstCharacter", () => {
  it("should capitalize the first character of a given string", () => {
    const string = "a cat in a box";
    const result = capitalizeFirstCharacter(string);
    expect(result).toBe("A cat in a box");
  });

  it("should not capitalize if the first character is non-alpha", () => {
    const string =
      "<a href='https://redux.js.org/'>Redux</a> is like a cat in a box";
    const result = capitalizeFirstCharacter(string);
    expect(result).toBe(string);
  });
});

describe("filterClientProjects", () => {
  const mockClientProjects = [
    {
      project: "GLOBAL DevOpS Acceleration",
      clientName: "Global Tier 1 Private Bank",
      description: "Capco...",
      technologies: ["Go", "Docker", "AWS", "Kubernetes", "Datadog"],
    },
    {
      project: "Agency Bank Payment APIs",
      clientName: "UK Tier 1 Corporate Bank",
      description: "Capco...",
      technologies: ["Angular", "React"],
    },
  ];

  it("should return client project object if techName is found", () => {
    const result = filterClientProjects(mockClientProjects, "Go");
    expect(result).toStrictEqual([mockClientProjects[0]]);
  });

  it("should not return client project object if techName is not found", () => {
    const result = filterClientProjects(mockClientProjects, "Terraform");
    expect(result).toStrictEqual([]);
  });
});
