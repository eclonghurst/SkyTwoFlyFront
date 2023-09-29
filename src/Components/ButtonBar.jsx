import React from "react";
import AutocompleteButton from "./AutocompleteButton";
import SearchButton from "./SearchButton";

function ButtonBar() {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");

  }

  return (
    <>
    <div className="ButtonBarContainer">
      <form className="buttonBar-form" onSubmit={handleSubmit}>
        <AutocompleteButton/>
        <AutocompleteButton/>
        <AutocompleteButton/>
        <AutocompleteButton/>
        <AutocompleteButton/>
        <SearchButton/>
      </form>
    </div>
    </>
  )
}

export default ButtonBar