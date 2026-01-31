import React from "react";
import { render } from "@testing-library/react";
import SearchBar from "../components/SearchBar";

test("search renders", () => {
  render(<SearchBar value="" onChange={() => {}} />);
});