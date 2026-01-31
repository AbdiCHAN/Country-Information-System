import React from "react";
import { render, screen } from "@testing-library/react";
import CountryDetails from "../pages/CountryDetails";

test("details render", () => {
  render(<CountryDetails />);
  expect(screen).toBeDefined();
});
