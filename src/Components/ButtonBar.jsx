import React from "react";
import AutocompleteButton from "./AutocompleteButton";
import SearchButton from "./SearchButton";

function ButtonBar() {
  return (
    <>
    <div className="ButtonBarContainer">
    <AutocompleteButton/>
    <AutocompleteButton/>
    <AutocompleteButton/>
    <AutocompleteButton/>
    <AutocompleteButton/>
    <SearchButton/>
    </div>
    </>
  )
}

export default ButtonBar