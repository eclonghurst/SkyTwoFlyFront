import React from "react";
import AutocompleteButton from "./AutocompleteButton";

function ButtonBar() {
  return (
    <>
    <div className="ButtonBarContainer">
    <AutocompleteButton className="depatureButton"/>
    <AutocompleteButton/>
    <AutocompleteButton/>
    <AutocompleteButton/>
    </div>
    </>
  )
}

export default ButtonBar