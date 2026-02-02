import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./SearchBar.css"; 

export default function SearchBar({ onSearch }) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    onSearch && onSearch(value); 
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onSearch && onSearch(inputValue); 
    }
  };

  const handleClick = () => {
    onSearch && onSearch(inputValue); 
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

