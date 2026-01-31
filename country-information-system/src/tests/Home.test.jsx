import React from "react";
import { render } from "@testing-library/react";
import Home from "../pages/Home";

test("home renders", () => {
  render(<Home />);
});