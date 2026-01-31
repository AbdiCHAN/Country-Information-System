import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "../components/SearchBar";

describe("SearchBar Component", () => {
  test("renders input with correct placeholder and value", () => {
    const mockValue = "Kenya";
    const mockOnChange = jest.fn();

    render(<SearchBar value={mockValue} onChange={mockOnChange} />);

    const input = screen.getByPlaceholderText(/Search countries/i);
    expect(input).toBeInTheDocument();
    expect(input.value).toBe("Kenya");
  });

  test("calls onChange when user types", () => {
    const mockOnChange = jest.fn();
    render(<SearchBar value="" onChange={mockOnChange} />);

    const input = screen.getByPlaceholderText(/Search countries/i);
    fireEvent.change(input, { target: { value: "Nigeria" } });

    expect(mockOnChange).toHaveBeenCalledTimes(1);
    expect(mockOnChange).toHaveBeenCalledWith("Nigeria");
  });
});
