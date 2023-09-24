import React, { useState, useEffect, useRef } from "react";
import './ButtonCSS.css'

// sample airport data
const ukAirportData = [
  'Heathrow Airport',
  'Gatwick Airport',
  'Manchester Airport',
  'Birmingham Airport',
  'Edinburgh Airport',
  'Glasgow Airport',
];

function AutocompleteButton() {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [selectedSuggestion, setSelectedSuggestion] = useState('');

  const inputRef = useRef(null);
  const suggestionsListRef = useRef(null);

  // Handling the input change
  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    const filteredSuggestions = ukAirportData.filter((airport) => airport.toLowerCase().includes(value.toLowerCase()));
    setSuggestions(filteredSuggestions);
  };

  const handleSuggestionClick = (suggestion) => {
    setSelectedSuggestion(suggestion);
    setInputValue(suggestion);
    setSuggestions([]);
  };

  // Event listener to detect clicks outside the button
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        suggestionsListRef.current &&
        !suggestionsListRef.current.contains(event.target) &&
        inputRef.current !== event.target
      ) {
        // If a click occurs outside the suggestions list and input field then hide the suggestions
        setSuggestions([]);
      }
    }

    // Add the event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="buttonContainer">
        <input className="autocompleteInputField"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Type here ..."
        />
        {suggestions.length > 0 && (
          <ul className="suggestion-list" ref={suggestionsListRef}>
            {suggestions.map((suggestion, index) => (
              <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default AutocompleteButton;