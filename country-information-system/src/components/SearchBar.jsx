import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import styles from "./SearchBar.module.css"; // your CSS module

function SearchBar({ onSearch }) {
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    if (onSearch) onSearch(search);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className={styles.search}>
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className={styles.icon}
        onClick={handleSearch}
      />
      <input
        type="text"
        placeholder="search where you will never visit"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyPress}
      />
    </div>
  );
}

export default SearchBar;
