import React from 'react'
import '../CssFiles/ButtonCSS.css'
import { Link } from 'react-router-dom';

function SearchButton() {
  return (
    <button type="submit" className='searchButton'>
      <Link to='/flights'>
        <svg className="searchSvg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#000000">
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
        <path d="M11 6C13.7614 6 16 8.23858 16 11M16.6588 16.6549L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" 
        stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></g>
        </svg>
      </Link>
    </button>
  )
}

export default SearchButton;