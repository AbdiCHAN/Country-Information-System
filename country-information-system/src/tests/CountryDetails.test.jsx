import React from "react";
import { render } from "@testing-library/react";
import CountryDetails from "../pages/CountryDetails";

test("details render", () => {
  render(<CountryDetails />);
});