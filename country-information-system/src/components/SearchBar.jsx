import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./SearchBar.css"; // <-- your own CSS for SearchBar

export default function SearchBar({ onSearch }) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    onSearch && onSearch(value); // live search update
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onSearch && onSearch(inputValue); // Enter key triggers search
    }
  };

  const handleClick = () => {
    onSearch && onSearch(inputValue); // click on icon triggers search
  };

  return (
    <div className="search-bar">
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className="search-icon"
        onClick={handleClick}
      />
      <input
        type="text"
        placeholder="Search countries"
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        className="search-input"
      />
    </div>
  );
}

