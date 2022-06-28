import SearchResults from "components/Navbar/SearchBar/SearchResults";
import { useState, ChangeEvent } from "react";

export default function SearchBar() {
  const [results, setResults] = useState<string[]>([]);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setResults([value]);
  };

  return (
    <label className="search-bar">
      <i className="uil uil-search"></i>
      <input
        className="search-input"
        type="search"
        autoComplete="off"
        name="search"
        onChange={handleSearch}
        id="search"
        placeholder="Busca por creadores, proyectos o temas"
      />
      {results.length > 0 && <SearchResults />}
    </label>
  );
}
