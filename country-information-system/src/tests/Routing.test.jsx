import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "../App";

test("renders app", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
});