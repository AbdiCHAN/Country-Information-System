import { render, screen, fireEvent } from "@testing-library/react";
import AddCountry from "../pages/AddCountry";

describe("AddCountry Component", () => {
  test("renders the form correctly", () => {
    render(<AddCountry />);

    // Check for input fields
    expect(screen.getByPlaceholderText(/Country Name/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Capital City/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Population/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Flag Image URL/i)).toBeInTheDocument();
    expect(screen.getByText(/Add Country/i)).toBeInTheDocument();
  });

  test("adds a new country", () => {
    render(<AddCountry />);

    // Fill form
    fireEvent.change(screen.getByPlaceholderText(/Country Name/i), {
      target: { value: "Kenya" },
    });
    fireEvent.change(screen.getByPlaceholderText(/Capital City/i), {
      target: { value: "Nairobi" },
    });
    fireEvent.change(screen.getByRole("combobox"), {
      target: { value: "Africa" },
    });
    fireEvent.change(screen.getByPlaceholderText(/Population/i), {
      target: { value: "53771296" },
    });
    fireEvent.change(screen.getByPlaceholderText(/Flag Image URL/i), {
      target: { value: "kenya-flag.svg" },
    });

    // Submit form
    fireEvent.click(screen.getByText(/Add Country/i));

    // Check that country appears in the list
    expect(screen.getByText(/Kenya/i)).toBeInTheDocument();
    expect(screen.getByText(/Nairobi/i)).toBeInTheDocument();
    expect(screen.getByText(/Africa/i)).toBeInTheDocument();
    expect(screen.getByText(/53771296/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Kenya flag/i)).toBeInTheDocument();
  });

  test("edits an existing country", () => {
    render(<AddCountry />);

    // Add a country first
    fireEvent.change(screen.getByPlaceholderText(/Country Name/i), {
      target: { value: "Kenya" },
    });
    fireEvent.change(screen.getByPlaceholderText(/Capital City/i), {
      target: { value: "Nairobi" },
    });
    fireEvent.change(screen.getByRole("combobox"), {
      target: { value: "Africa" },
    });
    fireEvent.click(screen.getByText(/Add Country/i));

    // Click Edit button
    fireEvent.click(screen.getByText(/Edit/i));

    // Change capital
    fireEvent.change(screen.getByPlaceholderText(/Capital City/i), {
      target: { value: "Mombasa" },
    });

    // Submit update
    fireEvent.click(screen.getByText(/Update Country/i));

    // Verify updated capital
    expect(screen.getByText(/Mombasa/i)).toBeInTheDocument();
  });

  test("deletes a country", () => {
    render(<AddCountry />);

    // Add a country first
    fireEvent.change(screen.getByPlaceholderText(/Country Name/i), {
      target: { value: "Kenya" },
    });
    fireEvent.change(screen.getByPlaceholderText(/Capital City/i), {
      target: { value: "Nairobi" },
    });
    fireEvent.change(screen.getByRole("combobox"), {
      target: { value: "Africa" },
    });
    fireEvent.click(screen.getByText(/Add Country/i));

    // Mock window.confirm to automatically confirm deletion
    jest.spyOn(window, "confirm").mockImplementation(() => true);

    // Click Delete button
    fireEvent.click(screen.getByText(/Delete/i));

    // Verify country no longer exists
    expect(screen.queryByText(/Kenya/i)).not.toBeInTheDocument();
  });
});
