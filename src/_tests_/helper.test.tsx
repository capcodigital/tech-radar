import * as React from "react";
import { getRowLength, getPrevItem, getNextItem } from "../helpers/helpers";

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
