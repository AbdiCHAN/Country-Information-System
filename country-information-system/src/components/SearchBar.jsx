import "./SearchBar.css";

export default function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Search countries..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="search-bar"
    />
  );
}