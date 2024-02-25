"use client";

import React, { useState } from "react";

function CustomTypeahead({ suggestions, handleSuggestionSelected }) {
  const [query, setQuery] = useState("");

  const getSuggestions = async (query) => {
    // Your logic to fetch suggestions
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setQuery(value);
    getSuggestions(value);
  };

  return (
    <div className="relative">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search..."
        className="border border-gray-300 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
      <div className="absolute z-10 bg-white w-full mt-1 rounded-md shadow-lg">
        {suggestions.map((suggestion) => (
          <div
            key={suggestion.id}
            onClick={() => handleSuggestionSelected(suggestion)}
            className="py-2 px-3 hover:bg-gray-100 cursor-pointer"
          >
            {suggestion.name}
          </div>
        ))}
      </div>
    </div>
  );
}

function YourComponent() {
  const [searchKey, setSearchKey] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleSearchSubmit = () => {
    // Your logic for handling search submit
  };

  const handleSuggestionSelected = (selected) => {
    setSearchKey(selected.name);
    handleSearchSubmit();
  };

  const getSuggestions = async (query) => {
    if (query !== "") {
      const response = await fetch("/duajson/duas.json");
      const data = await response.json();
      setSuggestions(data.products);
    }
  };

  return (
    <>
      <div className="w-3/4">
        <div className="py-3 md:py-9 px-0">
          <CustomTypeahead
            suggestions={suggestions}
            handleSuggestionSelected={handleSuggestionSelected}
          />
        </div>
      </div>
      <button
        onClick={handleSearchSubmit}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Search
      </button>
    </>
  );
}

export default YourComponent;
