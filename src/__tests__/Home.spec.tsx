import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../pages/Home";

describe("Test Home Page", () => {
  it("renders snapshot as expected", () => {
    const home = render(<Home />);
    expect(home).toMatchSnapshot();
  });
  it("should show a button", () => {
    render(<Home />);
    expect(screen.getByRole("button", { name: "Submit" }))
  });

});
