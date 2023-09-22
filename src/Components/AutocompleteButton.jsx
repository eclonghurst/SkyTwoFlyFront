import React, { useState } from "react";
import './AutocompleteButtonCSS.css'

// Sample UK airport data
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

return (
    <>
    <div>
        <input type="text" value={inputValue} onChange={handleInputChange} placeholder="Type your local airport.."/>
        {suggestions.length > 0 && (
        <ul className="suggestion-list">
          {suggestions.map((suggestion, index) => (
            <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
    </>
)
}

export default AutocompleteButton;